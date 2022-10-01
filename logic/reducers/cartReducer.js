import {
  ON_ADD,
  ON_REMOVE,
  ON_TOGGLE_CART,
  ON_INC,
  ON_DEC,
  ON_RES_QTY,
  ON_SHOW_CART,
  ON_HIDE_CART,
  RESET_CART
} from "../actions/types";
import toast from 'react-hot-toast';

const initialState = {
  cartItems: [],
  showCart: false,
  totalPrice: 0,
  totalQuantities: 0,
  qty: 1,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_ADD: {
      const {
        payload: {
          product: { price, _id, name },
        },
      } = action;
      const {
        payload: { product, quantity },
      } = action;
      const { cartItems, totalPrice, totalQuantities } = state;

      const checkProductInCart = !!cartItems.find((item) => _id === item._id);
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (_id === cartProduct._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      toast.success(`${quantity} ${name} added to the cart.`);

      return {
        ...state,
        totalPrice: totalPrice + price * quantity,
        totalQuantities: totalQuantities + quantity,
        cartItems: checkProductInCart
          ? updatedCartItems
          : [...cartItems, { ...product, quantity }],
      };
    }

    case ON_REMOVE: {
      const {
        payload: {
          product: { _id },
        },
      } = action;
      const { cartItems, totalPrice, totalQuantities } = state;

      const foundProduct = cartItems.find((item) => _id === item._id);
      const newCartItems = cartItems.filter((item) => _id !== item._id);

      return {
        ...state,
        totalPrice: totalPrice - foundProduct.price,
        totalQuantities: totalQuantities - foundProduct.quantity,
        cartItems: newCartItems,
      };
    }

    case ON_TOGGLE_CART: {
      const {
        payload: { id, value },
      } = action;
      const { cartItems, totalPrice, totalQuantities } = state;
      const foundProduct = cartItems.find((item) => id === item._id);
      const newCartItems = cartItems.filter((item) => id !== item._id);

      if (value === "inc") {
        return {
          ...state,
          totalPrice: totalPrice + foundProduct.price,
          totalQuantities: totalQuantities + 1,
          cartItems: [
            ...newCartItems,
            { ...foundProduct, quantity: foundProduct.quantity + 1 },
          ],
        };
      } else if (value === "dec") {
        if (foundProduct.quantity > 1) {
          return {
            ...state,
            totalPrice: totalPrice - foundProduct.price,
            totalQuantities: totalQuantities - 1,
            cartItems: [
              ...newCartItems,
              { ...foundProduct, quantity: foundProduct.quantity - 1 },
            ],
          };
        } else {
          return state
        }
      }
    }

    case ON_INC: {
      return { ...state, qty: state.qty + 1 };
    }

    case ON_DEC: {
      return { ...state, qty: state.qty > 1 ? state.qty - 1 : 1 };
    }

    case ON_RES_QTY: {
      return { ...state, qty: 1 };
    }

    case ON_SHOW_CART: {
      return { ...state, showCart: true };
    }

    case ON_HIDE_CART: {
      return { ...state, showCart: false };
    }

    case RESET_CART: {
      return { ...state, cartItems: [], totalPrice: 0, totalQuantities: 0 };
    }

    default: {
      return state;
    }
  }
};