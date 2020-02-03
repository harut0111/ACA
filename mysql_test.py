import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="",
  database="test"
)

mycursor = mydb.cursor()

def create (first_name, last_name, email):
    sql = "INSERT INTO users (first_name, last_name, email) VALUES (%s, %s, %s)"
    mycursor.execute(sql, (first_name, last_name, email) )
    mydb.commit()


def get ():
    sql = "SELECT * FROM users"
    mycursor.execute(sql) 
    return mycursor.fetchall()

def delete (id):
    sql = "DELETE FROM  users WHERE id =" + str(id)
    mycursor.execute(sql)
    mydb.commit()
    print(mycursor.rowcount, "record(s) deleted")



# create('Arsho', 'Gharibyan', 'arsho@mail.ru')
delete(5)
print (get())