from flask import Flask
from datetime import datetime

print(__name__)
app = Flask(__name__)

@app.route('/',methods =['GET'])
def inicio():
    print('ingreso al endpoint inicial')
    return 'Bienvenido ami primera api en flask'

@app.route('/estado' , methods =['GET'])
def estado():
    hora_servidor = datetime.now().strftime('%Y-%m-%d %I:%M:%S %p')
    return {
        'estado' : True,
        'hora': hora_servidor
    }



app.run(debug=True)