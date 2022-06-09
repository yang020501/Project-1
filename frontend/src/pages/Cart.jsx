import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { apiUrl } from '../utils/constant'
import productData from '../assets/fake-data/products'
import Helmet from '../components/Helmet'
import CartItem from '../components/CartItem'
import Button from '../components/Button'
import numberWithCommas from '../utils/numberWithCommas'
import { getAllProduct } from '../redux/product/productSlice'

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value)
  const [cartProducts, setcartProducts] = useState([])
  const [totalProducts, settotalProducts] = useState(0)
  const [totalPrice, settotalPrice] = useState(0)
  const productList = useSelector(state => state.productSlice.value)
  const dispatch = useDispatch()
  const getCartItemsInfo = (cartItems) => {
    if (productList.length > 0) {
      let res = []
      if (cartItems.length > 0) {
        cartItems.forEach(e => {
          let product = productList.filter(item => {
            return item.slug === e.slug
          })
          res.push({
            ...e,
            product: product[0]
          })
        })
      }
      return res.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))
    }
  }
  useEffect(() => {
    setcartProducts(getCartItemsInfo(cartItems))
    settotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0))
    settotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
  }, [cartItems, productList])
  useEffect(() => {
    dispatch(getAllProduct())
  }, [])
  return (
    <Helmet title="Giỏ hàng">
      <div className="cart">
        <div className="cart-info">
          <div className="cart-info-txt">
            <p>
              Bạn đang có {totalProducts} sản phẩm trong giỏ hàng
            </p>
            <div className="cart-info-txt-price">
              <span>Thành tiền:</span> <span>{numberWithCommas(Number(totalPrice))}</span>
            </div>
          </div>
          <div className="cart-info-btn">
            <Button size="block">
              Đặt hàng
            </Button>
            <Link to="/catalog">
              <Button size="block">
                Tiếp tục mua hàng
              </Button>
            </Link>

          </div>
        </div>
        <div className="cart-list">
          {
            (cartProducts) ?
              cartProducts.map((item, index) => {
                console.log(productList.length);
                console.log(item);
                return <CartItem item={item} key={index} />
              })
              : <></>
          }
        </div>
      </div>
    </Helmet>
  )
}

export default Cart
