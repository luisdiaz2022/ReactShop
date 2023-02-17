import React, {useContext, useState} from 'react';
import '../styles/OrderItem.scss';
import AppContext from '../context/AppContext.js'
import close from '../assets/icons/icon_close.png'

const OrderItem = ({product}) => {
	const {removeFromCart} = useContext(AppContext);

	const handleRemover = product => {
		removeFromCart(product);
	}
	const [quantity, setQuantity] = useState(0);
    const handleDecreaseQuantity = () =>{
		if(quantity > 1){
        setQuantity(quantity - 1);
    }}
    const handleIncreaseQuantity = () =>{
       if(quantity < 10){ 
	   setQuantity(quantity + 1);
    }}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<div className="quantity-container">
				<button className='increase' onClick={()=> handleIncreaseQuantity()}>+</button>
				<input className='quantity' type='number' value={quantity} readOnly/>
				<button className='decrease' onClick={()=> handleDecreaseQuantity()}>-</button>
			</div>
			<img src={close} alt="close" onClick={() => handleRemover(product)} />
		</div>
	);
}

export default OrderItem;