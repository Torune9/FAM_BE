require('dotenv').config()
const jwt = require('jsonwebtoken');

const inspectorAcc = (req, res, next) => {
  const auditHeader = req.header('Authorization');

  if (!auditHeader || !auditHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = auditHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (decoded.role == 'INSPECTOR') {
      req.user = decoded; 
      return next();
    }
    return res.status(403).json({ message: 'Access denied' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


module.exports = inspectorAcc;