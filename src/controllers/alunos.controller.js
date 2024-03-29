const model = require('../models/alunos.models');

const getAllAluno = async function getAllAluno() {
    const result = await model.getAll();
    return {
        code: 200,
        body: {
            status: true,
            data: result,
        },
    };
};

const getByIdAluno = async function getByIdAluno(data) {
    const { params } = data;
    if(!params.id) throw new Error('[id] é obrigatório!', { code: 404 });

    const result = await model.getById(params.id);
    return {
        code: 200,
        body: {
            status: true,
            data: result,
        },
    };
};

const updateAluno = async function updateAluno(data) {
    const { body, params } = data;
    if(!params.id) throw new Error('[id] é obrigatório!', { code: 404 });

    if(!body) throw new Error('[body] é obrigatório!', { code: 404 });

    const result = await model.updateOne(params.id, body);
    return {
        code: 200,
        body: {
            status: true,
            data: {
                statusUpdate: result,
            },
        },
    };
};

const deleteAluno = async function deleteAluno(data) {
    const { params } = data;
    if(!params.id) throw new Error('[id] é obrigatório!', { code: 404 });

    const result = await model.deleteOne(params.id);
    return {
        code: 200,
        body: {
            status: true,
            data: {
                statusDelete: result,
            },
        },
    };
};


module.exports = {
    getAllAluno,
    getByIdAluno,
    updateAluno,
    deleteAluno,
};
