import React, { Fragment } from 'react';
import styled from 'styled-components';
import {
	darkBackground,
	borderColor,
	useForm,
} from 'Utils';
import { Dishes } from 'Components';

const TestForm = ({ className }) => {
	const [
		values,
		updateValue,
		submitHandler,
		errors,
	] = useForm({
		firstName: '',
		lastName: '',
		dishName: '',
	});

	return (
		<Fragment>
			<form className={className} onSubmit={submitHandler}>
				<div className='grid'>
					<h2>First name:</h2>{' '}
					<input
						name='firstName'
						onChange={updateValue}
						value={values.firstName}
					/>
					<h2>Last name:</h2>{' '}
					<input
						name='lastName'
						onChange={updateValue}
						value={values.lastName}
					/>
				</div>
				<div className='errors'>
					{errors &&
						errors.map((err, index) => (
							<h3 key={index}>{err}</h3>
						))}
				</div>
				<button type='submit' disabled={errors.length > 0}>
					Send
				</button>
			</form>
			<form className={className} onSubmit={submitHandler}>
				<div className='grid'>
					<h2>Dish name:</h2>{' '}
					<input
						name='dishName'
						onChange={updateValue}
						value={values.dishName}
					/>
				</div>
			</form>
			<Dishes dishName={values.dishName} />
		</Fragment>
	);
};

export default styled(TestForm)`
	border: 1px solid ${borderColor};
	margin: 100px auto 0;
	padding: 20px;

	& .grid {
		display: grid;
		grid-template-columns: 170px 250px;
		grid-template-rows: 50px;
		grid-row-gap: 20px;
		grid-auto-flow: row;
		cursor: default;
	}

	& h2 {
		margin: 10px 0 10px 0;
	}

	& input {
		padding: 10px;
		width: 230px;
		height: 30px;
		font-size: 1.6rem;
		color: white;
		background-color: ${darkBackground};
		border: 1px solid white;
	}

	& .errors {
		color: red;
		padding: 10px;
		cursor: default;
	}

	& button {
		background-color: darkgreen;
		width: 422px;
		border: 1px solid white;
	}
`;
