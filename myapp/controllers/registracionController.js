const posts = require('../data/posteos');
const users = require('../data/usuarios');
let db = require('../database/models'); // Relaciona el controlador con los modelos
let bcrypt = require('bcryptjs');



const registracionController = {
	// Render
	registracion: function (req, res) {
		res.render('registracion')
	},
	
	// Funcion de como se registra un usuario
	registrar: function (req, res) {
	 req.body.password = bcrypt.hashSync(req.body.password)
		const usuarioCreado ={ 
			nombre:req.body.nombre,
			email:req.body.email,
			password:req.body.password,
			fecha:req.body.fecha,
		} 
		db.usuario.create (usuarioCreado)
		.then (function (usuario){
			return res.redirect ("/login")
		}
			)
			.catch(err => {
				console.log(err);
				res.send(err) })
   
	}
}
module.exports = registracionController;