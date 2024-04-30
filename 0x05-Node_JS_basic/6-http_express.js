const express = require('express'); 

const app = express();
const PORT = 1245;

app.get('/', (_, res) => {
	res.send)'Hello Holberton School!');
});

app.listen(PORT, () => {
	console.log(`server listening on PORT ${PORT}`);
});

module.exports = app;
