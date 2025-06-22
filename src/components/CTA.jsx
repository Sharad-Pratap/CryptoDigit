import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  Container,
  SimpleGrid,
  Icon,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { FaUserPlus, FaLock, FaCoins, FaChartLine } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

export default function CTA() {
  return (
    <Box bg={useColorModeValue('brand.500', 'brand.600')}>
      <Container maxW={'container.xl'} py={16} position="relative" zIndex="1">
        {/* Background gradient overlay */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bgGradient="linear(to-r, brand.500, accent.500)"
          opacity="0.9"
          zIndex="-1"
        />

        <Stack
          textAlign={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 10, md: 14 }}
          color="white">
          <Heading
            fontWeight={700}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
            lineHeight={'110%'}>
            Start Trading Cryptocurrency <br />
            <Text as={'span'} color={'white'}>
              in Minutes
            </Text>
          </Heading>
          <Text color="whiteAlpha.900" fontSize={{ base: 'lg', md: 'xl' }} maxW={'3xl'} mx="auto">
            Join thousands of traders and investors who trust our platform for their cryptocurrency 
            trading needs. Sign up today and get access to 150+ cryptocurrencies, advanced trading 
            tools, and 24/7 customer support.
          </Text>
          <Stack spacing={6} direction={{ base: 'column', sm: 'row' }} justify="center">
            <Button
              as={RouterLink}
              to="/signup"
              rounded={'full'}
              px={6}
              py={3}
              bg={'white'}
              color={'brand.500'}
              _hover={{ bg: 'gray.100' }}
              size="lg"
              fontSize="md"
              fontWeight="bold">
              Create Free Account
            </Button>
            <Button
              as={RouterLink}
              to="/markets"
              rounded={'full'}
              px={6}
              variant={'outline'}
              colorScheme="whiteAlpha"
              size="lg"
              fontSize="md"
              fontWeight="bold">
              Explore Markets
            </Button>
          </Stack>

          {/* Steps to get started */}
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10} mt={10}>
            <VStack>
              <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={'whiteAlpha.300'}
                mb={1}
              >
                <Icon as={FaUserPlus} w={8} h={8} />
              </Flex>
              <Text fontWeight={600} fontSize={'lg'}>
                1. Create Account
              </Text>
              <Text opacity={0.8} fontSize="sm">
                Sign up in less than 5 minutes
              </Text>
            </VStack>
            <VStack>
              <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={'whiteAlpha.300'}
                mb={1}
              >
                <Icon as={FaLock} w={8} h={8} />
              </Flex>
              <Text fontWeight={600} fontSize={'lg'}>
                2. Verify Identity
              </Text>
              <Text opacity={0.8} fontSize="sm">
                Complete our secure verification process
              </Text>
            </VStack>
            <VStack>
              <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={'whiteAlpha.300'}
                mb={1}
              >
                <Icon as={FaCoins} w={8} h={8} />
              </Flex>
              <Text fontWeight={600} fontSize={'lg'}>
                3. Fund Account
              </Text>
              <Text opacity={0.8} fontSize="sm">
                Deposit crypto or fiat currency
              </Text>
            </VStack>
            <VStack>
              <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={'whiteAlpha.300'}
                mb={1}
              >
                <Icon as={FaChartLine} w={8} h={8} />
              </Flex>
              <Text fontWeight={600} fontSize={'lg'}>
                4. Start Trading
              </Text>
              <Text opacity={0.8} fontSize="sm">
                Buy and sell cryptocurrencies
              </Text>
            </VStack>
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
} 