
import Image from "next/image";
import { useKeenSlider } from 'keen-slider/react' 
import 'keen-slider/keen-slider.min.css'

import { HomeContainer, Product } from "@/styles/pages/home";

import tShirt01 from '@/assets/t-shirts/shirt01.png'
import tShirt02 from '@/assets/t-shirts/shirt02.png'
import tShirt03 from '@/assets/t-shirts/shirt03.png'
import Head from "next/head";



export default function Home() {

   const [sliderRef, instanceRef] = useKeenSlider(
     {
       slideChanged() {
         console.log('slide changed')
       },
       slides:{
        perView: 3,
        spacing: 48
       }
     },
     [
      //  add plugins here
     ]
   )

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef}  className="keen-slider">
        <Product className="keen-slider__slide">
          <Image src={tShirt01} width={520} height={480} alt="" />
          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
        <Product className="keen-slider__slide">
          <Image src={tShirt02} width={520} height={480} alt="" />
          <footer>
            <strong>Camiseta Y</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
        <Product className="keen-slider__slide">
          <Image src={tShirt03} width={520} height={480} alt="" />
          <footer>
            <strong>Camiseta Y</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
        <Product className="keen-slider__slide">
          <Image src={tShirt03} width={520} height={480} alt="" />
          <footer>
            <strong>Camiseta Y</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
        <Product className="keen-slider__slide">
          <Image src={tShirt03} width={520} height={480} alt="" />
          <footer>
            <strong>Camiseta Y</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
        <Product className="keen-slider__slide">
          <Image src={tShirt03} width={520} height={480} alt="" />
          <footer>
            <strong>Camiseta Y</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
        <Product className="keen-slider__slide">
          <Image src={tShirt03} width={520} height={480} alt="" />
          <footer>
            <strong>Camiseta Y</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
        <Product className="keen-slider__slide">
          <Image src={tShirt03} width={520} height={480} alt="" />
          <footer>
            <strong>Camiseta Y</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
        <Product className="keen-slider__slide">
          <Image src={tShirt03} width={520} height={480} alt="" />
          <footer>
            <strong>Camiseta Y</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
        
      </HomeContainer>
    </>
  );
}
