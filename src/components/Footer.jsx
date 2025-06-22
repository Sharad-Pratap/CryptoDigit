import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Heading,
  Button,
  HStack,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import { Link as RouterLink } from 'react-router-dom';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'600'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'dark.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'container.xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Text fontSize="xl" fontWeight="bold" color="brand.500">
                CryptoFinance
              </Text>
            </Box>
            <Text fontSize={'sm'}>
              A modern cryptocurrency platform with advanced tools for trading, tracking, and managing your digital assets.
            </Text>
            <HStack spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'LinkedIn'} href={'#'}>
                <FaLinkedin />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={'Telegram'} href={'#'}>
                <FaTelegram />
              </SocialButton>
            </HStack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link as={RouterLink} to={'/about'}>About Us</Link>
            <Link as={RouterLink} to={'/team'}>Team</Link>
            <Link as={RouterLink} to={'/blog'}>Blog</Link>
            <Link as={RouterLink} to={'/careers'}>Careers</Link>
            <Link as={RouterLink} to={'/contact'}>Contact</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link as={RouterLink} to={'/help-center'}>Help Center</Link>
            <Link as={RouterLink} to={'/security'}>Security</Link>
            <Link as={RouterLink} to={'/legal'}>Legal</Link>
            <Link as={RouterLink} to={'/privacy'}>Privacy Policy</Link>
            <Link as={RouterLink} to={'/status'}>Status</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('white', 'whiteAlpha.100')}
                border={1}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg="brand.500"
                color="white"
                _hover={{
                  bg: 'brand.600',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
            <Text fontSize="sm" mt={2}>
              Subscribe to our newsletter for updates on crypto news, market trends, and platform features.
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'container.xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© {new Date().getFullYear()} CryptoFinance. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <Link as={RouterLink} to={'/terms'}>Terms of Service</Link>
            <Link as={RouterLink} to={'/privacy'}>Privacy Policy</Link>
            <Link as={RouterLink} to={'/cookies'}>Cookie Policy</Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
} 