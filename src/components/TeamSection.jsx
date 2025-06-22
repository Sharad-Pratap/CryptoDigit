import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  useColorModeValue,
  Image,
  HStack,
  VStack,
  Stack,
  Icon,
  Link,
  Circle,
  Flex,
} from '@chakra-ui/react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Alex Morgan',
    position: 'CEO & Founder',
    bio: 'Former VP at a major financial institution with over 15 years of experience in traditional finance and blockchain technology.',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'Sarah Chen',
    position: 'CTO',
    bio: 'Blockchain expert with a Ph.D. in Cryptography. Led engineering teams at multiple successful tech startups.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'Michael Rodriguez',
    position: 'Head of Security',
    bio: 'Cybersecurity specialist with experience at top tech companies. Expert in securing digital assets and blockchain infrastructure.',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'Lisa Johnson',
    position: 'Product Manager',
    bio: 'Product strategist with a passion for creating intuitive user experiences in the cryptocurrency space.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
];

const TeamMemberCard = ({ member }) => {
  const socialIconColor = useColorModeValue('brand.700', 'brand.300');
  const bgGradient = useColorModeValue(
    'linear(to-br, white, gray.50)',
    'linear(to-br, dark.800, dark.900)'
  );

  return (
    <Box
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="lg"
      bg={useColorModeValue('white', 'dark.800')}
      position="relative"
      transition="transform 0.3s"
      _hover={{ transform: 'translateY(-5px)' }}
    >
      <Flex direction="column" height="100%">
        {/* Image container with overlay gradient */}
        <Box position="relative" height="280px" width="100%" overflow="hidden">
          <Image
            src={member.image}
            alt={member.name}
            objectFit="cover"
            width="100%"
            height="100%"
            transition="transform 0.5s"
            _groupHover={{ transform: 'scale(1.05)' }}
          />
          
          {/* Curved bottom overlay */}
          <Box
            position="absolute"
            bottom="0"
            left="0"
            right="0"
            height="60px"
            bgGradient={bgGradient}
            clipPath="ellipse(75% 60% at 50% 100%)"
          />
        </Box>
        
        {/* Content */}
        <VStack p={6} spacing={4} flex="1" bgGradient={bgGradient}>
          <VStack spacing={1}>
            <Heading as="h3" size="md" fontWeight="bold">
              {member.name}
            </Heading>
            <Text color="accent.500" fontWeight="medium" fontSize="sm">
              {member.position}
            </Text>
          </VStack>
          
          <Text color={useColorModeValue('gray.600', 'gray.400')} textAlign="center" fontSize="sm">
            {member.bio}
          </Text>
          
          <HStack spacing={4} pt={2}>
            <Link href={member.social.linkedin} isExternal>
              <Circle 
                size="35px"
                bg={useColorModeValue('gray.100', 'dark.700')}
                color={socialIconColor}
                _hover={{ bg: 'brand.500', color: 'white' }}
                transition="all 0.3s"
              >
                <Icon as={FaLinkedin} w={4} h={4} />
              </Circle>
            </Link>
            <Link href={member.social.twitter} isExternal>
              <Circle 
                size="35px"
                bg={useColorModeValue('gray.100', 'dark.700')}
                color={socialIconColor}
                _hover={{ bg: 'brand.500', color: 'white' }}
                transition="all 0.3s"
              >
                <Icon as={FaTwitter} w={4} h={4} />
              </Circle>
            </Link>
            <Link href={member.social.github} isExternal>
              <Circle 
                size="35px"
                bg={useColorModeValue('gray.100', 'dark.700')}
                color={socialIconColor}
                _hover={{ bg: 'brand.500', color: 'white' }}
                transition="all 0.3s"
              >
                <Icon as={FaGithub} w={4} h={4} />
              </Circle>
            </Link>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default function TeamSection() {
  return (
    <Box py={16} bg={useColorModeValue('gray.50', 'dark.900')}>
      <Container maxW="container.xl">
        <Stack spacing={3} textAlign="center" mb={12}>
          <Text
            color="brand.500"
            fontWeight="semibold"
            fontSize="sm"
            textTransform="uppercase"
            letterSpacing="wider"
          >
            Our Team
          </Text>
          <Heading as="h2" size="xl" fontWeight="bold">
            Meet the <Text as="span" color="accent.500">Experts</Text> Behind CryptoFinance
          </Heading>
          <Text 
            fontSize="lg" 
            color={useColorModeValue('gray.600', 'gray.400')}
            maxW="3xl"
            mx="auto"
          >
            Our team brings together decades of experience in finance, blockchain technology, 
            and cybersecurity to build the future of cryptocurrency finance.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} px={{ base: 4, md: 0 }}>
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </SimpleGrid>
        
        <Box textAlign="center" mt={16}>
          <Text fontSize="lg" mb={3}>
            Interested in joining our team?
          </Text>
          <Link 
            href="/careers" 
            color="brand.500" 
            fontWeight="semibold"
            fontSize="lg"
            _hover={{ textDecoration: 'underline' }}
          >
            View Open Positions
          </Link>
        </Box>
      </Container>
    </Box>
  );
} 