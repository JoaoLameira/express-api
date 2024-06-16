# Express API

Express api with Typescript, Prisma and Postgres.

## Dependencies

- Typescript
- Prisma CLI
- Express

```
npm i express typescript ts-node @types/node prisma --save-dev
```

## Prisma SDK

```
npm i @prisma/client --save
```

See database

```
npx prisma studio
```

### Migrations

run migration and give it a name

```
npx prisma migrate dev --name init
```

## Middlewares

### Morgan

morgan is a middleware that logs requests

```
npm i morgan --save
```

```
app.use(morgan('dev'));
```

### CORS

A middleware that can be used to enable CORS with various options. By default allows access to every clients.

```
npm i cors --save
```

```
app.use(cors());
```

### Helmet

helmet is a collection of middleware functions that helps to secure HTTP response headers.

```
npm i helmet --save
```

```
app.use(helmet());
```

## Nodemon

Allows the server to auto-restart when there is a change.

```
npm install nodemon --save-dev
```

```json
{
  "ignore": ["node_modules/**", ".git"],
  "watch": ["src/**"],
  "ext": "ts,json",
  "inspect": true,
  "verbose": true,
  "exec": "ts-node -r dotenv/config src/index.ts"
}
```

## JWT Tokens

```
npm i jsonwebtoken bcrypt dotenv
```
