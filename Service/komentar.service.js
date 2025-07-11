const db = require('../models');
const komentar = db.komentar;

const createKomentar = async (req, res) => {
  try {
    const { isi, userId, threadsId } = req.body;
    const newKomentar = await komentar.create({ isi, userId, threadsId });
    return res.status(201).json(newKomentar);
  } catch (error) {
    console.error('Error creating komentar:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const getKomentars = async (req, res) => {
  try {
    const allKomentars = await komentar.findAll();
    return res.status(200).json(allKomentars);
  } catch (error) {
    console.error('Error fetching komentars:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteKomentar = async (req, res) => {
  try {
    const { id } = req.params;
    const komentarToDelete = await komentar.findByPk(id);
    if (!komentarToDelete) {
      return res.status(404).json({ error: 'Komentar not found' });
    }
    await komentarToDelete.destroy();
    return res.status(204).send();
  } catch (error) {
    console.error('Error deleting komentar:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const updateKomentar = async (req, res) => {
  try {
    const { id } = req.params;
    const { isi } = req.body;
    const komentarToUpdate = await komentar.findByPk(id);
    if (!komentarToUpdate) {
      return res.status(404).json({ error: 'Komentar not found' });
    }
    komentarToUpdate.isi = isi;
    await komentarToUpdate.save();
    return res.status(200).json(komentarToUpdate);
  } catch (error) {
    console.error('Error updating komentar:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
