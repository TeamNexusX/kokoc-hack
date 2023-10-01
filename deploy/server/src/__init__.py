from flask import Flask,render_template
from flask_cors import CORS
from src.models import db

app=Flask(__name__,static_folder='./static',template_folder='./static',static_url_path='/')
app.config.from_object('src.config.Config')
db.init_app(app)

cors=CORS(app)

@app.route('/',methods=['GET'])
def index():
    return render_template('index.html')

from src import parser