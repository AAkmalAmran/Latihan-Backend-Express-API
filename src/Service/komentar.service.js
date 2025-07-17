const db = require('../models');
const komentar = db.komentar;

exports.createKomentar = async (data) => {
  try {
    const newKomentar = await komentar.create(data);
    return newKomentar;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getAllKomentars = async () => {
  try {
    const allKomentars = await komentar.findAll();
    return allKomentars;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getKomentarById = async (id) => {
  try {
    const komentarById = await komentar.findByPk(id);
    if (!komentarById) {
      throw new Error('Komentar not found');
    }
    return komentarById;
  } catch (error) {
    throw new Error(error.message);
  }
}; 

exports.updateKomentar = async (data) => {
  try {
    const komentarToUpdate = await komentar.findByPk(data.id);
    if (!komentarToUpdate) {
      throw new Error('Komentar not found');
    }
    await komentarToUpdate.update(data);
    return komentarToUpdate;
  } catch (error) {
    throw new Error(error.message);
  }
}; 

exports.deleteKomentar = async (id) => {      
  try {
    const komentarToDelete = await komentar.findByPk(id);
    if (!komentarToDelete) {
      throw new Error('Komentar not found');
    }
    await komentarToDelete.destroy();
    return { message: 'Komentar deleted successfully' };
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getKomentarByThreadId = async (threadId) => {
  try {
    const komentars = await komentar.findAll({
      where: { threadsId: threadId }
    });
    return komentars;
  } catch (error) {
    throw new Error(error.message);
  }
};