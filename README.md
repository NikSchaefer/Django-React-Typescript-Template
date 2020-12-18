# Django-React-Typescript-Template

Django Backend React Typescript frontend template configured for Heroku easy deployment

Django static files is configured with whitenoise to serve its own static files

React is configured with webpack and tsconfig. 

Backend Utilizes Django rest framework and the /api points to backend urls.

# Setup

[create virtual env](https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/)

then
setup .env
rename .env.example to just .env

set secret key in .env by generating a key with
[This site](https://miniwebtool.com/django-secret-key-generator/)

install depenecies for pip
in base dir
`pip install -r requirements.txt`

then cd into frontend
`cd frontend`
install node depedencies
`npm i`

# To Run Locally

in base dir in terminal run
`py manage.py runserver` or `python manage.py runserver`

then cd into frontend
`cd frontend`
run frontend
`npm run dev`

# Deployment

Configured for Heroku
Make sure to set Enviroment Variables in Heroku

# License

MIT License

# about

contact nikkschaefer@gmail.com for any questions or leave an issue on the repo
