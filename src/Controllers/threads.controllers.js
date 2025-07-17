const threadsService = require('../Service/threads.service');

exports.create = async (req, res) => {
  try {
    const thread = await threadsService.createThreads(req.body);
    res.status(201).json(thread);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const allThreads = await threadsService.findAllThreads();
    res.status(200).json(allThreads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const thread = await threadsService.findOneThreads(req.params.id);
    if (!thread) {
      return res.status(404).json({ message: 'Thread not found' });
    }
    res.status(200).json(thread);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const thread = await threadsService.updateThreads(req.params.id, req.body);
    if (!thread) {
      return res.status(404).json({ message: 'Thread not found' });
    }
    res.status(200).json(thread);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const thread = await threadsService.findOneThreads(req.params.id);
    if (!thread) {
      return res.status(404).json({ message: 'Thread not found' });
    }
    await threadsService.deleteThreads(req.params.id);
    res.status(204).send('Thread deleted successfully');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};