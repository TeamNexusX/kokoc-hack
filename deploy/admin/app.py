from flask import (
    Flask,
    redirect
)

from flask_sqlalchemy import SQLAlchemy
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
from models import db,Category

import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='postgresql://admin:admin@db:5432/db'
db = SQLAlchemy(app)

with app.app_context():
    db.create_all()

admin = Admin(app, name='Admin Panel', template_mode='bootstrap3')
admin.add_view(ModelView(Category,db.session))

@app.route('/',methods=['GET'])
def admin_panel():
    return redirect('/admin')

if __name__ == '__main__':
    app.run(debug=True,port=5001)