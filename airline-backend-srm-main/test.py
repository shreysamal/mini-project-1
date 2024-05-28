import mysql.connector

connection = mysql.connector.connect(
    host="localhost",
    user="srmist",
    password="srmist",
    database="airline_reservation_system"
)

if connection.is_connected():
    print("Connected to MySQL")
    connection.close()
