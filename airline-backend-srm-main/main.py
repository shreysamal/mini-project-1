# app.py

from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:root@localhost/airline_reservation_system'
db = SQLAlchemy(app)

class Flight(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    capacity = db.Column(db.Integer, nullable=False)

@app.route('/api/flights', methods=['GET'])
def get_flights():
    flights = Flight.query.all()
    flight_list = [{"id": flight.id, "name": flight.name, "capacity": flight.capacity} for flight in flights]
    return jsonify(flight_list)

@app.route('/api/book', methods=['POST'])
def book_flight():
    data = request.get_json()
    flight_id = data.get('flight_id')
    # Implement booking logic here
    # Example: Booking logic that interacts with the database
    flight = Flight.query.get(flight_id)
    if flight:
        # Update the database or perform any other necessary operations
        return jsonify({"message": "Flight booked successfully"})
    else:
        return jsonify({"message": "Flight not found"})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
