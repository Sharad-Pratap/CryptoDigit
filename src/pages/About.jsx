import React from 'react';
import { Box, Container, Heading, Text, Stack, VStack, useColorModeValue } from '@chakra-ui/react';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';

export default function About() {
  return (
    <Box>
      <Box bg={useColorModeValue('brand.600', 'brand.800')} color="white" py={16}>
        <Container maxW="container.xl">
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl">About CryptoFinance</Heading>
            <Text fontSize="xl" maxW="2xl">
              We're on a mission to make cryptocurrency trading accessible, secure, and profitable for everyone.
            </Text>
          </VStack>
        </Container>
      </Box>
      
      <AboutSection />
      
      <Box py={16} bg={useColorModeValue('white', 'dark.900')}>
        <Container maxW="container.xl">
          <Stack spacing={8} textAlign="center" mb={10}>
            <Heading>Our Vision</Heading>
            <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.400')} maxW="3xl" mx="auto">
              We envision a world where digital assets are as accessible and easy to use as traditional financial 
              services, but with the added benefits of blockchain technology: transparency, security, and global access.
            </Text>
          </Stack>
        </Container>
      </Box>
      
      <TeamSection />
    </Box>
  );
} 