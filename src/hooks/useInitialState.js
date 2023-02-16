import { useState } from "react";

const initialState ={
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    };

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(item => item.id !== payload.id),
        });
    }

    const [toggleCart, setToggleCart] = useState(false);

	const handleToggleCart = () => {
		setToggleCart(!toggleCart);
	}

    const [quantity, setQuantity] = useState(0);
    const handleDecreaseQuantity = () =>{
        setQuantity(quantity - 1);
    }
    const handleIncreaseQuantity = () =>{
        setQuantity(quantity + 1);
    }

    return {
        state,
        addToCart,
        removeFromCart,
        handleToggleCart,
        toggleCart,
        quantity,
        handleDecreaseQuantity,
        handleIncreaseQuantity
    }
}

export default useInitialState;