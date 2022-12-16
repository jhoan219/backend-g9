from flask_restful import Resource, request
from config import conexion
from models.usuarios import UsuarioModel
class UsuariosController(Resource):
    # los metodos que nosotros queramos utilizar (GET, POST) lo tendremos que definir como metodo de la clase
    def get(self):
        
        return {
            'message': 'yosoy el get del usuario'
         
        }
   

    def post(self):
      body =request.get_json()
      try:
          nuevoUsuario = UsuarioModel

           
          nuevoUsuario.correo = body.get('correo')
          nuevoUsuario.nombre = body.get('nombre')
          nuevoUsuario.telefono = body.get('telefono')

            # ahora agregamos a la base de datos ese nuevo registro creado en base a la instancia
          conexion.session.add(nuevoUsuario)
            # guardar de manera permanente la informacion agregada al nuevo usuario
          conexion.session.commit()

          print(body)  
          return {
                'message': 'yo soy el post de ususario'
            }
      except Exception as error:
            print(error)
            return{
                'message':'error al crear usuario'
            }