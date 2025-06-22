import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Icon,
  useColorModeValue,
  Image,
  HStack,
  Circle,
  Tag,
} from '@chakra-ui/react';
import { 
  FaBitcoin, 
  FaExchangeAlt, 
  FaChartPie, 
  FaShieldAlt,
  FaArrowRight 
} from 'react-icons/fa';

// Map of icon types to components
const IconMap = {
  transaction: FaBitcoin,
  exchange: FaExchangeAlt,
  investment: FaChartPie,
  security: FaShieldAlt,
};

export default function ServiceCard({ title, description, icon, imageUrl, tags = [] }) {
  // Use the mapped icon or default to FaBitcoin if not found
  const IconComponent = IconMap[icon] || FaBitcoin;
  
  return (
    <Box
      maxW="100%"
      bg={useColorModeValue('white', 'dark.800')}
      border="1px solid"
      borderColor={useColorModeValue('gray.200', 'dark.700')}
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="lg"
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: 'xl',
        borderColor: 'brand.500',
      }}
    >
      {/* Image section */}
      <Box position="relative" h="200px" overflow="hidden">
        <Image
          src={imageUrl || "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}
          alt={title}
          objectFit="cover"
          w="100%"
          h="100%"
          transition="transform 0.5s"
          _groupHover={{ transform: 'scale(1.05)' }}
        />
        
        {/* Gradient overlay */}
        <Box
          position="absolute"
          top="0"
          bottom="0"
          left="0"
          right="0"
          bg="linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)"
        />
        
        {/* Tags */}
        <HStack position="absolute" top="4" left="4" spacing={2}>
          {tags.map((tag, index) => (
            <Tag 
              key={index} 
              size="sm" 
              bg="brand.500" 
              color="white" 
              fontWeight="medium"
              borderRadius="full"
            >
              {tag}
            </Tag>
          ))}
        </HStack>
        
        {/* Icon circle */}
        <Circle
          position="absolute"
          bottom="-20px"
          right="20px"
          size="56px"
          bg="accent.500"
          color="white"
          boxShadow="md"
        >
          <Icon as={IconComponent} w={6} h={6} />
        </Circle>
      </Box>
      
      {/* Content section */}
      <Stack p={6}>
        <Heading as="h3" size="md" fontWeight="bold" mb={2}>
          {title}
        </Heading>
        
        <Text fontSize="md" color={useColorModeValue('gray.600', 'gray.400')} mb={4}>
          {description}
        </Text>
        
        <HStack color="brand.500" fontWeight="semibold" spacing={1} alignItems="center">
          <Text>Learn More</Text>
          <Icon as={FaArrowRight} w={3} h={3} />
        </HStack>
      </Stack>
    </Box>
  );
} 