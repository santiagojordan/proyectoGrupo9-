const db = require('../database/models');
const usuarios = require('../database/models/usuarios');
const posts = require('../data/posteos')
const Op = db.Sequelize.Op;

const indexController = {
    index: (req, res) => {
        db.Posteo.findAll({
            include: [
                //all:true,
                //nested: true
                {association: 'Usuario'},
                {association: 'comentarios', include: 'usuarios'}
            ],
           
            }).then(posts => {
                /*res.send(postsViejos)*/
                res.render('index',{
                    posts: posts,

                })
            
            })
    }
}
module.exports = indexController