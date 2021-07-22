CREATE DATABASE productos_tecla
GO

USE productos_tecla
GO

CREATE TABLE productos (
    id int NOT NULL IDENTITY (1,1),
    listado char (50) NOT NULL,
    alta char (50) NOT NULL,
    modificacion char (50) NOT NULL,
    baja char (50) NOT NULL,
    PRIMARY KEY (id)
)
GO

/*INSERT INTO productos (listado,alta,modificacion,baja) VALUES (

)*/