// "use client"
import First from '@/components/first/First';
import Second from '@/components/second/Second';
import Third from '@/components/third/Third';
import Fourth from '@/components/fourth/Fourth';
import TitlePart from '@/components/title-part/TitlePart';
import titleImg from '../../public/title-part/title.svg';
import titleImgTwo from '../../public/title-part/titleTwo.svg';
import PartnersPart from '@/components/partners-part/PartnersPart';
import Seventh from '@/components/seventh/Seventh';
import Eight from '@/components/eight/Eight';
import Ninth from '@/components/ninth/Ninth';
import Tenth from '@/components/tenth/Tenth';
import Footer from '@/components/footer/Footer';
import RightMenu from '@/components/right-menu/RightMenu';
import LeftMenu from '@/components/left-menu/LeftMenu';
import Loader from '@/components/loader/Loader';
import "swiper/css";
import "swiper/swiper.min.css";


// import { useEffect } from 'react';

// useEffect(() => {
//   window.scrollTo(0,0)
// }, []);

export default function Home() {
  return (
    <main>
      <First/>
      <Second/>
      <Third/>
      <Fourth/>
      <TitlePart img={titleImg}/>
      <PartnersPart words='They' orangeWord='trust us'/>
      <Seventh/>
      <PartnersPart words='Our' orangeWord='technologies'/>
      <Eight/>
      <TitlePart img={titleImgTwo}/>
      <Ninth/>
      <Tenth/>
      <Footer/>
      <RightMenu/>
      <LeftMenu/>
      <Loader/>
    </main>
  )
}
