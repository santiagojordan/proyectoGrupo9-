module.exports = function(sequelize, dataTypes) {

    const alias = 'Comentario';
  
    const columnas = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Comentario: {
        type: dataTypes.STRING
      },
      fechaCreacion: {
        type: dataTypes.DATE
      }
    };
  
    const configuracionDeLaTabla = {
      tableName: "comentarios",
      timestamps: false,
      underscorded: false
    };
    
    const Comentario = sequelize.define(alias,columnas,configuracionDeLaTabla);
  
    Comentario.associate = function(models) {
        Comentario.belongsTo(models.Posteo, {
        as: 'posteos',
        foreignKey: 'idPost'
      }),
        Comentario.belongsTo(models.Usuario, {
        as: 'usuarios',
        foreignKey: 'idUsuario' 
      })
    };
  
    return Comentario;
  
  };