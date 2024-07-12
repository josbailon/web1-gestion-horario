const { Document } = require('../models');

exports.uploadDocument = async (req, res) => {
  const { title, description } = req.body;
  const document = req.file ? req.file.filename : null;

  try {
    if (!document) {
      return res.status(400).json({ message: 'No se ha subido ningún documento' });
    }

    const newDocument = await Document.create({
      title,
      description,
      document,
    });

    res.status(201).json({ message: 'Documento subido exitosamente', document: newDocument });
  } catch (error) {
    console.error('Error al subir el documento:', error);
    res.status(500).json({ message: 'Error al subir el documento', error });
  }
};

exports.getAllDocuments = async (req, res) => {
  try {
    const documents = await Document.findAll();
    res.status(200).json(documents);
  } catch (error) {
    console.error('Error al obtener los documentos:', error);
    res.status(500).json({ message: 'Error al obtener los documentos', error });
  }
};
