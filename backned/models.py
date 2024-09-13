from app import db

class Friend(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    gender = db.Column(db.String(10), nullable=False)
    img_url = db.Column(db.String(255), nullable=True)

    def to_json(self): # when sending info to client, make it json
        return{
            "id":self.id,
            "name":self.name,
            "role":self.role,
            "description":self.description,
            "gender":self.gender,
            "imgUrl":self.img_url,
        }