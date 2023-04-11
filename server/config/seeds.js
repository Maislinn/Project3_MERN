const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  // ❄️ MX: add categories seed data ⤵️
  const categories = await Category.insertMany([
    { name: "Essential Care" },
    { name: "Premium Care" },
  ]);
  // ❄️ MX: add categories seed data ⤴️

  console.log("categories seeded 🌱");

  await Product.deleteMany();

  // ❄️ MX: add products seed data ⤵️
  const products = await Product.insertMany([
    {
      name: "Drop-In Visit 30 MIN",
      description:
        "For those busy days when your pet needs a quick check-in, our 30-minute drop-in visit includes litter box cleaning and feeding. Our professional pet care specialists are trained to provide the best care for your furry friend!",
      image: 'Man-with-Cat-1.png',
      price: 20.0,
      services: ["Litter Box Cleaning", "Feeding"],
      categories: [categories[0]._id],
    },
    {
      name: "Drop-In Visit 60 MIN",
      description:
        "For those longer days away from home, our 60-minute drop-in visit includes litter box cleaning, feeding, playing, and petting. Your pet will get all the attention they need from our experienced pet care specialists!",
      image: 'Man-with-Cat-2.png',
      price: 35.0,
      services: ["Litter Box Cleaning", "Feeding", "Playing", "Petting"],
      categories: [categories[1]._id],
    },
    {
      name: "Recurring Visits 30 MIN",
      description:
        "Our recurring 30-minute visits provide peace of mind for busy pet owners. With a 3-day minimum and 10-day maximum, our professional pet care specialists will come to your home to clean the litter box and feed your furry friend.",
      image: 'Woman-with-Cat-1.png',
      price: 15.0,
      services: ["Litter Box Cleaning", "Feeding"],
      categories: [categories[0]._id],
    },
    {
      name: "Recurring Visits 60 MIN",
      description:
        "For pet owners who want more comprehensive care, our recurring 60-minute visits include litter box cleaning, feeding, playing, and petting. With a 3-day minimum and 10-day maximum, our professional pet care specialists will make sure your pet stays happy and healthy!",
      image: 'Woman-with-Cat-2.png',
      price: 30.0,
      services: ["Litter Box Cleaning", "Feeding", "Playing", "Petting"],
      categories: [categories[1]._id],
    },
    {
      name: "Long-Term Care",
      description:
        "For pet owners who need extended care for their furry friends, our long-term care plan includes daily 30-minute visits with litter box cleaning and feeding. With a minimum of 11 days and a maximum of 30 days, our professional pet care specialists will provide the best care possible for your pet!",
      image: 'Man-with-Cat-3.png',
      price: 15.0,
      services: ["Litter Box Cleaning", "Feeding"],
      categories: [categories[0]._id],
    },
  ]);
  // ❄️ MX: add products seed data ⤴️

  console.log("products seeded 🌱");

  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    location: "New York, NY",
    orders: [
      {
        products: [products[0]._id],
      },
      {
        products: [products[1]._id],
      },
      {
        products:[products[2]._id],
      }
      // ❄️ MX: commented out for seeding
      // products: [products[0]._id, products[1]._id, products[2]._id],
    ],
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded 🌱");

  process.exit();
});
