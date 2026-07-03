import { Bouquet } from "../db/models/Bouquet.js";

export const listBouquets = async () => {
  return Bouquet.findAll();
};

export const getBouquetById = async (id) => {
  return Bouquet.findByPk(id);
};

export const createBouquet = async (data) => {
  return Bouquet.create(data);
};

export const updateBouquet = async (id, data) => {
  const bouquet = await Bouquet.findByPk(id);

  if (!bouquet) {
    return null;
  }

  return bouquet.update(data);
};

export const deleteBouquet = async (id) => {
  const bouquet = await Bouquet.findByPk(id);

  if (!bouquet) {
    return null;
  }

  await bouquet.destroy();
  return bouquet;
};