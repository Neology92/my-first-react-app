import React, { useState, useEffect } from 'react';

const Dishes = props => {
	const [dishes, setDishes] = useState([]);

	const fetchDishes = () => {
		fetch(
			'https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes'
		)
			.then(res => res.json())
			.then(res => {
				setDishes(res);
			})
			.catch(error => {
				console.log(error);
			});
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
						<article
							key={index}
							className='dish-card dish-card--withImage'
						>
							<h3>{dish.name}</h3>
							<p>{dish.desc}</p>
							<div className='ingredients'>
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
