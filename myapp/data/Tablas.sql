DROP DATABASE IF EXISTS `autos`;

CREATE DATABASE autos;

USE autos;

CREATE TABLE usuarios(
id INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(20) NOT NULL,
apellido VARCHAR(30)NOT NULL,
email VARCHAR(120) UNIQUE NOT NULL,
contrasenia VARCHAR(200) NOT NULL,
fotoPerfil VARCHAR(100),
fecha DATE,
telefono INT
);

CREATE TABLE posteos(
id INT PRIMARY KEY AUTO_INCREMENT,
pieFoto TEXT, 
fechaCreacion DATETIME NOT NULL,
foto VARCHAR(1000) NOT NULL,
idUsuario INT NOT NULL,

FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);

CREATE TABLE comentarios(
id INT PRIMARY KEY AUTO_INCREMENT,
idUsuario INT NOT NULL,
idPost INT NOT NULL,
comentario TEXT,
fechaCreacion DATETIME,

FOREIGN KEY (idUsuario) REFERENCES usuarios (id),
FOREIGN KEY (idPost) REFERENCES posteos (id)
);

INSERT INTO usuarios VALUES(default, "Ana", "Folmer", "anafolmer@gmail.com", "1265", "fmujer.jpg", "2021-08-30", 343620957);
INSERT INTO usuarios VALUES(default, "Mauro", "Silva", "maurosilva@gmail.com", "2303", "fhombre.jpg", "2021-09-01", 343487109);
INSERT INTO usuarios VALUES(default, "Martín", "Schmidt", "martinschmidt@gmail.com", "4537", "hombre.jpg", "2021-09-05", 343290716);
INSERT INTO usuarios VALUES(default, "Carolina", "Lell", "carolinalell@gmail.com", "1117", "Fotomujer.jpg", "2021-08-31", 343265487);
INSERT INTO usuarios VALUES(default, "Muriel", "Gorostiaga", "murielgorostiaga@gmail.com", "0456", "mujer.jpg", "2021-09-10", 343653448);

INSERT INTO posteos VALUES(default, "El modelo mas exclusivo de Audi.", "2021-09-01 15:39:26", "audiR8.jpeg", "1");
INSERT INTO posteos VALUES(default, "Lujo sobre ruedas.", "2021-09-14 18:19:59", "BentleyBentayga.jpeg", "4");
INSERT INTO posteos VALUES(default, "Excelente auto en todo aspecto.", "2021-08-31 22:49:16", "audiA4.jpeg", "4");
INSERT INTO posteos VALUES(default, "Deportividad y confort en su maxima expresion.", "2021-09-15 21:03:56", "bmwSerie4.jpeg", "3");
INSERT INTO posteos VALUES(default, "El SUV mas rapido del mundo.", "2021-09-02 10:12:33", "lamborghiniUrus.jpeg", "2");
INSERT INTO posteos VALUES(default, "Este auto marco el record mundial de 0 a 100km/h.", "2021-08-31 09:23:20", "porsche911TurboS.jpeg", "1");
INSERT INTO posteos VALUES(default, "Es la camioneta ideal!", "2021-09-09 23:19:55", "porscheCayenne.jpeg", "3");
INSERT INTO posteos VALUES(default, "Orientada para la gente con una vida activa.", "2021-09-11 11:45:48", "ramTrx.jpeg", "5");
INSERT INTO posteos VALUES(default, "El futuro es ahora.", "2021-09-15 20:19:11", "teslaModelX.jpeg", "2");
INSERT INTO posteos VALUES(default, "El mejor producto de Toyota.", "2021-09-17 13:12:09", "toyotaSw4.jpeg", "5");

