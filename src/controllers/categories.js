const Category = require('../models/Category');

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    const categoryNames = categories.map((category) => ({ id: category.id, name: category.name }));
    res.json(categoryNames);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getAllCategories };
