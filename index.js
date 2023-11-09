const { successRes, errorRes } = require('./Helpers/Response');
const DB = require('./Helpers/DB');
const { isJSON } = require('./Helpers/Other');

// Simply logging to CloudWatch
const Logger = (msg) => console.log(msg);

const formattedError = (msg, code) => {
  const error = new Error(msg);
  error.status = code;
  return error;
}

const checkingInventory = (parsedBody, DB) => {
  const orderItems = [];
  // Making sure we have all items in order in stock
  // This may be redundent but just wanted to have this check here
  parsedBody.line_items.map((item) => {
    const currentProductQty = DB.get(item.id);
    const newQty = currentProductQty - 1
    if (newQty < 0) {
      const msg = `No inventory left of item ${item.id}, order ${parsedBody.id} was not processed`;
      Logger(msg);
      throw formattedError(msg, 422);
    }

    // Saving here for later use so as to not have to query the DB again
    orderItems.push({ id: item, currentProductQty });
  });

  return orderItems;
}

module.exports.handler = async (event) => {
  try {
    const { body: rawBody } = event;
    if (!rawBody || !isJSON(rawBody)) {
      throw formattedError('Invalid body provided', 422);
    }

    const parsedBody = JSON.parse(rawBody);

    if (!parsedBody?.line_items?.length) {
      const msg = `No line items provided in order ${parsedBody.id}`;
      Logger(msg);
      throw formattedError(msg, 422);
    }

    const orderItems = checkingInventory(parsedBody, DB)

    // Since we made sure that there was enough inventory above we can update here
    orderItems.map(({ id, currentProductQty }) => {
      DB.upsert(id, currentProductQty - 1);
    });

    Logger(`Order ${parsedBody.id} was successfully processed`);
    return successRes({ id: parsedBody.id });
  } catch (e) {
    Logger(`Error: ${e.status} - ${e.message}`);
    return errorRes(e.message, e.status);
  }
};
