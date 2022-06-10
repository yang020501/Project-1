import React, { useEffect, useState } from 'react'
import Helmet from '../components/Helmet'
import HeroSlider from '../components/HeroSlider'
import Section, { SectionTitle, SectionBody } from '../components/Section'
import PolicyCard from '../components/PolicyCard'
import heroSliderData from '../assets/fake-data/hero-slider'
import policy from '../assets/fake-data/policy'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'
import banner from '../assets/images/banner.png'
import { apiUrl } from '../utils/constant'
import axios from 'axios'
import { getAllProduct } from '../redux/product/productSlice'
import { useDispatch, useSelector } from 'react-redux'
const Home = () => {
  const dispatch = useDispatch()
  const productData = useSelector(state => state.productSlice.value)
  useEffect(() => {
    dispatch(getAllProduct())
  }, [])
  console.log(productData);
  const getProducts = (count) => {
    const max = productData.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return productData.slice(start, start + count)
  }
  return (
    <Helmet title='Trang chủ'>
      <HeroSlider data={heroSliderData} control={true} auto={true} timeOut={3000} />
      <span>


      </span>
      <Section>
        <SectionBody>
          <Grid
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            {policy.map((item, index) => (
              <Link key={index} to="/">
                <PolicyCard
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>

            ))
            }
          </Grid>
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle>
          Top sản phẩm bán chạy
        </SectionTitle>
        <SectionBody>
          <Grid
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            {
              getProducts(4).map((item, index) => (
                <ProductCard
                  key={index}
                  img01={item.image1}
                  img02={item.image2}
                  name={item.title}
                  slug={item.slug}
                  price={item.price}
                >
                </ProductCard>
              )
              )
            }

          </Grid>
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle>
          sản phẩm mới
        </SectionTitle>
        <SectionBody>
          <Grid
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            {
              getProducts(8).map((item, index) => (
                <ProductCard
                  key={index}
                  img01={item.image1}
                  img02={item.image2}
                  name={item.title}
                  slug={item.slug}
                  price={item.price}
                >
                </ProductCard>
              )
              )
            }

          </Grid>
        </SectionBody>
      </Section>

      <Section>
        <Link to="/catalog">
          <img src={banner} alt="" />
        </Link>
      </Section>


      <Section>
        <SectionTitle>
          phổ biến
        </SectionTitle>
        <SectionBody>
          <Grid
            col={4}
            mdCol={2}
            smCol={1}
            gap={20}
          >
            {
              getProducts(12).map((item, index) => (
                <ProductCard
                  key={index}
                  img01={item.image1}
                  img02={item.image2}
                  name={item.title}
                  slug={item.slug}
                  price={item.price}
                >
                </ProductCard>
              )
              )
            }

          </Grid>
        </SectionBody>
      </Section>

    </Helmet>
  )
}

export default Home