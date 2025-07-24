import os
import time

from types import SimpleNamespace
from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS

from Repositories.zipcode_repository import ZipCodeRepository
from Services.zipcodeservice import ZipcodeService
from Repositories.avg_repository import AverageRepo
from Services.avgservice import AverageService

from Models.average import DataAvgData
from Models.email import EmailForm

time.sleep(60)

user = os.environ.get("POSTGRES_USER")
password = os.environ.get("POSTGRES_PASSWORD")
db = os.environ.get("POSTGRES_DB")
host = os.environ.get("POSTGRES_HOST")
port= os.environ.get("POSTGRES_PORT")
email_password = os.environ.get("EMAIL_PASSWORD")
email_name = os.environ.get("EMAIL_NAME")

zipcode_r = ZipCodeRepository(user=user, password=password, db=db, host=host,port=port)
zipcode_s = ZipcodeService(repo=zipcode_r)

avg_r = AverageRepo(user=user, password=password, db=db, host=host,port=port)
avg_s =  AverageService(repo=avg_r)


app = Flask(__name__)
CORS(app)

## email configs
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USERNAME'] = email_name
app.config['MAIL_PASSWORD'] = email_password

mail = Mail(app)

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/zipcode', methods=['GET'])
def zipcod_root():
    if request.method == 'GET':
        return 'Use this endpoint to get info on zipcodes'

@app.route('/zipcode/<int:zipcode>', methods=['GET'])
def zipcode_lookup(zipcode):
    if request.method == 'GET':
        zipcode_data = zipcode_s.getZipCode(zipcode)
        return jsonify(zipcode_data), 200
    
@app.route('/data/avgdata', methods=['GET'])
def data_avg_get():
    if request.method == 'GET':
        avg_data:DataAvgData = avg_s.getDataAvg()
        return jsonify({"avg_data":avg_data}), 200

@app.route('/data/zipcode/<int:zipcode>', methods=['GET'])
def zipcode_data_lookup(zipcode):
    if request.method == 'GET':
        zipcode_data = zipcode_s.getZipCodeData(zipcode)   
        return jsonify({'data':zipcode_data}), 200

@app.route('/zipcode/all', methods=['GET'])
def zipcode_get_all():
    if request.method == 'GET':
        zipcode_all = zipcode_s.getAllZipCodes() 
        return jsonify({'data':zipcode_all}), 200
    
@app.route('/email', methods=['POST'])
def email_inqueries():
    if request.method == 'POST':
        form = EmailForm(
           type = request.form['type'],
           email = request.form['email'].strip(),
           name = request.form['name'].strip(),
           message = request.form['message'].strip(),
        )
        msg = Message(
            subject=f'type: {form.type} from {form.name}',
            sender='reachoutatportal@gmail.com',
            recipients=['reachoutatportal@gmail.com'],
            date= int(time.time()),
            body = f' type: {form.type} name:{form.name} email: {form.email} message: {form.message}'
        )
        try:
            mail.send(msg)
            return 'Email Was Sent', 200
        except Exception as e:
            print(f"Error sending email: {e}")
            return f"Failed to send email {e} {email_password} {email_name}", 500
        
        
        
        
    
if __name__ == '__main__':
     app.run(host='0.0.0.0', port=5000, debug=True)
