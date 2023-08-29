const jwt = require('jsonwebtoken');
require('dotenv').config()

const authenticateAdmin = (req, res, next) => {
  const token = req.header('Bearer-Token');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
    if (decoded.role !== 'ADMIN') {
      return res.status(403).json({ message: 'Access denied' });
    }
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { authenticateAdmin };