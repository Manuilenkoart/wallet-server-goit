const fs = require("fs");
const utils = require("util");

const readFile = utils.promisify(fs.readFile);
const writeFile = utils.promisify(fs.writeFile);
const path = require("path");

const dbpathCosts = path.resolve(__dirname, "..", "db/all-costs.json");

module.exports = {
  async getById(id) {
    let costs = await readFile(dbpathCosts);
    costs = JSON.parse(costs);

    for (const el of costs) {
      if (el.id == id) {
        return el;
      }
    }
  },
  async getQueryCategory(category) {
    const arryCosts = [];
    let costs = await readFile(dbpathCosts);
    costs = JSON.parse(costs);
    for (const el of costs) {
      if (el.categories.includes(category)) {
        arryCosts.push(el);
      }
    }
    return arryCosts;
  },
  async getAll() {
    let products = await readFile(dbpathCosts);
    products = JSON.parse(products);
    return products;
  }
};
