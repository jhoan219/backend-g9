from flask import Flask
from flask_migrate import Migrate
from os import environ
from dotenv import load_dotenv
from models.usuarios import UsuarioModel
from config import conexion

 
app = Flask(__name__)

 
# La conexion a la base de datos que usara SQLALCHEMY para conectarse
app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('DATABASE_URI')

# Mostrara todas las consultas en lenguaje SQL que se realiza a la base de datos
app.config['SQLALCHEMY_ECHO'] = environ.get('MOSTRAR_SQL') # Esto es un boolean

# Inicializamos la instancia de Flask-SQLAlchemy con las propiedades seteadas en la aplicacion de Flask
conexion.init_app(app)

# Inicializamos la clase Migrate con la configuracion de nuestra base de datos y aplicacion de Flask
migrate = Migrate(app, conexion)

# Declarar todas las rutas que vamos a utilizar mediante los controladores
 
if __name__ == '__main__':
    app.run(debug=True)