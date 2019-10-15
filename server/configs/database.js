const mongoose = require('mongoose');

console.log(process.env);
// Don't forget to set "MONGODB_URI" in ~/server/.env
const uri = process.env.MONGODB_URI || `mongodb://localhost/cerealbars`;

mongoose
	.connect(uri, { useNewUrlParser: true })
	.then((x) => {
		console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
	})
	.catch((err) => {
		console.error('Error connecting to mongo', err);
	});
