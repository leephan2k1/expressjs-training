# Just the repo for my Express JS learning.
## Folder Structure

```
.
├── app
│   ├── controllers
│   │   ├── CoursesController.js
│   │   ├── MeController.js
│   │   ├── NewsController.js
│   │   └── SitesController.js
│   ├── middlewares
│   │   └── SortMiddleware.js
│   └── models
│       └── Courses.js
├── configure
│   └── db
│       └── index.js
├── index.js
├── public
│   ├── images
│   │   └── sugoi.png
│   ├── styles
│       └── css
│           └── app.css
│   
├── resources
│   ├── scss
│   │   ├── _variables.scss
│   │   └── app.scss
│   └── views
│       ├── courses
│       │   ├── course.hbs
│       │   ├── create.hbs
│       │   └── edit.hbs
│       ├── home.hbs
│       ├── layouts
│       │   └── main.hbs
│       ├── me
│       │   ├── stored-courses.hbs
│       │   └── trash-courses.hbs
│       ├── news.hbs
│       ├── partials
│       │   ├── footer.hbs
│       │   └── header.hbs
│       └── search.hbs
├── routes
│   ├── courses.js
│   ├── index.js
│   ├── me.js
│   ├── news.js
│   └── sites.js
└── utils
    └── mongoose.js
```

## Setup ExpressJS step by step.

### Initial npm

- First of all, we need install nodejs & npm.
- If you clone this project (But i don't think no anyone clone this learning project). You just run:

```
npm install
```

- Why don't we install all in one? Because there are some things installed in the dev environment and there are some things that will depend on your preferences before seeing its functionality.

- initial npm

```
npm init
```

- Install ExpressJS framework:

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

- Install url-slug package to optimize url for SEO

```
npm i url-slug
```

- Install nanoid handle same slug (this is my favorite package)

```
npm i nanoid
```

- Install method-override support DELETE, PUT, PATCH,... for HTML (HTML 5 only has POST & GET)

```
npm i method-override
```
- Install mongoose-delete support to soft delete:
```
npm i mongoose-delete
```
- Install mongoose-sequence support to auto increment
```
npm i mongoose-sequence
```
- Install express-promise-router wrapper for Express 4's Router that allows middleware to return promises -> reducing duplicate code
```
npm i express-promise-router
```


## Basic concepts:
### Route
- Route is a string of the form /segment/123 and is part of the URL
- Routing in MVC model:
![express-routing](https://dotnettrickscloud.blob.core.windows.net/img/nodejs/express-routing.png)
### Middleware
- I think we don't need to find confusing documentation about middleware. Just looking at this image will summarize the middleware (Backend).
![middleware](https://topdev.vn/blog/wp-content/uploads/2019/05/middleware-la-gi.png)
### Authentication 
- Authentication simply helps the system confirm who you are and allow access. 
![authentication](https://res.cloudinary.com/practicaldev/image/fetch/s--VYXihGsl--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/ras8no1uj4ih1ogzy89h.png)