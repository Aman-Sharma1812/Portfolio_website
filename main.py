from flask import Flask, render_template, request
import mysql.connector as mycon
import os

app = Flask(__name__) #Create a portfolio app

#=============Establishing a connection between Python and MySQL=============================
mydb = mycon.Connect(
    host = "localhost",
    user = "root",
    password = "xxxxxxxxxxx",
    database = "portfolio_db"
) 

db_cursor = mydb.cursor() #Create the cursor object that helps to  executes the SQL query

@app.route("/")
def home():
    return render_template("index.html")



@app.route("/contact", methods=['POST'])
def contact():
    User_Name = request.form['User_Name']
    Email = request.form['Email']
    Mobile_No = request.form['Mobile_No']
    Email_Subject = request.form['Email_Subject']
        
    insert_query = """
                    INSERT INTO userinfo(User_Name, Email, Mobile_No, Email_Subject)
                    VALUES (%s, %s, %s, %s)
                   """
    
    values = (
        User_Name,
        Email,
        Mobile_No,
        Email_Subject
    )
    db_cursor.execute(insert_query, values)
    mydb.commit()

    return render_template('index.html',     
        full_name=User_Name,
        email=Email,
        number=Mobile_No,
        email_sub=Email_Subject
    )

if __name__ == "__main__" :
    app.run()