import { fireSignIn as actionAuthSignIn } from 'components/Store/auth/actions/signIn.js';

const onLogin = async (e) => {
	e.preventDefault();

	const inputName = e.target.elements.name;
	const inputPassword = e.target.elements.password;
	const nameValue = inputName.value;
	const passwordValue = inputPassword.value;

	actionAuthSignIn(nameValue, passwordValue)();
};

export default onLogin;
