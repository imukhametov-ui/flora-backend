import * as bouquetsServices from "../services/bouquetsServices.js";
import HttpError from "../helpers/HttpError.js";
import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";
export const getAllBouquets = async (req, res, next) => {
  try {
    const bouquets = await bouquetsServices.listBouquets();
    res.status(200).json(bouquets);
  } catch (error) {
    next(error);
  }
};

export const getBouquetById = async (req, res, next) => {
  try {
    const bouquet = await bouquetsServices.getBouquetById(req.params.id);

    if (!bouquet) {
      throw HttpError(404, "Not found");
    }

    res.status(200).json(bouquet);
  } catch (error) {
    next(error);
  }
};

export const createBouquet = async (req, res, next) => {
  try {
    const bouquet = await bouquetsServices.createBouquet(req.body);
    res.status(201).json(bouquet);
  } catch (error) {
    next(error);
  }
};

export const updateBouquet = async (req, res, next) => {
  try {
    const bouquet = await bouquetsServices.updateBouquet(req.params.id, req.body);

    if (!bouquet) {
      throw HttpError(404, "Not found");
    }

    res.status(200).json(bouquet);
  } catch (error) {
    next(error);
  }
};

export const deleteBouquet = async (req, res, next) => {
  try {
    const bouquet = await bouquetsServices.deleteBouquet(req.params.id);

    if (!bouquet) {
      throw HttpError(404, "Not found");
    }

    res.status(200).json({
      message: "Bouquet deleted",
    });
  } catch (error) {
    next(error);
  }
};

export const updateFavorite = async (req, res, next) => {
  try {
    const bouquet = await bouquetsServices.updateBouquet(req.params.id, {
      favorite: req.body.favorite,
    });

    if (!bouquet) {
      throw HttpError(404, "Not found");
    }

    res.status(200).json(bouquet);
  } catch (error) {
    next(error);
  }
};
export const updatePhoto = async (req, res, next) => {
  try {
    if (!req.file) {
      throw HttpError(400, "Photo is required");
    }

    const { path: tempPath, originalname } = req.file;
    const extension = path.extname(originalname);
    const filename = `${nanoid()}${extension}`;
    const photosDir = path.resolve("public", "photos");
    const resultPath = path.join(photosDir, filename);

    await fs.rename(tempPath, resultPath);

    const photoURL = `/photos/${filename}`;

    const bouquet = await bouquetsServices.updateBouquet(req.params.id, {
      photoURL,
    });

    if (!bouquet) {
      throw HttpError(404, "Not found");
    }

    res.status(200).json(bouquet);
  } catch (error) {
    next(error);
  }
};