INSERT INTO comentarios VALUES(default, "2", "8", "Que lindo auto!", "2021-09-11 13:10:35");
INSERT INTO comentarios VALUES(default, "5", "8", "Hola, me dicen el precio?", "2021-09-11 13:33:15");
INSERT INTO comentarios VALUES(default, "1", "8", "Uff que buen color!", "2021-09-11 16:22:46");
INSERT INTO comentarios VALUES(default, "4", "8", "Tienen fotos del interior del auto?", "2021-09-12 00:05:21");
INSERT INTO comentarios VALUES(default, "3", "9", "Que buen auto!", "2021-09-15 21:09:54");
INSERT INTO comentarios VALUES(default, "1", "9", "Me dicen el precio?", "2021-09-15 23:15:10"); 
INSERT INTO comentarios VALUES(default, "2", "9", "Viene en otros colores?", "2021-09-15 23:50:32");
INSERT INTO comentarios VALUES(default, "1", "9", "Que métodos de pago manejan?", "2021-09-16 10:34:21");  
INSERT INTO comentarios VALUES(default, "5", "10", "Que lindo auto!", "2021-09-17 13:45:34");
INSERT INTO comentarios VALUES(default, "2", "10", "Que precio tiene?", "2021-09-17 15:27:12");
INSERT INTO comentarios VALUES(default, "4", "10", "Hermoso color!", "2021-09-18 12:12:34");
INSERT INTO comentarios VALUES(default, "3", "10", "Tienen más fotos del vehículo?", "2021-09-18 20:24:54");
INSERT INTO comentarios VALUES(default, "1", "1", "Muy lindo auto", "2021-09-01 16:03:56");
INSERT INTO comentarios VALUES(default, "3", "1", "Puedo pasar a ver el auto?", "2021-09-01 19:53:16");
INSERT INTO comentarios VALUES(default, "5", "1", "Ufff que buen color!", "2021-09-03 08:12:45");
INSERT INTO comentarios VALUES(default, "4", "1", "Tienen imágenes del interior?", "2021-09-03 18:53:16");
INSERT INTO comentarios VALUES(default, "2", "2", "Que lindo auto!", "2021-09-14 18:22:13");
INSERT INTO comentarios VALUES(default, "1", "2", "Precio?", "2021-09-14 22:09:43");
INSERT INTO comentarios VALUES(default, "3", "2", "Qué metodos de pago tienen?", "2021-09-15 08:12:43");
INSERT INTO comentarios VALUES(default, "5", "2", "Viene el mismo modelo en otro color?", "2021-09-16 17:54:30");
INSERT INTO comentarios VALUES(default, "1", "3", "Hola, donde se puede ir a ver?", "2021-08-31 23:50:33");
INSERT INTO comentarios VALUES(default, "2", "3", "Me encanta ese color!", "2021-09-01 12:23:54");
INSERT INTO comentarios VALUES(default, "3", "3", "Me dicen el precio?", "2021-09-01 15:13:43");
INSERT INTO comentarios VALUES(default, "5", "3", "Cuanto vale?", "2021-09-02 09:11:09");
INSERT INTO comentarios VALUES(default, "2", "4", "Que buen autoo!", "2021-09-15 21:24:45");
INSERT INTO comentarios VALUES(default, "1", "4", "Que precio tiene?", "2021-09-16 07:45:17");
INSERT INTO comentarios VALUES(default, "4", "4", "Me encanta ese vehículo!", "2021-09-16 16:36:12");
INSERT INTO comentarios VALUES(default, "5", "4", "Se puede ir a ver? A dónde?", "2021-09-16 22:43:24");
INSERT INTO comentarios VALUES(default, "1", "5", "Que lindo!", "2021-09-02 11:02:21");
INSERT INTO comentarios VALUES(default, "3", "5", "Me encanta el color!", "2021-09-02 15:56:23");
INSERT INTO comentarios VALUES(default, "4", "5", "Que vale?", "2021-09-03 10:35:08");
INSERT INTO comentarios VALUES(default, "5", "5", "Tienen fotos del interior?", "2021-09-04 21:35:12");
INSERT INTO comentarios VALUES(default, "2", "6", "Me encanta ese vehículo!", "2021-09-02 12:04:53");
INSERT INTO comentarios VALUES(default, "3", "6", "Que metodos de pago tienen?", "2021-09-02 16:44:11");
INSERT INTO comentarios VALUES(default, "4", "6", "Me dicen el precio?", "2021-09-04 11:43:12");
INSERT INTO comentarios VALUES(default, "5", "6", "Que lindo color!", "2021-09-05 21:56:12");
INSERT INTO comentarios VALUES(default, "1", "7", "Que máquinaa!", "2021-09-10 01:29:21");
INSERT INTO comentarios VALUES(default, "2", "7", "Uff que belleza", "2021-09-10 15:32:12");
INSERT INTO comentarios VALUES(default, "4", "7", "Cuanto vale??", "2021-09-10 21:34:54");
INSERT INTO comentarios VALUES(default, "5", "7", "Que metodos de pago tienen?", "2021-09-12 19:43:52");

UPDATE comentarios
SET idUsuario = "3" 
WHERE id=2 

