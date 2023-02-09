import React from 'react';
import OrderItem from '../components/OrderItem';
import '../styles/Orders.scss';

const Orders = () => {
	const products_list = [ {
		key: 1,
		product: 'bike',
		price: 23,
		description: 'criminalosa',
	},
	{
		key: 2,
		product: 'car',
		price: 23,
		description: 'criminalosa',
	},
	{
		key: 3,
		product: 'bus',
		price: 23,
		description: 'criminalosa',
	},
	{
		key: 4,
		product: 'airplane',
		price: 23,
		description: 'criminalosa',
	},
	{
		key: 5,
		product: 'bottle',
		price: 23,
		description: 'criminalosa',
	},
	{
		key: 6,
		product: 'headphones',
		price: 23,
		description: 'criminalosa',
	},
	{
		key: 7,
		product: 'mouse',
		price: 23,
		description: 'criminalosa',
	}
	]

	return (
		<div className="Orders">
			<div className="Orders-container">
				<h1 className="title">My orders</h1>
				<div className="Orders-content">
					{products_list.map(product=>
					<OrderItem product={product.product} price={product.price} description={product.description}/>
						)}
				</div>
			</div>
		</div>
	);
}

export default Orders;