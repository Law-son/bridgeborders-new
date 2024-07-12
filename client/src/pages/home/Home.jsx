import React from 'react'
import Nav from '../../components/navBar/Nav';
import HeroSection from '../../components/heroSection/HeroSection';
import MainBody from '../../components/mainBody/MainBody';
import PaymentPlans from '../../components/paymentPlans/PaymentPlans';
import FAQ from '../../components/faq/FAQ';
import Footer from '../../components/footer/Footer';


function Home() {
  return (
    <section>
      <Nav />
      <HeroSection />
      <MainBody />
      <PaymentPlans />
      <FAQ />
      <Footer />
    </section>
  )
}

export default Home
