import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import numberWithCommas from '../utils/numberWithCommas';
import { Link } from 'react-router-dom';
import { updateItem,removeItem } from '../redux/shopping-cart/cartItemsSlice';

const CartItem = props => {
    const [item, setItem] = useState(props.item)
    const [quantity, setquantity] = useState(props.item.quantity)
    const dispatch = useDispatch();

    useEffect(() => {
        setquantity(props.item.quantity)
        setItem(props.item)

    }, [props.item])
    const updateQuantity = (opt) => {
        if (opt === '+') {
            dispatch(updateItem({ ...item, quantity: quantity + 1 }))
            /*  setquantity(quantity + 1) */
        }
        if (opt === '-') {
            dispatch(updateItem({ ...item, quantity: quantity - 1 }))
        }
    }
    const removeCartitem = (obj) => {
        dispatch(removeItem(item))
        console.log(obj);
    }
    return (
        <div className='cart-item'>
            <div className="cart-item-image">
                <img src={item.product.image01} alt='' />
            </div>
            <div className="cart-item-info">
                <div className="cart-item-info-name">
                    <Link to={`/catalog/${item.slug}`}>
                        {`${item.product.title} - ${item.color} - ${item.size}`}
                    </Link>
                </div>
                <div className="cart-item-info-price">
                    {numberWithCommas(Number(item.product.price))}
                </div>
                <div className="cart-item-info-quantity">
                    <div className="product-info-item-quantity">
                        <div className="product-info-item-quantity-btn" onClick={() => updateQuantity("-")} >
                            <i className='bx bx-minus' />
                        </div>
                        <div className="product-info-item-quantity-input">
                            {quantity}
                        </div>
                        <div className="product-info-item-quantity-btn" onClick={() => updateQuantity("+")} >
                            <i className='bx bx-plus' />
                        </div>
                    </div>
                </div>
                <div className="cart-item-info-del" onClick={() => removeCartitem()}>
                    <i className='bx bx-trash'></i>
                </div>
            </div>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.object
}

export default CartItem