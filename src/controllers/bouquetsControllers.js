const bouquetsServices = require('../services/bouquetsServices');
const HttpError = require('../helpers/HttpError');

async function getAll(req, res, next) {
  try {
    const items = await bouquetsServices.getAll();
    res.json(items);
  } catch (err) {
    next(err);
  }
}

async function getById(req, res, next) {
  try {
    const item = await bouquetsServices.getById(req.params.id);
    if (!item) throw new HttpError(404, 'Bouquet not found');
    res.json(item);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    const created = await bouquetsServices.create(req.body);
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const updated = await bouquetsServices.update(req.params.id, req.body);
    if (!updated) throw new HttpError(404, 'Bouquet not found');
    res.json(updated);
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    const deleted = await bouquetsServices.remove(req.params.id);
    if (!deleted) throw new HttpError(404, 'Bouquet not found');
    res.status(204).end();
  } catch (err) {
    next(err);
  }
}

module.exports = { getAll, getById, create, update, remove };
