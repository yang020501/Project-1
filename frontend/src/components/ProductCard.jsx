import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from './Button'
import numberWithCommas from '../utils/numberWithCommas'

import { useDispatch } from 'react-redux'
import { set } from '../redux/product-modal/productModalSlice'

const ProductCard = props => {
    const dispatch = useDispatch()
    return (
        <div className='product-card'>
            <Link to={`/catalog/${props.slug}`}>
                <div className='product-card-image'>
                    <img src={props.img01} alt="" />
                    <img src={props.img02} alt="" />
                </div>
                <h3 className='product-card-name'>{props.name}</h3>
                <div className="product-card-price">
                    {numberWithCommas(props.price)}
                    <span className='product-card-price-old'>
                        <del>{numberWithCommas(399999)}</del>
                    </span>
                </div>
            </Link>
            <div className="product-card-btn">
                <Button
                    size='sm'
                    icon='bx bx-cart'
                    animate={true}
                    onclick={() => dispatch(set(props.slug))}
                >
                    chọn mua
                </Button>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    img01: PropTypes.string.isRequired,
    img02: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired
}

export default ProductCard
