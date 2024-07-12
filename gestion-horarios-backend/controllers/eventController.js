const { Event } = require('../models');

exports.createEvent = async (req, res) => {
  const { title, description } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
    const newEvent = await Event.create({
      title,
      description,
      image,
    });
    res.status(201).json({ message: 'Evento creado exitosamente', event: newEvent });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el evento', error });
  }
};

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los eventos', error });
  }
};

exports.uploadDocument = async (req, res) => {
  const document = req.file ? req.file.filename : null;

  try {
    if (!document) {
      return res.status(400).json({ message: 'No se ha subido ningún documento' });
    }

    res.status(201).json({ message: 'Documento subido exitosamente', document });
  } catch (error) {
    res.status(500).json({ message: 'Error al subir el documento', error });
  }
};
