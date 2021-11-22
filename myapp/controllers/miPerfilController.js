const db = require('../database/models');
const Op = db.Sequelize.Op;



const miPerfilController = {
        index: (req, res) => { 
            db.User.findByPk(req.session.usuario.id,{
            
                include: [{
                    association: 'posteosU'
                }, {
                    association: 'comentariosU'
                }],
                
    
                }).then(users => {
                    
                    res.render('miPerfil', {
                        users: users
                    });
                })
        },
    edit: function (req, res) {
        res.render ('editarPerfil')
    }
};




module.exports = miPerfilController