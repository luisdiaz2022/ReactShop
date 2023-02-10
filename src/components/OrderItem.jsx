import React, {useContext} from 'react';
import '../styles/OrderItem.scss';
import AppContext from '../context/AppContext.js'
import close from '../assets/icons/icon_close.png'

const OrderItem = ({product}) => {
	const {removeFromCart} = useContext(AppContext);

	const handleRemover = product => {
		removeFromCart(product);
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>{product.price}</p>
			<img src={close} alt="close" onClick={() => handleRemover(product)} />
		</div>
	);
}

export default OrderItem;