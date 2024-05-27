const models = require('../Models/modelsProd');


const getAll = async(req,res) => {
    try {
        const prod = await models.getAll();
        return res.status(200).json(prod);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

const CreateProd = async (req, res) => { 
    try {
        const createProd = await models.CreateProd(req.body);
        return res.status(201).json(createProd);
    } catch (error) {
        return res.status(500).json({ status: 4, error: error.message });
    }
}


const getAllinfoprod = async (req, res) => {
    try {
        const InfoProd = await models.getAllinfoprod();
        return res.status(200).json(InfoProd);
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

module.exports = { 
    getAll,
    CreateProd,
    getAllinfoprod
}
