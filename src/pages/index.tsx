import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import Head from "next/head";
import { GetServerSideProps } from "next";
import Image from "next/image";

import { useKeenSlider } from 'keen-slider/react' 
import 'keen-slider/keen-slider.min.css'

import { HomeContainer, Product } from "@/styles/pages/home";


interface HomeProps {
  products:{
    id: string,
    name: string,
    imageUrl: string,
    description?: string,
    price: string,
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
      slides: {
        perView: 3,
        spacing: 48,
      },
    },
    [
      //  add plugins here
    ]
  );

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
     
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Product key={product.id} className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="" />
              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </Product>
          );
        })}
        
        
      </HomeContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand:['data.default_price']
  })

  

const products = response.data.map(product => {
  const price = product.default_price as Stripe.Price

  return {
    id: product.id,
    name: product.name,
    imageUrl: product.images[0],
    description: product.description,
    price: price.unit_amount,

  }
})

  return {
    props: {
      products
    }
  }
}