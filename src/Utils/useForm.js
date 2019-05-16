import { useState, useEffect } from 'react';

const validate = values => {
	const errors = [];

	if (!values.firstName) {
		errors.push('Enter Your first name');
	}

	if (!values.lastName) {
		errors.push('Enter Your last name');
	}

	return errors;
};

const useForm = initial => {
	const [values, setValues] = useState(initial);
	const [errors, setErrors] = useState([]);

	useEffect(() => {
		if (errors.length !== 0) setErrors(validate(values));
	}, [values]);

	const updateValue = e => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const submitHandler = e => {
		e.preventDefault();
		setErrors(validate(values));
		if (errors.length === 0) {
			console.log('Sending request to API...', values);
		}
	};

	return [updateValue, submitHandler, errors];
};

export default useForm;
