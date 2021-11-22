const db = require('../database/models');
const Op = db.Sequelize.Op;

const indexController = {
    
    index: (req, res) => { 
        db.Posteo.findAll({
            include: [{
                all:true,
                nested: true
            }],

            })
        

    }
}

module.exports = indexController