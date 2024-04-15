# Smartel
Empowering Smallholder Farmers through Digital Agriculture
Project Description:
Smallholder farmers globally face challenges such as, low crop yield, low income, and insufficient resources for optimal crop management. The project includes the development of a comprehensive website offering real-world practical applications of agricultural practices tailored to each location. It covers sustainable techniques, farmers forum, and facilitates connections between buyers and sellers.

Installation Process
Backend
Prerequisites
Python 3. x

Node.js and npm

Vs code or other IDE you prefer

Create a virtual environment: python -m venv venv

Activate the Virtual Environment

.\venv\Scripts\activate (Note this will depend on the device you're using, On macOS/Linux: source venv/bin/activate )

Install Django and Other Dependencies:
pip install django,

pip install djangorestframework,

pip install corsheaders,

pip install pillow

Create Django Project and Apps
django-admin startproject backend

cd backend

python manage.py startapp addproduct

python manage.py startapp authentication

python manage.py startapp farmer

python manage.py startapp contact

Configure Installed Apps in settings.py:
Add the following under installed apps.

INSTALLED_APPS = [ 'addproduct',

'authentication',

'farmer',

'contact',

'rest_framework',
] ###Created necessary files like views and forms and we added codes to the ones that were there which are URLs, models, admin ect

Apply Migrations:
python3 manage.py migrate

python3 manage.py make migrations

Run the server
python3 manage.py runserver

You can stop and create the superuser and rerun the app again

Frontend Installation
Prerequisites
Node.js and npm

Vs Code or any other IDE you prefer

Create a React App:
npm create-react-app frontend ( we have used pain CSS, so you don't have to select any library for CSS)

cd frontend

Install Required Frontend Libraries:
npm install @fortawesome/react-fontawesome axios bosstract react-icons react-router-dom react-scripts web-vitals jest-dom
