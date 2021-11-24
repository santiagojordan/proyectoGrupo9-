const posts = require('../data/posteos');
const users = require('../data/usuarios');
let db = require('../database/models');
let bcrypt = require('bcryptjs');



const registracionController = {
	//render
	registracion: function (req, res) {
		res.render('registracion')
	},
	
	//funcion de como se registra un usuario
	registrar: function (req, res) {
	 req.body.password = bcrypt.hashSync(req.body.password)
		const usuarioCreado ={ 
			nombre:req.body.nombre ,
			apellido:req.body.apellido ,
			username:req.body.username ,
			email:req.body.email ,
			password:req.body.password ,
			fecha:req.body.fecha,
		} 
		db.usuario.create (usuarioCreado)
		.then (function (usuario){
			return res.redirect ("/users/login")
		}
			)
			.catch(err => {
				console.log(err);
				res.send(err) })
   
	}
}
module.exports = registracionController;