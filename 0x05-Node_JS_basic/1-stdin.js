process.stdout.write('welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
	const chunk = process.stdin.read();

	if (chunk) {
		process.stdout.write(`your name is : ${chunk}`);
	}
});

process.stdin.on('end', () => {
	process.stdout.write('this important software is no closing\n');
});
