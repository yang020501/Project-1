import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/shopping-cart/cartItemsSlice'
const ProductView = props => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    let product = props.product
    if (product === undefined) product = {
        price: 0,
        title: "",
        colors: [],
        size: []
    }
    const [previewImg, setPreviewImage] = useState(product.image01)
    const [descriptionExpand, setDescriptionExpand] = useState(false)
    const [color, setColor] = useState(undefined)
    const [size, setSize] = useState(undefined)
    const [quantity, setQuantity] = useState(1)

    const updateQuantity = (type) => {
        if (type === "plus") {
            setQuantity(quantity + 1)
        }
        else {
            setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
        }
    }
    const check = () => {
        if (color === undefined) {
            alert("Vui lòng chọn màu sắc")
            return false
        }
        if (size === undefined) {
            alert('Vui lòng kích cỡ')
            return false
        }
        return true
    }
    const addToCart = () => {
        if (check()) {
            dispatch(addItem({
                slug: product.slug,
                color: color,
                size: size,
                quantity: quantity,
                price: product.price

            }))
        }
    }
    const gotoCart = () => {
        if (check()) {
            dispatch(addItem({
                slug: product.slug,
                color: color,
                size: size,
                quantity: quantity,
                price: product.price

            }))

            navigate("/cart")
        }
    }
    useEffect(() => {
        setPreviewImage(product.image01)
        setQuantity(1)
        setColor(undefined)
        setSize(undefined)
    }, [product])
    return (
        <div className='product'>
            <div className="product-images">
                <div className="product-images-list">
                    <div className="product-images-list-item" onClick={() => setPreviewImage(product.image01)}>
                        <img src={product.image01} alt="" />
                    </div>
                    <div className="product-images-list-item" onClick={() => setPreviewImage(product.image02)}>
                        <img src={product.image02} alt="" />
                    </div>
                </div>
                <div className="product-images-main">
                    <img src={previewImg} alt='' />
                </div>
                <div className={`product-description ${descriptionExpand ? 'expand' : ''}`}>
                    <div className="product-description-title">
                        Chi tiết sản phẩm
                    </div>
                    <div className="product-description-content"
                        dangerouslySetInnerHTML={{ __html: product.description }}
                    ></div>
                    <div className="product-description-toggle">
                        <Button size='sm' onclick={() => setDescriptionExpand(!descriptionExpand)}>
                            {
                                descriptionExpand ? 'Thu gọn' : 'Xem thêm'
                            }
                        </Button>
                    </div>
                </div>
            </div>
            <div className="product-info">
                <h1 className="product-info-title">
                    {product.title}
                </h1>
                <div className="product-info-item">
                    <span className='product-info-item-price'>
                        {product.price}
                    </span>
                </div>
                <div className="product-info-item">
                    <div className='product-info-item-title'>
                        Màu sắc
                    </div>
                    <div className="product-info-item-list">
                        {product.colors.map((item, index) => (
                            <div key={index} className={`product-info-item-list-item ${color === item ? 'active' : ''}`}
                                onClick={() => setColor(item)}
                            >
                                {
                                    <div className={`circle bg-${item}`}></div>
                                }
                            </div>
                        ))
                        }
                    </div>
                </div>
                <div className="product-info-item">
                    <div className='product-info-item-title'>
                        Kích cỡ
                    </div>
                    <div className="product-info-item-list">
                        {product.size.map((item, index) => (
                            <div key={index} className={`product-info-item-list-item ${size === item ? 'active' : ''}`}
                                onClick={() => setSize(item)}
                            >
                                <div className="product-info-item-list-item-size">
                                    {item}
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
                <div className="product-info-item">
                    <div className='product-info-item-title'>
                        Số lượng
                    </div>
                    <div className="product-info-item-quantity">
                        <div className="product-info-item-quantity-btn" onClick={() => updateQuantity("minus")}>
                            <i className='bx bx-minus' />
                        </div>
                        <div className="product-info-item-quantity-input">
                            {quantity}
                        </div>
                        <div className="product-info-item-quantity-btn" onClick={() => updateQuantity("plus")}>
                            <i className='bx bx-plus' />
                        </div>
                    </div>
                </div>
                <div className="product-info-item">
                    <Button onclick={() => addToCart()}>
                        Thêm vào giỏ
                    </Button>
                    <Button onclick={() => gotoCart()}>
                        Mua ngay
                    </Button>
                </div>
            </div>
            <div className={`product-description mobile ${descriptionExpand ? 'expand' : ''}`}>
                <div className="product-description-title">
                    Chi tiết sản phẩm
                </div>
                <div className="product-description-content"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                ></div>
                <div className="product-description-toggle">
                    <Button size='sm' onclick={() => setDescriptionExpand(!descriptionExpand)}>
                        {
                            descriptionExpand ? 'Thu gọn' : 'Xem thêm'
                        }
                    </Button>
                </div>
            </div>
        </div >
    )
}

ProductView.propTypes = {
    product: PropTypes.object

}

export default ProductView