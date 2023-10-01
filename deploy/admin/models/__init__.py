from flask_sqlalchemy import SQLAlchemy

db=SQLAlchemy()

class Category(db.Model):
    __tablename__='categories'

    id=db.Column(db.Integer(),primary_key=True)
    title=db.Column(db.String(),nullable=False)
    themes=db.Column(db.ARRAY(db.String))

    def __init__(self,title,themes):
        self.title = title
        self.themes = themes