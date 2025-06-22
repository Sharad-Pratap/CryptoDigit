import React from 'react';
import { Box } from '@chakra-ui/react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import Features from '../components/Features';
import CryptoPriceTable from '../components/CryptoPriceTable';
import ServicesList from '../components/ServicesList';
import TeamSection from '../components/TeamSection';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <Box>
      <Hero />
      <CryptoPriceTable />
      <AboutSection />
      <ServicesList />
      <Features />
      {/* <TeamSection /> */}
      <CTA />
    </Box>
  );
} 