# [StudyVerse](https://studyverse-wayne.netlify.app/) Server Side

## [Client Side Git.](https://github.com/a4arpon/studyverse-blog-client.git)

## Local machine installation steps.

1. Clone repo from git.

```sh
git clone https://github.com/a4arpon/studyverse-blog-server.git
```

2. Change directory to server folder.

```sh
cd studyverse-server
```

3. Install NodeJS dependencies by using yarn.

```sh
yarn install
```

or by using NPM

```sh
npm install
```

4. [Setup Environment variables](#environment-variables).

```sh
touch .env.local
```

5. Start Server

```sh
yarn run start # otherwise you can use npm run start.
```

## Directory Explanation

```sh
|
+-- config    # this folder have database config files.
|
+-- controllers   # routes controllers are in this folder.
|
+-- routes    # this folder contains all the routes available in this server.
|
+-- vercel.json   # this is the config file for vercel.
```

## Environment Variables

**Note: Please create a `.env.local` file in the base directory to run this server on local machine. And the `.env.local` file wil contain the mongodb connection string properties.**

```properties
MONGODB_STRING=https://studyverse-wayne.netlify.app/
```

## API End Point

`https://studyverse-server.vercel.app/`

### Get All Blogs End Point

`https://studyverse-server.vercel.app/blogs`

Response Example:

```json
[
  {
    "_id": "BLOG ID",
    "title": "BLOG TITLE",
    "blog": "BLOG BODY",
    "thumbnail": "THUMBNAIL",
    "publishedAt": "PUBLISH DATE",
    "authorEmail": "AUTHOR EMAIL",
    "author": "AUTHOR NAME"
  }
]
```

### Get Single Blog End Point

`https://studyverse-server.vercel.app/blogs/[BLOG_ID]`

Response Example:

```json
{
  "_id": "BLOG ID",
  "title": "BLOG TITLE",
  "blog": "BLOG BODY",
  "thumbnail": "THUMBNAIL",
  "publishedAt": "PUBLISH DATE",
  "authorEmail": "AUTHOR EMAIL",
  "author": "AUTHOR NAME"
}
```

### POST Blog End Point

METHOD POST `https://studyverse-server.vercel.app/blogs`

Payload Example:

```js
const blogDataPayload = {
  title: 'BLOG TITLE',
  blog: 'BLOG CONTENT',
  thumbnail: 'THUMBNAIL URL',
  publishedAt: 'PUBLISHING DATE',
  authorEmail: 'AUTHOR EMAIL',
  author: 'AUTHOR NAME',
}
```

### Add Comment End Point

METHOD POST `https://studyverse-server.vercel.app/comments`
Payload Example

```js
const commendPayload = {
  blogID: 'Blog Id',
  author: 'Comment Author',
  comment: 'Comment Data',
}
```

### Get All Comments For Specified Blog End Point

`https://studyverse-server.vercel.app/comments/[BLOG_ID]`

Response Example:

```json
[
  {
    "_id": "COMMENT ID",
    "blogID": "BLOG ID",
    "author": "COMMENT AUTHOR",
    "comment": "COMMENT BODY"
  }
]
```
