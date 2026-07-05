import { sequelize } from "./sequelize.js";
import { Bouquet } from "./models/Bouquet.js";

const bouquets = [
  {
    title: "Peach Meadow",
    description:
      "A soft and radiant arrangement of peach and blush roses with lush greenery in a straw basket — light and natural.",
    price: 55,
    photoURL: "src/images/peach-meadow@1x.webp",
    favorite: false,
  },
  {
    title: "Blush Romance",
    description:
      "A premium bouquet of deep pink and ivory roses, complemented by silver eucalyptus — sophisticated and intimate.",
    price: 34,
    photoURL: "src/images/blush-romance@1x.webp",
    favorite: false,
  },
  {
    title: "Pastel Garden",
    description:
      "A pastel-toned mix of spray roses and greenery in a woven basket — gentle, airy, and perfect for any occasion.",
    price: 40,
    photoURL: "src/images/pastel-garden@1x.webp",
    favorite: false,
  },
  {
    title: "Tulip Charm",
    description:
      "A vivid bouquet of bright tulips and roses in a lavender box — cheerful and full of charm.",
    price: 61,
    photoURL: "src/images/tulip-charm@1x.webp",
    favorite: false,
  },
  {
    title: "Berry Bloom",
    description:
      "A lush mix of rich pink, purple, and cream blooms with textured greens — romantic and elegant.",
    price: 32,
    photoURL: "src/images/berry-bloom@1x.webp",
    favorite: false,
  },
  {
    title: "Sweet Whisper",
    description:
      "A charming spring bouquet with peonies, roses, and lilac-toned accents — fresh, lively, and expressive.",
    price: 40,
    photoURL: "src/images/sweet-whisper@1x.webp",
    favorite: false,
  },
  {
    title: "Field Joy",
    description:
      "A rustic hand-tied bouquet of sunflowers, lisianthus, and daisies — perfect for brightening the day.",
    price: 49,
    photoURL: "src/images/field-joy@1x.webp",
    favorite: false,
  },
  {
    title: "Soft Bloom",
    description:
      "A delicate bouquet of pink carnations and roses wrapped in satin paper — soft, stylish, and versatile.",
    price: 37,
    photoURL: "src/images/soft-bloom@1x.webp",
    favorite: false,
  },
];

const seedBouquets = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    await Bouquet.destroy({ where: {} });
    await Bouquet.bulkCreate(bouquets);

    console.log("Bouquets seeded successfully");
  } catch (error) {
    console.error("Seed error:", error.message);
  } finally {
    await sequelize.close();
  }
};

seedBouquets();