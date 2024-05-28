# app.py

from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes


# In-memory data structure to store flights
flights = [
  {"id": 1, "name": "Delta Airlines Flight 123", "capacity": 150, "from": "New York", "destination": "Los Angeles", "comfort": "Economy"},
  {"id": 2, "name": "United Airlines Flight 456", "capacity": 200, "from": "Chicago", "destination": "Miami", "comfort": "Business"},
  {"id": 3, "name": "American Airlines Flight 789", "capacity": 180, "from": "Dallas", "destination": "Seattle", "comfort": "First Class"},
  {"id": 4, "name": "Emirates Flight 101", "capacity": 250, "from": "Dubai", "destination": "New York", "comfort": "Business"},
  {"id": 5, "name": "Lufthansa Flight 202", "capacity": 170, "from": "Frankfurt", "destination": "Tokyo", "comfort": "Economy"},
  {"id": 6, "name": "Air France Flight 303", "capacity": 190, "from": "Paris", "destination": "Sydney", "comfort": "Premium Economy"},
  {"id": 7, "name": "Singapore Airlines Flight 404", "capacity": 220, "from": "Singapore", "destination": "London", "comfort": "First Class"},
  {"id": 8, "name": "Qatar Airways Flight 505", "capacity": 200, "from": "Doha", "destination": "New York", "comfort": "Business"},
  {"id": 9, "name": "Cathay Pacific Flight 606", "capacity": 160, "from": "Hong Kong", "destination": "San Francisco", "comfort": "Economy"},
  {"id": 10, "name": "Japan Airlines Flight 707", "capacity": 180, "from": "Tokyo", "destination": "Los Angeles", "comfort": "Business"}
]



@app.route('/api/flights', methods=['GET'])
def get_flights():
    return jsonify(flights)


@app.route('/api/book', methods=['POST'])
def book_flight():
    data = request.get_json()
    flight_id = data.get('flight_id')

    # Implement booking logic without a database
    flight = next((f for f in flights if f['id'] == flight_id), None)
    if flight:
        # Implement booking logic here (e.g., reduce capacity)
        return jsonify({"message": "Flight booked successfully"})
    else:
        return jsonify({"message": "Flight not found"})


if __name__ == '__main__':
    app.run(debug=True)
