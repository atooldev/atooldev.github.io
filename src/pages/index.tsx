import BusinessIcon from '@/components/base/icons/BusinessIcon'
import GoalIcon from '@/components/base/icons/GoalIcon'
import TeamIcon from '@/components/base/icons/TeamIcon'
import HeroSection from '@/components/hero-section/HeroSection'
import HowItWorksSection from '@/components/how-it-works-section/HowItWorksSection'
import Layout from '@/components/layout/Layout'
import LogosSection from '@/components/logos-section/LogoSection'
import NewsLetterSection from '@/components/news-letter-section/NewsLetterSection'
import PricingSection from '@/components/pricing-section/PricingSection'
import TestomonialSection from '@/components/testomonial-section/TestomonialSection'


export default function Home() {
  return (
    <Layout
      title='‌OfBytes - Build your Business with us'
      description='Helping you to build your business with our services.'
      image='https://images.unsplash.com/photo-1616166330003-8b2b2b2b2b2b?dpr=2&auto=format&fit=crop&w=416&q=60'
      url='https://ofbytes.com'
    >
      <HeroSection
        title='‌Build your Business with us'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
        heroImage={<TeamIcon />}
        badge="Welcome to OfBytes"
      />
      <LogosSection />
      <PricingSection />
      <HeroSection
        title="We are here to help you"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        heroImage={<BusinessIcon />}
      />
      <HeroSection
        variant="reverse"
        title="Together we can achieve your goals"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        heroImage={<GoalIcon />}
      />
      <TestomonialSection />
      <HowItWorksSection />
      <NewsLetterSection />
    </Layout>
  )
};