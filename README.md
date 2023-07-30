
## Run Locally

Clone the project

```bash
  git clone https://github.com/shidqiiii/mailtrap-express.git
```

Go to the project directory

```bash
  cd mailtrap-express
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start:dev
```


## API Reference

#### Get all items

```http
  POST user/register
```

| Body      | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name`    | `string` | **Required** min(5)       |
| `email`   | `email`  | **Required**              |
| `password`| `string` | **Required** min(5)       |

#### Get item

```http
  POST user/login
```

| Body      | Type     | Description               |
| :-------- | :------- | :-------------------------|
| `email`   | `email`  | **Required**             |
| `password`| `string` | **Required**             |

```http
  GET user/verify/:user_id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user_id`      | `string` | |
