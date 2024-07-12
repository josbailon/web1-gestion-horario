const express = require('express');
const cors = require('cors');
const { sequelize } = require('../models');
const authRoutes = require('../routes/auth');
const eventRoutes = require('../routes/events');
const documentRoutes = require('../routes/documents');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

// Servir archivos estáticos desde la carpeta uploads
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/documents', documentRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
