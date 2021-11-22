const db = require('../database/models');
const registracion = db.Register;
const Op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');


const registracionController = {
    index: function (req, res) {
        res.render ('registracion', {error: null})
    },

    store: function(req, res){
        res.send(req.file)
    },

    createUser: (req, res) => {
        if (
            req.body.nombre !="" &&
            req.body.apellido !="" &&
            req.body.email !="" &&
            req.body.fecha !="" &&
            req.body.usuario !="" &&
            req.body.passwords !="" 
            ) {
            if (req.body.passwords.length >= 4) {
                if (req.body.passwords == req.body.confirContra) {
                    if (req.file) {
                        
                        db.User.findOne({
                                where: {
                                    username: req.body.usuario
                                }
                            })
                            .then(resultado => {
                                if (!resultado) {
                                    db.User.create({
                                        nombre: req.body.nombre,
                                        apellido: req.body.apellido,
                                        username: req.body.usuario,
                                        email: req.body.email,
                                        passwords: bcrypt.hashSync(req.body.passwords, 10),
                                        picture: req.file.filename,
                                        fecha: req.body.fecha,
                                        
                                    }).then(user => {
                                        req.session.usuario = user

                                        res.cookie('userId', user.id, {
                                            maxAge: 1000 * 60 * 5
                                        });

                                        res.redirect('/');
                                    });
                                } else {
                                    res.render('registracion', {
                                        error: 'Ya existe este nombre de usuario'
                                    })
                                }
                            })

                    } else {

                        
                        db.User.findOne({
                                where: {
                                    username: req.body.usuario
                                }
                            })
                            .then(resultado => {
                                if (!resultado) {
                                    db.User.create({
                                        name: req.body.nombre,
                                        last_name: req.body.apellido,
                                        email: req.body.email,
                                        nacimiento: req.body.fecha,
                                        username: req.body.usuario,
                                        cover: "../public/images/fUsuario/fhombre.jpg",
                                        passwords: bcrypt.hashSync(req.body.passwords, 10),
                                    }).then(user => {
                                        req.session.usuario = user
                                        res.cookie('userId', user.id, {
                                            maxAge: 1000 * 60 * 5
                                        });

                                        res.redirect('/index');
                                    });
                                } else {
                                    res.render('registracion', {
                                        error: 'Nombre de usuario existente, elija otro por favor'
                                    })
                                }
                            })
                    }
                } else {
                    res.render('registracion', {
                        error: 'Sus contraseñas no coinciden'
                    })
                }
            } else {
                res.render('registracion', {
                    error: 'La contraseña debe contener mas de tres caracteres'
                })
            }
        } else {
            res.render('registracion', {
                error: 'Ningun campo puede quedar vacio'
            })
        }
    }
};

module.exports = registracionController