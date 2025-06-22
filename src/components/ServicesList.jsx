import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  useColorModeValue,
  Button,
  Flex,
  Stack,
  Icon,
  VStack,
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import ServiceCard from './ServiceCard';
import { Link as RouterLink } from 'react-router-dom';

// Service data
const services = [
  {
    title: 'Crypto Trading',
    description: 'Trade a wide range of cryptocurrencies on our secure platform with advanced trading tools and real-time market data.',
    icon: 'exchange',
    imageUrl: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Trading', 'Exchange'],
  },
  {
    title: 'Secure Wallet',
    description: 'Store your digital assets securely with our multi-signature, cold storage wallet solution backed by the latest security technologies.',
    icon: 'security',
    imageUrl: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Security', 'Storage'],
  },
  {
    title: 'Investment Solutions',
    description: 'Access professionally managed cryptocurrency investment products designed for both long-term growth and passive income generation.',
    icon: 'investment',
    imageUrl: 'https://images.unsplash.com/photo-1616261167032-b16fd69e7ee5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Investment', 'Portfolio'],
  },
  {
    title: 'Payment Processing',
    description: 'Integrate cryptocurrency payment solutions into your business with low fees, fast settlement, and global transaction capabilities.',
    icon: 'transaction',
    imageUrl: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['Payments', 'Business'],
  },
];

export default function ServicesList() {
  return (
    <Box py={16} bg={useColorModeValue('white', 'dark.900')}>
      <Container maxW="container.xl">
        <Stack spacing={3} textAlign="center" mb={10}>
          <Text
            color="brand.500"
            fontWeight="semibold"
            fontSize="sm"
            textTransform="uppercase"
            letterSpacing="wider"
          >
            Our Services
          </Text>
          <Heading as="h2" size="xl" fontWeight="bold">
            Comprehensive <Text as="span" color="accent.500">Crypto</Text> Solutions
          </Heading>
          <Text 
            fontSize="lg" 
            color={useColorModeValue('gray.600', 'gray.400')}
            maxW="3xl"
            mx="auto"
          >
            We provide a full suite of cryptocurrency services designed to meet the needs of individual
            investors, traders, and businesses in the blockchain ecosystem.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mb={12}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              imageUrl={service.imageUrl}
              tags={service.tags}
            />
          ))}
        </SimpleGrid>

        <VStack spacing={6} align="center" mt={12}>
          <Text fontSize="lg" fontWeight="medium">
            Looking for custom cryptocurrency solutions?
          </Text>
          <Button
            as={RouterLink}
            to="/services"
            size="lg"
            rightIcon={<FaArrowRight />}
            colorScheme="brand"
            rounded="full"
            px={8}
          >
            Explore All Services
          </Button>
        </VStack>
      </Container>
    </Box>
  );
} 