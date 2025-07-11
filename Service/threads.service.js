const db = require('../models');
const threads = db.threads;

exports.create = async (req, res) => {
  try {
    const thread = await threads.create(req.body);
    res.status(201).json(thread);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const allThreads = await threads.findAll();
    res.status(200).json(allThreads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const thread = await threads.findByPk(req.params.id);
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
    const thread = await threads.findByPk(req.params.id);
    if (!thread) {
      return res.status(404).json({ message: 'Thread not found' });
    }
    await thread.update(req.body);
    res.status(200).json(thread);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

exports.delete = async (req, res) => {
  try {
    const thread = await threads.findByPk(req.params.id);
    if (!thread) {
      return res.status(404).json({ message: 'Thread not found' });
    }
    // Check if the user exists before deleting the thread
    const user = await userService.findUserById(thread.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await thread.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};