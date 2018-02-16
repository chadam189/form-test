const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const {
	createNewUser, 
	saveUserAnswer,
	retrieveUserTest,
	saveTestGrade,
  filterTests
} = require('../database/helpers.js')

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => {
	res.sendStatus(200);
});

app.post('/user', (req, res) => {
  /* 
  
  // req.body contains info sent from landing page intake form:

	      {
			    firstname: 'Joe',
			    lastname: 'Schmoe',
			    email: 'joe.schmoe@hotmail.com'	
		    }

  // call createNewUser from utils.js

  // once db transaction is complete, reroute user to question 1
  // handle authorization here - might need to add cookies

  */
});

app.post('user/:user_id/question/:page/', (req, res) => {
  // we'd need to check for authorization via cookies, or using authorization header in HTTP request

  // gather the page and user id from req.params.page and req.params.user_id, respectively
  // req.body contains the user's answer to this question
  
  // call saveUserAnswer

  // once complete, advance user to the next page (or if this was the answer to question #5, reroute them to the completed page)

});

app.get('/user/:user_id/complete', (req, res) => {
  // we'd need to check for authorization via cookies, or using authorization header in HTTP request

  // inform user that they have completed the test

});

app.get('/admin/login', (req, res) => {
	// serve up admin login page

});

app.get('/admin/home', (req, res) => {
	// serve up admin portal landing page

	// would obviously need authorization to verify admin credentials
});

app.get('/admin/tests/:filter', (req, res) => {
	// used by admin to gather list of tests that have a certain status

	// call filterTests

	// send list back to admin portal

});

app.get('/admin/retrieve/:user_id', (req, res) => {
	// used by admin to update a user's test grade

	// call retrieveUserTest

	// send confirmation back to admin portal

});


app.get('/admin/update/:user_id', (req, res) => {
	// used by admin to update a user's test grade

	// call saveTestGrade

	// send confirmation back to admin portal

});




app.get('*', (req, res) => {
	res.sendStatus(404);
});


app.listen(PORT, console.log(`Form Test Server is listening on ${PORT}!`));