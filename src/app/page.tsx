import Footer from '@/components/Header/Footer'
import Header from '@/components/Header/Header'
import Hero from '@/components/Header/Hero'
import PreApprovalBenefits from '@/components/Header/PreApprovalBenefits'
import WebinarCard from '@/components/Header/WebinarCard'
import React from 'react'

const page = () => {
  return (
    <div>
      
      {/* header */}
      <Header />

      <Hero />

      <PreApprovalBenefits />

      <WebinarCard />

      <Footer />

    </div>
  )
}

export default page