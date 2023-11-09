
const DB = {
  inventory: {},
  upsert: (id, qty) => (DB.inventory[id] = qty),
  // Going to fake the inventory in DB
  // Could query Shopify but that was not mentioned in the requirements
  get: (id) => DB.inventory[id] || 10,
};

module.exports = DB;