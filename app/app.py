from flask import Flask, render_template, request

app = Flask(__name__)

# ---------------Home page--------------------------------
@app.route('/')
def home_page():
    return render_template("home/index.html")

# ---------------Greeting page-----------------------------
@app.route('/greeting', methods=['POST'])
def greeting_page():
    name = request.form.get('name')
    return render_template('home/greeting.html', name=name)

if __name__ == '__main__':
    app.run(debug = True )