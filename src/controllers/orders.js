const Order = require('../models/Order');

const finishOrder = async (req, res) => {
  try {
    const { fullName, address, email, products } = req.body;

    const newOrder = await Order.create({
      fullName,
      address,
      email,
      products,
    });

    res.status(201).json({ message: 'Order created successfully', order: newOrder });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { finishOrder };
