module.exports = function(sequelize, dataTypes) {

    const alias = 'Posteo';
  
    const columnas = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      pieFoto: {
        type: dataTypes.STRING
      },
      fechaCreacion: {
        type: dataTypes.DATE
      },
      foto: {
        type: dataTypes.STRING
      },
      idUsuario: {
        type: dataTypes.INTEGER
      }
    };
  
    const configuracionDeLaTabla = {
      tableName: "posteos",
      timestamps: false,
      underscorded: false
    };
    
    const Posteo = sequelize.define(alias,columnas,configuracionDeLaTabla);
  
    Posteo.associate = function(models) {
        Posteo.hasMany(models.Usuario, {
        as: 'Usuario',
        foreignKey: 'idUsuario' 
      }),
      Posteo.hasMany(models.Comentario, {
        as: 'comentarios',
        foreignKey: 'idUsuario' 
      })
    };
  
    return Posteo;
  
  };