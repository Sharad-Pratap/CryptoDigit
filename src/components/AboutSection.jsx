import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Stack,
  Image,
  Icon,
  useColorModeValue,
  HStack,
  VStack,
  Circle,
} from '@chakra-ui/react';
import { FaCheckCircle, FaChartLine, FaShieldAlt, FaGlobeAmericas } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <Box bg={useColorModeValue('gray.50', 'dark.900')} py={20}>
      <Container maxW="container.xl">
        <Stack 
          direction={{ base: 'column', lg: 'row' }} 
          spacing={{ base: 10, lg: 20 }}
          align="center"
        >
          {/* Left side - Image with floating elements */}
          <Box position="relative" flex={1} h={{ base: '400px', lg: '500px' }} w="full">
            {/* Main image */}
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              width="80%"
              height="80%"
              rounded="2xl"
              overflow="hidden"
              boxShadow="2xl"
            >
              <Image
                src="https://images.pexels.com/photos/7567432/pexels-photo-7567432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="About CryptoFinance"
                objectFit="cover"
                w="100%"
                h="100%"
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
            
            {/* Decorative elements */}
            <Circle
              position="absolute"
              top="15%"
              left="10%"
              size="120px"
              bg="accent.500"
              opacity="0.2"
            />
            <Circle
              position="absolute"
              bottom="15%"
              right="10%"
              size="150px"
              bg="brand.500"
              opacity="0.3"
            />
            
            {/* Floating stats */}
            <Box
              position="absolute"
              top="5%"
              right="0%"
              bg="white"
              rounded="lg"
              p={4}
              boxShadow="lg"
              maxW="200px"
              zIndex={2}
            >
              <HStack spacing={3}>
                <Circle size="40px" bg="brand.100">
                  <Icon as={FaChartLine} color="brand.500" />
                </Circle>
                <Box>
                  <Text fontWeight="bold" fontSize="lg">$2.4B+</Text>
                  <Text fontSize="sm">Trading Volume</Text>
                </Box>
              </HStack>
            </Box>
            
            <Box
              position="absolute"
              bottom="5%"
              left="0%"
              bg="white"
              rounded="lg"
              p={4}
              boxShadow="lg"
              maxW="200px"
            >
              <HStack spacing={3}>
                <Circle size="40px" bg="accent.100">
                  <Icon as={FaGlobeAmericas} color="accent.500" />
                </Circle>
                <Box>
                  <Text fontWeight="bold" fontSize="lg">180+</Text>
                  <Text fontSize="sm">Countries Supported</Text>
                </Box>
              </HStack>
            </Box>
          </Box>
          
          {/* Right side - Text content */}
          <Stack flex={1} spacing={8}>
            <Box>
              <Text 
                color="brand.500" 
                fontWeight="semibold" 
                fontSize="sm" 
                textTransform="uppercase" 
                letterSpacing="wider"
              >
                About Us
              </Text>
              <Heading mt={2} mb={4} fontSize={{ base: '3xl', md: '4xl' }}>
                The Future of <Text as="span" color="accent.500">Crypto Finance</Text>
              </Heading>
              <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.400')}>
                At CryptoFinance, we're building the next generation of financial infrastructure
                powered by blockchain technology. Our platform combines cutting-edge security with
                intuitive design to make cryptocurrency accessible to everyone.
              </Text>
            </Box>
            
            <VStack spacing={5} align="stretch">
              <HStack align="start" spacing={4}>
                <Circle size="40px" bg="brand.50">
                  <Icon as={FaCheckCircle} color="brand.500" w={5} h={5} />
                </Circle>
                <Box>
                  <Text fontWeight="bold" fontSize="lg">Industry-Leading Security</Text>
                  <Text color={useColorModeValue('gray.600', 'gray.400')}>
                    We implement the most rigorous security standards in the industry,
                    with 95% of assets stored in cold storage and insurance against cyber attacks.
                  </Text>
                </Box>
              </HStack>
              
              <HStack align="start" spacing={4}>
                <Circle size="40px" bg="brand.50">
                  <Icon as={FaCheckCircle} color="brand.500" w={5} h={5} />
                </Circle>
                <Box>
                  <Text fontWeight="bold" fontSize="lg">Transparent Pricing</Text>
                  <Text color={useColorModeValue('gray.600', 'gray.400')}>
                    Our fee structure is clear and competitive, with no hidden costs.
                    We believe in complete transparency in all our operations.
                  </Text>
                </Box>
              </HStack>
              
              <HStack align="start" spacing={4}>
                <Circle size="40px" bg="brand.50">
                  <Icon as={FaCheckCircle} color="brand.500" w={5} h={5} />
                </Circle>
                <Box>
                  <Text fontWeight="bold" fontSize="lg">Regulatory Compliance</Text>
                  <Text color={useColorModeValue('gray.600', 'gray.400')}>
                    We work with regulators globally to ensure our platform meets the
                    highest standards of compliance and legal requirements.
                  </Text>
                </Box>
              </HStack>
            </VStack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
} 