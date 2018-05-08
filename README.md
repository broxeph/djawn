DJawn
=====

A CRM based on DRF and React.

Basically, it's high time Alex learned a JS framework and modern testing/deployment strategies.
Down the road, we might add goodies like GraphQL and Docker, but let's stick to the basics for now.

To Do
-----

- Update table on form change
    - https://stackoverflow.com/questions/48351487/reactjs-how-do-i-add-a-new-row-to-table-from-form-input-values
- Add form (modal?)
- Router (react-router)
- Factories, tests (factory-boy/Cypress)
- Dockerize?
- Push to Heroku/AWS
- Auth (JWT?)
- Caching (Redis?)
- State management (Redux?)
- DRF versioning (v1)
- CI integration (Travis? Heroku CI?)

Stack
-----

- Backend
    - Heroku
    - Docker (?)
    - Postgres 9.6 (10.0?)
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

1. Don't use a bootstrap script nor Dockerfile, because that would be too easy and we want to make this hard for you.
2. Install Postgres or whatever.
3. Something something pipenv.
4. Set your `DATABASE_URL` env var to something like `postgres://USER:PASSWORD@HOST:PORT/NAME`.
5. Set your `SECRET_KEY` env var to something secret like `hunter2`.
