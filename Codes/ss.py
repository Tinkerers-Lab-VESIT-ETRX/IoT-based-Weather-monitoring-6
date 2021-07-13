import firebase_admin
import serial
from firebase_admin import credentials
from firebase_admin import db
from serial import Serial
cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred, {'databaseURL': 'https://th-sensor-4085c-default-rtdb.firebaseio.com/'})
ref = db.reference('sensors/')
users_ref = ref.child('users')
#loop
users_ref.set({
    'Temperature': {
        '1': str.split('Date'),
        '2': str.split('Date'),
        '3': str.split('Date')
    },
    'Humidity': {
        '1': str.split('Date'),
        '2': str.split('Date'),
        '3': str.split('Date')
    }
})
