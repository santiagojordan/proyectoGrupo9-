const bcrypt = require('bcryptjs');
const db = require('../database/models');
const Usuario = db.Usuario;



const registracionController = {
	// Render
	registracion: function (req, res) {
		res.render('registracion')
	},
	
	// Funcion de como se registra un nuevo usuario
	registrar: function (req, res) {
	 req.body.password = bcrypt.hashSync(req.body.password)
		const usuarioCreado ={ 
			nombre:req.body.nombre,
			email:req.body.email,
			password:req.body.password,
			fecha:req.body.fecha,
		} 
		db.Usuario.create (usuarioCreado)
		.then (function (Usuario){
			return res.redirect ("/login")
		}
			)
			.catch(err => {
				console.log(err);
				res.send(err) })
   
	}
}
module.exports = registracionController;