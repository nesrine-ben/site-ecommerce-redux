import React, { useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { runFireworks } from '../lib/utils';
import { resCart } from '../logic/actions/cartActions'
import { useDispatch } from 'react-redux';

const Success = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.clear();
    dispatch(resCart())
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:nesssrina2019@gmail.com">
          nesssrina2019@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success