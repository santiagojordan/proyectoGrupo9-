const db = require('../database/models'); 
const Op = db.Sequelize.Op;

const detailController = {
    index: (req, res) => { 
        db.User.findAll({
            include: [{
                association: 'posteosU'
            }, {
                association: 'comentariosU'
            }],
            

            }).then(users => {
                res.render('detailUser', {
                    users: users
                });
            })
    },
    
    
    add: function (req, res) {
        if (req.session.usuario) {
            res.render('detail/add')
        } else {
            return res.redirect('/')
        }
    },
    create: (req, res) => { 
        if (req.session.usuario) {
            db.Post.create({
                    usuario: req.body.usuario, 
                    portada: req.file.filename, 
                    comentario: req.body.comentario,
                    users_id: req.session.usuario.id 
                })
                .then(posteo => {
                    res.redirect("/detail/id/" + posteo.id) 
                })
        } else {
            res.render('detail/add', { 
                error: 'No se pueden dejar campos vacíos'
            })
        }
    },
    post: function (req, res) {
        let idPost = req.params.id;
        let postEncontrado = Post.findById(idPost);

       res.render ('detail/post', {listaPost: postEncontrado})
       /*res.send(postEncontrado);*/
    },
    posteos: function(req, res){
        db.User.findAll({
            include: [{association: "posteos"}]
        })
        .then(posteoss =>{
            res.send(posteoss)
        })
    },
    comentarios: function(req, res){
        db.User.findAll({
            include: [{association: "comentarios"}]
        })
        .then(comentarioss =>{
            res.send(comentarioss)
        })
    }
}

module.exports = detailController