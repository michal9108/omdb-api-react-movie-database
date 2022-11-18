# Simple movie app using omdb with reactjs + axios + material-ui + firebase 


<a href='https://omdb-api-movie-database.web.app/'>
<img src="https://github.com/michal9108/media/blob/741262195c4fb70b31c6309d79cac52cbd64bd03/Omdb-api-app-movie-database.png" onClick="https://omdb-api-movie-database.web.app/" width="100%" height="100%"/> 
</p>
</a>

## Link

[Link to the Firebase Deploy](https://omdb-api-movie-database.web.app/)

After entering the first word from movie title, the movie data are going to be transfered through API.


## Requirements

Before using this project, you will need to have installed [Node.js](https://nodejs.org/en/), npm and [git](https://git-scm.com/) or [yarn](https://yarnpkg.com/).  For accessing API you need to have installed [axios](https://axios-http.com/docs/intro).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage

```
$ git clone https://github.com/michal9108/omdb-api-react-movie-database.git
$ cd omdb-api-react-movie-database.git
$ yarn install
$ yarn run dev
```

The application will be listening on port 3000. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

https://www.omdbapi.com/

## The Open Movie Database API

[OMDB API](https://www.omdbapi.com/)

To generate API key register through your email  to free Account type [https://www.omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx). Then  you will receive your own API key in registered email. More in information about how to make the API calls and how to choose optional parameters are here: [https://www.omdbapi.com/](https://www.omdbapi.com/).
 

Created response - Your API response - JSON file with all of its weather parameters is very helpfull for setting up App.js 


## Build Setup

```
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch/deploy on Firebase server
$ firebase login
$ yarn run build
$ firebase init

Choose `build` as a public dir

$ firebase deploy
```

For detailed explanation on how things work, check out the [react.js](https://reactjs.org/), [axios](https://axios-http.com/docs/intro) and [Firebase](https://firebase.google.com/docs?authuser=0&hl=en) documentation.

