<<<<<<< HEAD
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
=======
process.stdout.write('welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
	const chunk = process.stdin.read();

	if (chunk) {
		process.stdout.write(`your name is : ${chunk}`);
	}
>>>>>>> e0ce7a4ab56cbbcaa97ae880e4ba0e0d8ad0164b
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
