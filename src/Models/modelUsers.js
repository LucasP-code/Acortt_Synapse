const connection = require('./connection');
const bcrypt = require('bcrypt')

class user{
    constructor(usu_nome , usu_email , usu_senha , usu_tel , facul_id){
        this.usu_nome = usu_nome,
        this.usu_email = usu_email,
        this.usu_senha = usu_senha,
        this.usu_tel = usu_tel,
        this.facul_id= facul_id
    }
};

const createUser = async (infoUser) => {
    const {usu_nome , usu_email , usu_senha , usu_tel , facul_id} = infoUser;
    console.log(usu_nome);
    const query = 'INSERT INTO Usuarios (usu_nome , usu_email , usu_senha , usu_tel , facul_id) VALUES (?, ?, ?, ?, ?)'
    const newUser = new user(usu_nome , usu_email , usu_senha , usu_tel , facul_id)

    const salt = await bcrypt.genSalt(12)
    const SenhaHash = await bcrypt.hash(usu_senha,salt)

    const [createUser] = await connection.execute (query, [newUser.usu_nome , newUser.usu_email , SenhaHash , newUser.Usu_tel , newUser.facuul_id])

    return createUser;
};

const getAllInfoUser = async (usu_id) =>{
    const query = 'SELECT usu_nome, usu_email , usu_tel , facul_id FROM Usuarios WHERE id = ?'

    const [InfoUser] = await connection.execute(query, [usu_id]);
        return InfoUser;    
};

const getAll = async() => {

    try {
        const query = ('SELECT * FROM Usuariios');

        const [user] = await connection.execute(query);
        return user;
    } catch (error) {
        return res.status(500).json({ status: 7 });
    }

}; 

module.exports = {
    getAll,
    createUser
};
