module.exports = function(sequelize, dataTypes) {

    const alias = 'Usuario';
  
    const columnas = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: dataTypes.STRING
      },
      apellido: {
        type: dataTypes.STRING
      },
      email: {
        type: dataTypes.STRING
      },
      contrasenia: {
        type: dataTypes.STRING
      },
      fotoPerfil: {
        type: dataTypes.STRING
      },
      fecha: {
        type: dataTypes.DATE
      },
      telefono: {
        type: dataTypes.INTEGER
      }
    };
  
    const configuracionDeLaTabla = {
      tableName: "usuarios",
      timestamps: false,
      underscorded: false
    };
    
    const Usuario = sequelize.define(alias,columnas,configuracionDeLaTabla);
  
    Usuario.associate = function(models) {
      Usuario.hasMany(models.Posteo, {
        as: 'posteos',
        foreignKey: 'idUsuario' 
      }),
      Usuario.hasMany(models.Comentario, {
        as: 'comentarios',
        foreignKey: 'idUsuario' 
      })
    };
  
    return Usuario;
  
  };