var database = [
	{
		username : "Falilou",
		password : "Avenirusa217"
	}
];


var newsFeed = [
	{
		username : "Ouro",
		timeline : "so tired for all those learning"
	},

	{
		username : "Djobo",
		timeline : "JavaScript is sooooo cooool"
	}
];


var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
	// body...
	if (user === database[0].username && pass === database[0].password) {
		console.log(newsFeed);
	} else {
		alert("Sorry the username or password iswrong");
	}
}

signIn(userNamePrompt, passwordPrompt);