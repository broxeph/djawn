DJawn
=====

A CRM based on DRF and React.

To Do
-----

- Swap to Postgres from SQLite
- Add tests
- Dockerize?
- Use Bootstrap
- Push to Heroku
- Integrate Redux
- Load initial data
- CI integration?

Installation
------------

1. Don't use a bootstrap script nor Dockerfile, because that would be too easy and we want to make this hard for you.
2. Install Postgres or whatever.
3. Something something pipenv.
4. Set your `DATABASE_URL` env var to something like `postgres://USER:PASSWORD@HOST:PORT/NAME`.
5. Set your `SECRET_KEY` env var to something secret like `hunter2`.
