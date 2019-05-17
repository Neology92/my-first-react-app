import { useState, useEffect } from 'react';

const validate = values => {
	const errors = [];

	console.log(`First Name: ${values.firstName}`);
	console.log(`Last Name: ${values.lastName}`);

	if (!values.firstName) {
		errors.push('Enter Your first name');
	}

	if (!values.lastName) {
		errors.push('Enter Your last name');
	}

	return errors;
};

const useForm = initialValues => {
	const [values, setValues] = useState(initialValues);
	const [errors, setErrors] = useState([]);

	useEffect(() => {
		if (errors.length !== 0) {
			setErrors(validate(values));
		}
	}, [values]);

	const updateValue = e => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	//TODO ToFix
	//? when in array is at least one error...
	//! errors.length === 0

	const submitHandler = e => {
		e.preventDefault();
		setErrors(validate(values));
		console.log(errors.length);

		if (errors.length === 0) {
			console.log('Sending request to API...', values);
			setValues(initialValues);
		}
	};

	return [values, updateValue, submitHandler, errors];
};

export default useForm;
