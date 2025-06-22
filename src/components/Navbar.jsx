import { useState, useEffect } from 'react';
import { 
  Box, 
  Flex, 
  Text, 
  IconButton, 
  Stack, 
  Collapse, 
  useColorModeValue, 
  useDisclosure,
  Container,
  Link,
  HStack
} from '@chakra-ui/react';
import { 
  HamburgerIcon, 
  CloseIcon
} from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box 
      position="sticky"
      top="0"
      zIndex="999"
      bg={useColorModeValue('white', 'dark.900')}
      boxShadow={isScrolled ? 'md' : 'none'}
      transition="all 0.3s ease"
    >
      <Container maxW="container.xl">
        <Flex
          minH="70px"
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={'center'}
        >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} align="center">
            <RouterLink to="/">
              <Text
                textAlign={{ base: 'center', md: 'left' }}
                fontFamily={'heading'}
                fontWeight="bold"
                color="brand.500"
                fontSize="xl"
              >
                CryptoFinance
              </Text>
            </RouterLink>

            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Container>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('brand.500', 'white');

  return (
    <HStack spacing={6}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link
            as={RouterLink}
            p={2}
            to={navItem.href ?? '#'}
            fontSize={'sm'}
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: 'none',
              color: linkHoverColor,
            }}>
            {navItem.label}
          </Link>
        </Box>
      ))}
    </HStack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'dark.900')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }) => {
  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={RouterLink}
        to={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

// Updated navigation items
const NAV_ITEMS = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]; 