## What does this PR do?

## Description of Task to be completed?

## How should this be manually tested?

- Clone the repository using `git clone https://github.com/Isaiah-Essien/Eden_Nasa`

- Checkout to the branch using `git checkout <branch-name>`

- Install django packages that the application depends on: `npm install django and restframwork`

- Create a `.env` file in the root directory and add all environment variables required to run the application.

## TO ACCESS THE DJANGO APP

clone the git repo using: https://github.com/Isaiah-Essien/Eden_Nasa
then cd Eden_Nasa
then cd backend
install all the dependencies needed:
Django: pip install django
Rest framework api: pip install djangorestframework
corsheaders: pip install django-cors-headers

## For admin: Only super users will be able to access the super admin:

python manage.py createsuperuser

## To access the API endpoint:

admin: http://127.0.0.1:8000/admin/
Login: http://127.0.0.1:8000/api/auth/login/
Register: http://127.0.0.1:8000/api/auth/register/
To see all the registered users: http://127.0.0.1:8000/api/auth/get_registered_users/
To get all products and create new ones: http://127.0.0.1:8000/api/products/

To register: you have to send a request in json format

{
"username": "new_username",
"password": "new_password",
"email": "user@example.com"
}

login:
{
"username": "new_username",
"password": "new_password",
}

## Any background context you want to provide?

## Screenshots (if appropriate)

## Questions:
