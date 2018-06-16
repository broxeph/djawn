DJawn
=====

A CRM based on DRF and React.

Basically, it's high time Alex learned a JS framework and modern testing/deployment strategies.
Down the road, we might add goodies like GraphQL and Docker, but let's stick to the basics for now.

To Do
-----

- Add form (modal?)
- Router (react-router)
- Factories, tests (factory-boy/Cypress)
- Dockerize?
- Push to Heroku/AWS
- Auth (JWT?)
- Caching (Redis?)
- State management (Redux?)
- CI integration (Travis? Heroku CI?)

Stack
-----

- Backend
    - Heroku
    - Docker (?)
    - Postgres 10.3
    - Redis (?)
    - Django 2.0
    - django-rest-framework 3.8
- Frontend
    - Redux (?)
    - React 16.3
    - Bootstrap 4.1
    - SCSS
- Tests
    - Django
    - Cypress (?)

Installation
------------

### Backend

1. `cd server`
2. Install the [pipenv](https://docs.pipenv.org/) package manager
    - `pip3 install pipenv`
3. Add pipenv bin folder to (`$HOME/.local/bin`) to `$PATH`
4. Activate pipenv
    - `pipenv shell`
5. Install Python packages, with optional development packages
    - `pipenv install -d`
6. Install Postgres if necessary
    - `sudo apt install postgresql postgresql-contrib`
7. Create Postgres user and database
    1. `sudo -u postgres psql`
    2. `CREATE USER djawn WITH PASSWORD hunter2;` (replace `hunter2` if you dare)
    3. `CREATE DATABASE djawn OWNER djawn;`
8. Add database credentials to env var
    - `export DATABASE_URL=postgres://djawn:hunter2@localhost:5432/djawn`
9. Add Django secret key to env var
    - `export SECRET_KEY=hunter2` (or a somewhat more secure password, for you Krebs readers out there)
10. Run initial database migration
    - `python manage.py migrate`
11. Create superuser
    - `python manage.py createsuperuser`
12. Run server!
    - `python manage.py runserver`
    - Admin should be accessible at `localhost:8000/admin/`
    - Django REST Framework endpoints should be accessible at e.g. `localhost:8000/api/organization/`

### Frontend

1. `cd client`
2. Install the version of npm provided by your distribution, if necessary
    - `sudo apt install -y npm`
3. Upgrade to latest version of npm
    - `sudo npm install -g npm@latest`
4. Install npm deps
    - `npm i`
5. Compile and serve client!
    - `npm start`
    - Website should be accessible at `localhost:3000`
