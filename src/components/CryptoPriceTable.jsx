import { useState } from 'react';
import {
  Box,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Badge,
  Image,
  Heading,
  HStack,
  Button,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  useColorModeValue,
  Container,
} from '@chakra-ui/react';
import { FiSearch, FiArrowUp, FiArrowDown } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';

// Sample data (in a real app, this would come from an API)
const cryptoData = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    image: 'https://assets.coingecko.com/coins/images/1/standard/bitcoin.png',
    currentPrice: 65432.21,
    priceChangePercentage24h: 1.23,
    marketCap: 1243567890000,
    volume24h: 37865432100,
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    image: 'https://assets.coingecko.com/coins/images/279/standard/ethereum.png',
    currentPrice: 3456.78,
    priceChangePercentage24h: -2.45,
    marketCap: 456789012345,
    volume24h: 14567890123,
  },
  {
    id: 'solana',
    name: 'Solana',
    symbol: 'SOL',
    image: 'https://assets.coingecko.com/coins/images/4128/standard/solana.png',
    currentPrice: 123.45,
    priceChangePercentage24h: 5.67,
    marketCap: 56789012345,
    volume24h: 3456789012,
  },
  {
    id: 'cardano',
    name: 'Cardano',
    symbol: 'ADA',
    image: 'https://assets.coingecko.com/coins/images/975/standard/cardano.png',
    currentPrice: 0.78,
    priceChangePercentage24h: 0.34,
    marketCap: 23456789012,
    volume24h: 1234567890,
  },
  {
    id: 'ripple',
    name: 'XRP',
    symbol: 'XRP',
    image: 'https://assets.coingecko.com/coins/images/44/standard/xrp-symbol-white-128.png',
    currentPrice: 0.56,
    priceChangePercentage24h: -1.23,
    marketCap: 34567890123,
    volume24h: 2345678901,
  },
  {
    id: 'polkadot',
    name: 'Polkadot',
    symbol: 'DOT',
    image: 'https://assets.coingecko.com/coins/images/12171/standard/polkadot.png',
    currentPrice: 12.34,
    priceChangePercentage24h: 3.45,
    marketCap: 12345678901,
    volume24h: 987654321,
  },
];

export default function CryptoPriceTable() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter the data based on search query
  const filteredData = cryptoData.filter((crypto) => 
    crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Format large numbers with commas and abbreviate if necessary
  const formatNumber = (num) => {
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`;
    return `$${num.toFixed(2)}`;
  };

  return (
    <Container maxW="container.xl" py={10}>
      <Box mb={8}>
        <Heading as="h2" size="xl" mb={4}>
          Top Cryptocurrencies
        </Heading>
        <Text color={useColorModeValue('gray.600', 'gray.400')}>
          Stay updated with current prices and market trends for the top digital assets
        </Text>
        
        <Flex justifyContent="space-between" alignItems="center" mt={6}>
          <HStack>
            <Button size="sm" colorScheme="brand" variant="solid">
              All
            </Button>
            <Button size="sm" variant="ghost">
              DeFi
            </Button>
            <Button size="sm" variant="ghost">
              NFTs
            </Button>
            <Button size="sm" variant="ghost">
              Metaverse
            </Button>
          </HStack>
          
          <InputGroup maxW="xs">
            <Input 
              placeholder="Search cryptocurrency" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <InputRightElement>
              <IconButton 
                icon={<FiSearch />}
                variant="ghost"
                aria-label="Search"
              />
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Box>

      <Box 
        borderRadius="xl" 
        overflow="hidden" 
        boxShadow="md"
        bg={useColorModeValue('white', 'dark.800')}
      >
        <TableContainer>
          <Table variant="simple">
            <Thead bg={useColorModeValue('gray.50', 'dark.700')}>
              <Tr>
                <Th width="40px">#</Th>
                <Th>Name</Th>
                <Th isNumeric>Price</Th>
                <Th isNumeric>24h %</Th>
                <Th isNumeric>Market Cap</Th>
                <Th isNumeric>Volume (24h)</Th>
                <Th width="100px"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredData.map((crypto, index) => (
                <Tr key={crypto.id} _hover={{ bg: useColorModeValue('gray.50', 'dark.700') }}>
                  <Td>{index + 1}</Td>
                  <Td>
                    <HStack>
                      <Image src={crypto.image} alt={crypto.name} boxSize="24px" />
                      <Text fontWeight="medium">{crypto.name}</Text>
                      <Text color="gray.500" fontSize="sm">{crypto.symbol}</Text>
                    </HStack>
                  </Td>
                  <Td isNumeric fontWeight="medium">
                    ${crypto.currentPrice.toLocaleString()}
                  </Td>
                  <Td isNumeric>
                    <Badge 
                      colorScheme={crypto.priceChangePercentage24h >= 0 ? 'green' : 'red'} 
                      variant="subtle" 
                      px={2} 
                      py={1}
                      borderRadius="md"
                    >
                      <Flex alignItems="center">
                        {crypto.priceChangePercentage24h >= 0 ? 
                          <FiArrowUp size={12} /> : 
                          <FiArrowDown size={12} />
                        }
                        <Text ml={1}>
                          {Math.abs(crypto.priceChangePercentage24h).toFixed(2)}%
                        </Text>
                      </Flex>
                    </Badge>
                  </Td>
                  <Td isNumeric>{formatNumber(crypto.marketCap)}</Td>
                  <Td isNumeric>{formatNumber(crypto.volume24h)}</Td>
                  <Td>
                    <Button 
                      as={RouterLink} 
                      to={`/crypto/${crypto.id}`} 
                      size="sm" 
                      variant="outline" 
                      colorScheme="brand"
                    >
                      Details
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        
        <Flex justify="center" py={4}>
          <Button colorScheme="brand" variant="outline" size="md">
            View All Coins
          </Button>
        </Flex>
      </Box>
    </Container>
  );
} 