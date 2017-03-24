[![Skylab](https://github.com/FransLopez/logo-images/blob/master/logos/skylab-56.png)](http://www.skylabcoders.com/)  

[![AngularJS](https://github.com/FransLopez/logo-images/blob/master/logos/angularjs.png)](https://angularjs.org/)
[![NodeJS](https://github.com/FransLopez/logo-images/blob/master/logos/nodejs.png)](https://nodejs.org/)
[![MongoDB](https://github.com/FransLopez/logo-images/blob/master/logos/mongodb.png)](https://www.mongodb.com/)  
[![Bootstrap](https://github.com/FransLopez/logo-images/blob/master/logos/bootstrap.png)](http://getbootstrap.com/)
[![Bower](https://github.com/FransLopez/logo-images/blob/master/logos/bower.png)](https://bower.io/)


[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)


<h1>KOMOREBI : </h1>

A place to share items without restrictions.

This is my final project at SkylabCoders. 


### Prerequisites :

---

You need to have git and node installed on your machine. To install them go to your terminal then type:
sudo apt-get install git -g
sudo apt-get install node -g
For windows users consult the Git and Node documentations.

Installing the web-app in your local machine

It's super easy. Just takes two steps :
Download the zip file or clone the repository
Open your terminal inside the downloaded folder and type npm install

### Enviroment variables:

---

To run this code you will need to set your own enviroment variables:

For passport encryption
SECRET=+++++++ 

Setting the upload image function.
CLOUDINARY_NAME=+++++++
CLOUDINARY_API=+++++++
CLOUDINARY_API_SECRET= =+++++++
UPLOAD_FOLDER=./uploadFolder

Setting emailer:
EMAILER=+++++++
EMAIL_PASS=+++++++

Connect to database:
DB_URI=+++++++

### Api:

---

The server part has multiple Api endpoints using several routes:

  + '/api' : serves the authentication options, register and login.
  + '/private' : serves the user editing options.
  + '/messages': serves the internal messaging function.
  + '/products/api' : serves information about the products.
  + '/users/api' : serves information about the users.
  + '/sendmail': serves the emailing function.
  + '/upload': serves the routes to upload pictures.
