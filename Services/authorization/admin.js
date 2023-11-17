require('dotenv').config()
const jwt = require('jsonwebtoken');

const authenticateAdmin = (req, res, next) => {
  const authHeader = req.header('Authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (decoded.role !== 'ADMIN') {
      return res.status(403).json({ message: 'Access denied' });
    }
    req.user = decoded; 
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


module.exports = authenticateAdmin;