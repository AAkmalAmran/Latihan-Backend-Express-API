const komentarService = require('../Service/komentar.service');

exports.createKomentar = async (req, res) => {
  try {
    const {isi, userId, threadsId} = req.body;
    const newKomentar = await komentarService.createKomentar({isi, userId, threadsId});
    return res.status(201).json(newKomentar);
  } catch (error) {
    console.error('Error creating komentar:', error);
    return res.status(500).json({error: 'Internal server error'});
  }
}

exports.getKomentars = async (req, res) => {
  try {
    const allKomentars = await komentarService.getAllKomentars();
    return res.status(200).json(allKomentars);
  } catch (error) {
    console.error('Error fetching komentars:', error);
    return res.status(500).json({error: 'Internal server error'});
  }
};

exports.getKomentarById = async (req, res) => {
  try { 
    const {id} = req.params;
    const komentar = await komentarService.getKomentarById(id); 
    if (!komentar) {
      return res.status(404).json({error: 'Komentar not found'});
    }
    return res.status(200).json(komentar);
  } catch (error) {   
    console.error('Error fetching komentar by ID:', error);
    return res.status(500).json({error: 'Internal server error'});
  }
};

exports.getKomentarByThreadId = async (req, res) => {
  try {
    const {threadId} = req.params;
    const komentars = await komentarService.getKomentarByThreadId(threadId);
    return res.status(200).json(komentars);
  } catch (error) {
    console.error('Error fetching komentars by thread ID:', error);
    return res.status(500).json({error: 'Internal server error'});
  }
};

exports.deleteKomentar = async (req, res) => {
  try {
    const {id} = req.params;
    const komentarToDelete = await komentarService.getKomentarById(id);
    if (!komentarToDelete) {
      return res.status(404).json({error: 'Komentar not found'});
    }
    await komentarService.deleteKomentar(id);
    return res.status(204).send();
  } catch (error) {
    console.error('Error deleting komentar:', error);
    return res.status(500).json({error: 'Internal server error'});
  }
};

exports.updateKomentar = async (req, res) => {
  try {
    const {id} = req.params;
    const {isi} = req.body;
    const komentarToUpdate = await komentarService.getKomentarById(id);
    if (!komentarToUpdate) {
      return res.status(404).json({error: 'Komentar not found'});
    }
    komentarToUpdate.isi = isi;
    await komentarService.updateKomentar(komentarToUpdate);
    return res.status(200).json(komentarToUpdate);
  } catch (error) {
    console.error('Error updating komentar:', error);
    return res.status(500).json({error: 'Internal server error'});
  }
};
