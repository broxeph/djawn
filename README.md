DJawn
=====

A CRM based on DRF and React.

Basically, it's high time Alex learned a JS framework and modern testing/deployment strategies.
Down the road, we might add goodies like GraphQL and Docker, but let's stick to the basics for now.

To Do
-----

- Move frontend to separate SPA, add router
- Add factories, tests
- Integrate Redux
- Dockerize?
- Push to Heroku
- CI integration (Travis? Heroku CI?)

Installation
------------

1. Don't use a bootstrap script nor Dockerfile, because that would be too easy and we want to make this hard for you.
2. Install Postgres or whatever.
3. Something something pipenv.
4. Set your `DATABASE_URL` env var to something like `postgres://USER:PASSWORD@HOST:PORT/NAME`.
5. Set your `SECRET_KEY` env var to something secret like `hunter2`.
