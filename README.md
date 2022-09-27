## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## DOCKER

Crear volumen:
docker volume create --name=ciecca-data

Levantar docker:
docker-compose up

Prisma: https://docs.nestjs.com/recipes/prisma
instalar prisnma
-- npm install prisma --save-dev

Now create your initial Prisma setup
--npx prisma init

Para generar una migration --> cuando modificamos el schema.prisma tenemos que generar una migración.
-- npx prisma migrate dev

Install and generate Prisma Client#
-- $ npm install @prisma/client
