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

    return {
        state,
        addToCart,
        removeFromCart,
        handleToggleCart,
        toggleCart
    }
}

export default useInitialState;