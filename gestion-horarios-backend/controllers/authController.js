// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

exports.register = async (req, res) => {
  const { name, city, telefono, cedula, email, password, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, city, telefono, cedula, email, password: hashedPassword, role });
    res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser });
  } catch (error) {
    console.error('Error en el registro:', error);
    res.status(500).json({ message: 'Error al registrar usuario', error });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({ token, role: user.role });
  } catch (error) {
    console.error('Error en el login:', error);
    res.status(500).json({ message: 'Error al iniciar sesión', error });
  }
};
