import React from 'react'
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import { Cart } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setShowCart } from '../logic/actions/cartActions'

const Navbar = () => {
  const dispatch = useDispatch()
  const totalQuantities = useSelector((state) => state.cartReducer.totalQuantities)
  const showCart = useSelector((state) => state.cartReducer.showCart)
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Computers</Link>
      </p>

      <button
        type="button"
        className="cart-icon"
        onClick={() => dispatch(setShowCart())}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  )
}

export default Navbar