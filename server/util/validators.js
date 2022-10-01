module.exports.validateRegisterInput = (
	username,
	email,
	password,
	confrimPassword,
) => {
	const errors = {};
	// username validation
	if (username.trim() === '') errors.username = 'username must not be empty';

	// email validation
	if (email.trim() === '') errors.email = 'Email must not be empty';
	else {
		const regEx =
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!email.match(regEx)) errors.email = 'Email must be a valid email address';
	}
	// password validation
	if (password === '') errors.password = 'Password must not be empty';
	else if (password !== confrimPassword)
		errors.confrimPassword = 'Passwords must match';

	return {
		errors,
		valid: Object.keys(errors).length < 1,
	};
};

module.exports.validateLoginInput = (username, password) => {
	const errors = {};
	if (username.trim() === '') errors.username = 'Username must not be empty';

	if (password.trim() === '') errors.password = 'Password must not be empty';

	return {
		errors,
		valid: Object.keys(errors).length < 1,
	};
};
