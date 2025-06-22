import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  useColorModeValue,
  Flex,
  Image,
} from '@chakra-ui/react';
import { FaChartLine, FaWallet, FaLock, FaChartBar, FaExchangeAlt, FaBell } from 'react-icons/fa';

// Feature components with icon
const Feature = ({ title, text, icon }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'dark.800')}
      boxShadow={'md'}
      rounded={'xl'}
      p={6}
      transition={'transform 0.3s ease'}
      _hover={{ transform: 'translateY(-5px)' }}
    >
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'brand.500'}
        mb={4}>
        <Icon as={icon} w={8} h={8} />
      </Flex>
      <Text fontWeight={600} fontSize={'lg'} mb={2}>
        {title}
      </Text>
      <Text color={useColorModeValue('gray.600', 'gray.400')}>
        {text}
      </Text>
    </Stack>
  );
};

export default function Features() {
  return (
    <Box py={16} bg={useColorModeValue('gray.50', 'dark.900')}>
      <Container maxW={'container.xl'}>
        <Stack spacing={4} as={Container} maxW={'4xl'} textAlign={'center'} mb={12}>
          <Heading fontSize={{ base: '3xl', md: '4xl' }} color={'brand.500'}>
            Advanced Trading Features
          </Heading>
          <Text color={useColorModeValue('gray.600', 'gray.400')} fontSize={'xl'}>
            Our platform offers a comprehensive suite of tools for both beginners and advanced traders.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <Feature
            icon={FaChartLine}
            title={'Real-Time Analytics'}
            text={
              'Get up-to-date market analytics with interactive charts and indicators to make informed trading decisions.'
            }
          />
          <Feature
            icon={FaExchangeAlt}
            title={'Instant Exchanges'}
            text={
              'Trade cryptocurrencies with low fees and instant confirmations across multiple blockchain networks.'
            }
          />
          <Feature
            icon={FaWallet}
            title={'Secure Wallet'}
            text={
              'Store your digital assets securely with our multi-signature wallets and cold storage options.'
            }
          />
          <Feature
            icon={FaBell}
            title={'Price Alerts'}
            text={
              'Set custom alerts for price movements, market trends, and trading opportunities.'
            }
          />
          <Feature
            icon={FaChartBar}
            title={'Portfolio Tracking'}
            text={
              'Track your portfolio performance with detailed analytics, profit/loss calculations, and tax reporting.'
            }
          />
          <Feature
            icon={FaLock}
            title={'Enhanced Security'}
            text={
              'Protect your assets with two-factor authentication, biometric verification, and advanced encryption.'
            }
          />
        </SimpleGrid>

        {/* Advanced Trading Section */}
        <Stack direction={{ base: 'column', md: 'row' }} spacing={10} mt={20} align="center">
          <Box flex={1}>
            <Heading size="lg" mb={4}>
              Advanced Trading Platform
            </Heading>
            <Text color={useColorModeValue('gray.600', 'gray.400')} mb={5}>
              Our platform features professional-grade trading tools with customizable charts, multiple order types, and advanced technical analysis indicators.
            </Text>
            <VStack align="start" spacing={4}>
              <HStack>
                <Icon as={FaChartLine} color="brand.500" />
                <Text fontWeight="medium">Multiple Chart Types</Text>
              </HStack>
              <HStack>
                <Icon as={FaExchangeAlt} color="brand.500" />
                <Text fontWeight="medium">Limit, Market, and Stop Orders</Text>
              </HStack>
              <HStack>
                <Icon as={FaChartBar} color="brand.500" />
                <Text fontWeight="medium">100+ Technical Indicators</Text>
              </HStack>
              <HStack>
                <Icon as={FaWallet} color="brand.500" />
                <Text fontWeight="medium">Low Trading Fees</Text>
              </HStack>
            </VStack>
          </Box>
          <Box flex={1} rounded="lg" overflow="hidden" boxShadow="2xl">
            <Image
              alt={'Trading Platform Interface'}
              src="https://images.unsplash.com/photo-1640340434855-6084b1f4901c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              objectFit="cover"
              width="100%"
            />
          </Box>
        </Stack>

        {/* Mobile App Section */}
        <Stack direction={{ base: 'column', md: 'row' }} spacing={10} mt={20} align="center">
          <Box flex={1} order={{ base: 1, md: 2 }}>
            <Heading size="lg" mb={4}>
              Trade On The Go
            </Heading>
            <Text color={useColorModeValue('gray.600', 'gray.400')} mb={5}>
              Access our full suite of cryptocurrency tools from anywhere with our powerful mobile application.
            </Text>
            <VStack align="start" spacing={4}>
              <HStack>
                <Icon as={FaWallet} color="brand.500" />
                <Text fontWeight="medium">Mobile Wallet Management</Text>
              </HStack>
              <HStack>
                <Icon as={FaBell} color="brand.500" />
                <Text fontWeight="medium">Real-time Price Alerts</Text>
              </HStack>
              <HStack>
                <Icon as={FaExchangeAlt} color="brand.500" />
                <Text fontWeight="medium">Trade On Multiple Exchanges</Text>
              </HStack>
              <HStack>
                <Icon as={FaLock} color="brand.500" />
                <Text fontWeight="medium">Biometric Authentication</Text>
              </HStack>
            </VStack>
          </Box>
          <Box flex={1} rounded="lg" overflow="hidden" boxShadow="2xl" order={{ base: 2, md: 1 }}>
            <Image
              alt={'Mobile App Interface'}
              src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              objectFit="cover"
              width="100%"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
} 