const db = require('../database/models');
const Op = db.Sequelize.Op;

const indexController = {
    index: (req, res) => {
        db.Posteo.findAll({
            include: [{
                all:true,
                //nested: true
            }],
           
            }).then(posts => {
                /*res.send(postsViejos)*/
                res.render('index',{
                    posts: posts
                })
            
            })
    }
}
module.exports = indexController