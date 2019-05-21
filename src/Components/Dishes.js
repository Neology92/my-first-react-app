import React, { useState, useEffect } from 'react';

const Dishes = props => {
	const [dishes, setDishes] = useState([]);

	const fetchDishes = async () => {
		const res = await fetch(
			'https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes'
		);
		const data = await res.json();
		setDishes(data);
	};

	useEffect(() => {
		fetchDishes();
	}, []);

	return (
		<div>
			{dishes.map((dish, index) => {
				if (
					dish.name
						.toLowerCase()
						.indexOf(props.dishName.toLowerCase()) !== -1
				)
					return (
						<article key={index}>
							<h3>{dish.name}</h3>
							<p>{dish.desc}</p>
							<div>
								{dish.ingredients.map(
									(ingredient, index2) => (
										<span key={index2}>{ingredient}</span>
									)
								)}
							</div>
						</article>
					);
				else return '';
			})}
		</div>
	);
};

export default Dishes;
