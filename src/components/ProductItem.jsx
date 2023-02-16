import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/ProductItem.scss';
import addToCartImage from '../assets/icons/bt_add_to_cart.svg';
import addedToCartImage from '../assets/icons/bt_added_to_cart.svg';
import mockImage from '../assets/logos/imagen1.jpg';

const ProductItem = ({product}) => {
	const {addToCart, removeFromCart, state} = useContext(AppContext);

	const handleClick = (item) => {
		itsProductAdded () ? removeFromCart(item) : addToCart(item);
	};
	const itsProductAdded = () => state.cart.some( (item) => item.id === product.id) ? true : false;
	let image = mockImage;
	try {
		if (product.images && product.images.length > 0) {
		  const img = new Image();
		  img.src = product.images[0];
		  img.onload = () => {
			image = product.images[0];
		  };
		}
	  } catch (error) {
		console.error(error);
	  }

	return (
		<div className="ProductItem">
			<img src={image} alt={product.title}/>
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					{ itsProductAdded() ? (
						<img src={addedToCartImage} alt="" />
					) : (
						<img src={addToCartImage} alt="" />
					)}
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
