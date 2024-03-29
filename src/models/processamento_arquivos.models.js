const { extend, isPlainObject } = require('lodash');
const moment = require('moment');
const { get, ObjectId } = require('../lib/db');

const insert = async function insert(file) {
    const Collection = await get('processamento_arquivos');
    const date = moment.utc().toDate();

    file.created_at = date;
    file.updated_at = date;
    file.deleted_at = null;

    const result = await Collection.insertOne(file);
    return result.insertedId;
};

const getById = async function getById(id) {
    const Collection = await get('processamento_arquivos');
    const criteria = { _id: ObjectId(id) };

    const result = await Collection.findOne(criteria);
    return result;
};

const updateOne = async function updateOne(id, data) {
    const Collection = await get('processamento_arquivos');
    const criteria = { _id: ObjectId(id) };
    const update = {
        $set: extend(data, { updated_at : moment.utc().toDate() }),
    };

    const result = await Collection.updateOne(criteria, update);
    return result.modifiedCount === 1;
};

module.exports = {
    insert,
    getById,
    updateOne,
};

