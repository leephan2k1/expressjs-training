## Folder Structure

```
.
├── app
│   ├── controllers
│   │   ├── CoursesController.js
│   │   ├── NewsController.js
│   │   └── SitesController.js
│   └── models
│       └── Courses.js
├── configure
│   └── db
│       └── index.js
├── index.js
├── public
│   ├── images
│   │   └── sugoi.png
│   └── styles
│       └── css
│           └── app.css
├── resources
│   ├── scss
│   │   ├── _variables.scss
│   │   └── app.scss
│   └── views
│       ├── course.hbs
│       ├── home.hbs
│       ├── layouts
│       │   └── main.hbs
│       ├── news.hbs
│       ├── partials
│       │   ├── footer.hbs
│       │   └── header.hbs
│       └── search.hbs
├── routes
│   ├── courses.js
│   ├── index.js
│   ├── news.js
│   └── sites.js
└── utils
    └── mongoose.js
```

## Setup ExpressJS step by step.

### Initial npm

- First of all, we need install nodejs & npm.
- initial npm

```
npm init
```

- Install ExpressJS Framework:

```
npm i express
```

- Install Nodemon package tracking changes & restart server:

```
npm i nodemon --save-dev
```

- Install morgan package to HTTP logging

```
npm i morgan --save-dev
```

- Install mongoose package to connect ExpressJS and MongoDB

```
npm i mongoose
```
