# Installation

```
npm install
```

# Running project

Start docker container with postgres db
```bash
docker compose up
```
or if you are using older version of docker where docker-compose was separate package
```bash
docker-compose up
```

Run db migration:
```bash
npm run migration:run
```

Run backend (which also seeds db)
```bash
npm run start
```

# Running tests

Unit tests:
```bash
npm run test
```

e2e (requires connection to database but uses mocked service. I wouldn't do that this way normally but it's just for demonstration):
```bash
npm run test:e2e
```