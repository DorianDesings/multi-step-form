import { useEffect, useState } from 'react';

const emailRegex =
	/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const useForms = () => {
	const [isValid, setIsValid] = useState(false);
	const [startFillForm, setStartFillForm] = useState(false);
	const [formData, setFormData] = useState({
		name: {
			value: '',
			error: true
		},
		email: {
			value: '',
			error: true
		},
		phone: {
			value: '',
			error: true
		},
		plan: {
			arcade: false,
			advance: false,
			pro: false
		},
		periodicity: '',
		onlineService: false,
		largerStorage: false,
		customizableProfile: false
	});

	useEffect(() => {
		if (
			startFillForm &&
			!formData.name.error &&
			!formData.email.error &&
			!formData.phone.error
		) {
			setIsValid(true);
		} else {
			setIsValid(false);
		}
	}, [formData]);

	const { name, email, phone } = formData;

	const setName = name =>
		setFormData({
			...formData,
			name: {
				value: name,
				error: !validateName(name)
			}
		});

	const setEmail = email =>
		setFormData({
			...formData,
			email: {
				value: email,
				error: !validateEmail(email)
			}
		});

	const setPhone = phone =>
		setFormData({
			...formData,
			phone: {
				value: phone,
				error: !validatePhone(phone)
			}
		});

	const setPeriodicity = periodicity => {
		setFormData({
			...formData,
			plan: {
				[periodicity]: true
			}
		});
	};

	return {
		name,
		email,
		phone,
		setName,
		setEmail,
		setPhone,
		isValid,
		startFillForm,
		setStartFillForm,
		setPeriodicity
	};
};

const validateName = name => name.length > 3;
const validateEmail = email => !emailRegex.test(email.value);
const validatePhone = phone => phone.length === 9;

export default useForms;
