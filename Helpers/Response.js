const successRes = (body, statusCode = 200) => {
  return {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: 'success',
      success: true,
      body,
    }),
  };
};

const errorRes = (message, statusCode = 500) => {
  return {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message,
      success: false,
    }),
  };
};

module.exports = {
  successRes,
  errorRes,
};
