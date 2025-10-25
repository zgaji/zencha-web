import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(
        item => item.id === action.payload.id && item.size === action.payload.size
      );
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id && item.size === action.payload.size
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        };
      }
      
      return {
        ...state,
        items: [...state.items, action.payload]
      };
      
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((item, index) =>
          index === action.payload.index
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
      
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((_, index) => index !== action.payload.index)
      };
      
    case 'CLEAR_CART':
      return {
        ...state,
        items: []
      };
      
    case 'SET_CART_OPEN':
      return {
        ...state,
        isOpen: action.payload.isOpen
      };
      
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false
  });

  const addToCart = (product, size, quantity = 1) => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.sizes ? product.sizes[size]?.price : product.price,
      size: size,
      image: product.image,
      quantity: quantity
    };
    
    dispatch({ type: 'ADD_TO_CART', payload: cartItem });
  };

  const updateQuantity = (index, quantity) => {
    if (quantity <= 0) {
      dispatch({ type: 'REMOVE_ITEM', payload: { index } });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { index, quantity } });
    }
  };

  const removeItem = (index) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { index } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const openCart = () => {
    dispatch({ type: 'SET_CART_OPEN', payload: { isOpen: true } });
  };

  const closeCart = () => {
    dispatch({ type: 'SET_CART_OPEN', payload: { isOpen: false } });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart,
        openCart,
        closeCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
