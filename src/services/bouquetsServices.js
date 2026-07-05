import { Bouquet } from "../db/models/Bouquet.js";

const normalizeBouquet = (bouquet) => {
  if (!bouquet) {
    return null;
  }

  const plainBouquet = bouquet.get({ plain: true });

  return {
    ...plainBouquet,
    name: plainBouquet.title,
    desc: plainBouquet.description,
    img: plainBouquet.photoURL,
    img2x: plainBouquet.photoURL,
  };
};

export const listBouquets = async () => {
  const bouquets = await Bouquet.findAll();

  return bouquets.map(normalizeBouquet);
};

export const getBouquetById = async (id) => {
  const bouquet = await Bouquet.findByPk(id);

  return normalizeBouquet(bouquet);
};

export const createBouquet = async (data) => {
  const bouquet = await Bouquet.create(data);

  return normalizeBouquet(bouquet);
};

export const updateBouquet = async (id, data) => {
  const bouquet = await Bouquet.findByPk(id);

  if (!bouquet) {
    return null;
  }

  const updatedBouquet = await bouquet.update(data);

  return normalizeBouquet(updatedBouquet);
};

export const deleteBouquet = async (id) => {
  const bouquet = await Bouquet.findByPk(id);

  if (!bouquet) {
    return null;
  }

  await bouquet.destroy();

  return normalizeBouquet(bouquet);
};