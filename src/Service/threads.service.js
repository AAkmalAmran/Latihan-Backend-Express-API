const db = require('../models');
const threads = db.threads;

exports.createThreads = async (data) => {
  try {
    const thread = await threads.create(data);
    return thread;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.findAllThreads = async () => {
  try {
    const allThreads = await threads.findAll();
    return allThreads;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.findOneThreads = async (id) => {
  try {
    const thread = await threads.findByPk(id);
    if (!thread) {
      throw new Error('Thread not found');
    }
    return thread;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.updateThreads = async (id, data) => {
  try {
    const thread = await threads.findByPk(id);
    if (!thread) {
      throw new Error('Thread not found');
    }
    await thread.update(data);
    return thread;
  } catch (error) {
    throw new Error(error.message);
  }
};
exports.deleteThreads = async (id) => {
  try {
    const thread = await threads.findByPk(id);
    if (!thread) {
      throw new Error('Thread not found');
    }
    await thread.destroy();
    return { message: 'Thread deleted successfully' };
  } catch (error) {
    throw new Error(error.message);
  }
};

