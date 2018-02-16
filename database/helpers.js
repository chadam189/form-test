/* 

Stubs of all of the functions to interact with the DB

*/

// const { database } = require('index.js');

const createNewUser = (firstName, lastName, email) => {
	// creates a new user in "users table"

	// returns the user's ID, this will be used by server/client in tracking the user's responses
};

const saveUserAnswer = (userID, questionNumber, response) => {
	// question number is a number 1-5 to ID which question the response is for
	// response is a large block of text that is the user's answer
};

const retrieveUserTest = (userID) => {
	// retrieves a user's test answers; used for an admin to grade the test
};

const saveTestGrade = (userID, testStatus, notes) => {
	// used by admin to update the test status for a user from "not graded" to either "rejected" or "passed"
	// notes is a free-form column for admin to save any additional comments as necessary
};

const filterTests = (testStatus) => {
	// pulls all entries from "tests table" that have a specific test status:
		// not graded, passed, rejected would be the three enumerables for this
};

module.exports = {
	createNewUser, 
	saveUserAnswer,
	retrieveUserTest,
	saveTestGrade,
  filterTests
};
