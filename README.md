<<<<<<< HEAD


<p align="center">
  <h3 align="center">Task Manager api</h3>

  <p align="center">
    Tell a story
    <br />
    <a href="https://github.com/breellz/task-manager-api"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://breellz-task-manager.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/breellz/task-manager-api/issues">Report Bug</a>
    ·
    <a href="https://github.com/breellz/task-manager-api/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->
## About The Project
This is a task manager api built with NodeJs. It features authentication, full CRUD ability on tasks and email notifications on registration, account deletion and other crucial actions

### Built With
* [NodeJs](http://nodejs.org)
  * Mongoose
  * Express
* [MongoDB](https://mongodb.com)
  * Database management
* [Jest](https://jestjs.io)
  * Node testing with jest

<!-- GETTING STARTED -->
## Getting Started

1 fork the repo

2. clone to your local machine

3. ```npm install```

4. ```npm start```

### Prerequisites
* npm packages

```npm install```

### Installation

1. fork the repo

2. clone the Repo

3. install dependencies 
```npm install```

4. run dev server
```npm run dev```

5. Test components
```npm test```

<!-- INTERACTING WITH THE API -->
TO CREATE USERS
Method: POST
ENDPOINT: "localhost:3000/users"
DATA-TYPE: JSON
body: {
    "name": "Bassit Owolabi",
    "email":"barseetbrn@gmail.com",
    "password": "123456"
}

TO LOGIN USERS
Method: POST
ENDPOINT: "localhost:3000/users/login"
DATA-TYPE: JSON
body: {
    "email":"barseetbrn@gmail.com",
    "password": "123456"
}

TO LOGOUT USERS
Method: POST
ENDPOINT: "localhost:3000/users/logout"
DATA-TYPE: JSON

TO LOGOUT ALL SESSIONS
Method: POST
ENDPOINT: "localhost:3000/users/logoutAll"
DATA-TYPE: JSON

TO CREATE TASK
Method: POST
ENDPOINT: "localhost:3000/tasks"
DATA-TYPE: JSON
body: {
    "description": "store in production database ",
    "completed": false
}

TO CREATE TASK
Method: GET
ENDPOINT: "localhost:3000/users/me"
DATA-TYPE: JSON

TO READ USER
Method: GET
ENDPOINT: "localhost:3000/users/id"
DATA-TYPE: JSON

TO GET TASKS
Method: GET
ENDPOINT: "localhost:3000/tasks?sortby=createdAt:desc"
DATA-TYPE: JSON

TO GET TASK
Method: GET
ENDPOINT: "localhost:3000/tasks/id"
DATA-TYPE: JSON

TO UPDATE USER
Method: POST
ENDPOINT: "localhost:3000/users/me"
DATA-TYPE: JSON
body: {
    "name": "",
    "password":
}

TO UPDATE TASK
Method: POST
ENDPOINT: "localhost:3000/tasks/id"
DATA-TYPE: JSON
body: {
    "completed": false
}

TO DELETE USER
Method: DELETE
ENDPOINT: "localhost:3000/users/me"
DATA-TYPE: JSON

TO DELETE TASK
Method: DELETE
ENDPOINT: "localhost:3000/tasks/id"
DATA-TYPE: JSON


TO UPLOAD AVATAR
Method: POST
ENDPOINT: "localhost:3000/users/me/avatar"
DATA-TYPE: form-data
KEY: upload
VALUE:image-file


TO DELETE AVATAR
Method: DELETE
ENDPOINT: "localhost:3000/users/me/avatar"
DATA-TYPE: JSON


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/breellz/task-manager-api/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- CONTACT -->
## Contact
Twitter - [@breellz](https://twitter.com/breellz)

[Facebook](https://fb.com/breellz)

[stackoverflow](https://stackoverflow.com/users/13081082/breellz)

[LinkedIn](https://linkedin.com/in/bassit-owolabi-55751b15a)

[Instagram](https://instagram.com/breellzfit)

Project Link: [https://github.com/breellz/task-manager-api](https://github.com/breellz/veepie)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* Stackoverflow
