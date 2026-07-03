const { Bouquet } = require('../db/models/Bouquet');

async function getAll() {
  return Bouquet.findAll();
}

async function getById(id) {
  return Bouquet.findByPk(id);
}

async function create(data) {
  return Bouquet.create(data);
}

async function update(id, data) {
  const item = await Bouquet.findByPk(id);
  if (!item) return null;
  return item.update(data);
}

async function remove(id) {
  const item = await Bouquet.findByPk(id);
  if (!item) return null;
  await item.destroy();
  return true;
}

module.exports = { getAll, getById, create, update, remove };
