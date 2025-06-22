import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

export default function Hero() {
  return (
    <Box position="relative" overflow="hidden">
      {/* Background gradient */}
      <Box
        position="absolute"
        height="100%"
        width="100%"
        left="0"
        top="0"
        bgGradient="linear(to-br, brand.50, transparent)"
        opacity="0.5"
        zIndex="0"
      />

      <Container maxW="container.xl" position="relative" zIndex="1">
        <Stack
          align="center"
          spacing={{ base: 8, md: 10 }}
          py={{ base: 16, md: 20 }}
          direction={{ base: 'column', lg: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={700}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}>
                Modern Crypto Trading
              </Text>
              <br />
              <Text as={'span'} color={'brand.500'}>
                & Finance Platform
              </Text>
            </Heading>
            <Text color={useColorModeValue('gray.600', 'gray.300')} fontSize="lg">
              Trade, invest, and manage your digital assets all in one place. 
              Get real-time market insights, portfolio tracking, and advanced trading tools.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}>
              <Button
                as={RouterLink}
                to="/contact"
                rounded={'full'}
                size={'lg'}
                fontWeight={'bold'}
                px={6}
                colorScheme={'brand'}
                rightIcon={<FaArrowRight />}>
                Get Started
              </Button>
              <Button
                as={RouterLink}
                to="/contact"
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                variant="outline"
                borderWidth={2}>
                Contact Us
              </Button>
            </Stack>
            <Stack direction="row" spacing={4} align="center">
              <Flex
                align={'center'}
                justify={'center'}
                fontWeight={600}
                color={'brand.500'}
                bg={'brand.50'}
                rounded={'full'}
                width={8}
                height={8}>
                ✓
              </Flex>
              <Text fontWeight={600}>Secure & Regulated</Text>
              <Flex
                align={'center'}
                justify={'center'}
                fontWeight={600}
                color={'brand.500'}
                bg={'brand.50'}
                rounded={'full'}
                width={8}
                height={8}>
                ✓
              </Flex>
              <Text fontWeight={600}>24/7 Support</Text>
              <Flex
                align={'center'}
                justify={'center'}
                fontWeight={600}
                color={'brand.500'}
                bg={'brand.50'}
                rounded={'full'}
                width={8}
                height={8}>
                ✓
              </Flex>
              <Text fontWeight={600}>Low Fees</Text>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
            mt={{ base: 10, lg: 0 }}>
            <Box
              position={'relative'}
              height={{ base: '300px', md: '400px' }}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src="https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                fallback={
                  <Box
                    height="100%"
                    width="100%"
                    bg="gray.200"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text>Loading Image...</Text>
                  </Box>
                }
              />
            </Box>
          </Flex>
        </Stack>

        {/* Stats section */}
        <Flex
          direction={{ base: 'column', md: 'row' }}
          bg={'white'}
          p={8}
          rounded={'xl'}
          boxShadow={'lg'}
          mb={16}
          justify={'space-between'}
        >
          <Stack align={'center'} px={6} py={2}>
            <Text fontWeight={600} fontSize={'4xl'} color={'brand.500'}>2M+</Text>
            <Text fontSize={'md'} color={'gray.600'}>Active Users</Text>
          </Stack>
          <Stack align={'center'} px={6} py={2}>
            <Text fontWeight={600} fontSize={'4xl'} color={'brand.500'}>150+</Text>
            <Text fontSize={'md'} color={'gray.600'}>Cryptocurrencies</Text>
          </Stack>
          <Stack align={'center'} px={6} py={2}>
            <Text fontWeight={600} fontSize={'4xl'} color={'brand.500'}>$1B+</Text>
            <Text fontSize={'md'} color={'gray.600'}>Daily Volume</Text>
          </Stack>
          <Stack align={'center'} px={6} py={2}>
            <Text fontWeight={600} fontSize={'4xl'} color={'brand.500'}>99.9%</Text>
            <Text fontSize={'md'} color={'gray.600'}>Uptime</Text>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
} 