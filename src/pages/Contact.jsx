import React, { useState } from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormErrorMessage,
  Select,
  Icon,
  useToast,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaGlobe } from 'react-icons/fa';

export default function Contact() {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;
    
    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
      isValid = false;
    }
    
    if (!formData.subject.trim()) {
      tempErrors.subject = 'Subject is required';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
      isValid = false;
    }
    
    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        toast({
          title: 'Message sent!',
          description: "We've received your message and will respond shortly.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    <Box bg={useColorModeValue('gray.50', 'dark.900')} py={10}>
      <Container maxW="container.xl" py={10}>
        <Stack 
          spacing={8}
          direction={{ base: 'column', lg: 'row' }}
          align={{ base: 'center', lg: 'flex-start' }}
        >
          <VStack
            flex={1}
            spacing={8}
            align="flex-start"
            maxW={{ base: 'full', lg: '400px' }}
            order={{ base: 2, lg: 1 }}
          >
            <Box>
              <Heading fontSize="3xl" mb={4}>Contact Us</Heading>
              <Text color={useColorModeValue('gray.600', 'gray.400')} fontSize="lg">
                Have questions about our platform or services? Get in touch with our team today.
              </Text>
            </Box>
            
            <VStack spacing={4} align="stretch" width="full">
              <HStack align="flex-start" spacing={4}>
                <Icon
                  as={FaMapMarkerAlt}
                  color="brand.500"
                  boxSize={6}
                  mt={1}
                />
                <VStack align="start" spacing={0}>
                  <Text fontWeight="bold">Address</Text>
                  <Text color={useColorModeValue('gray.600', 'gray.400')}>
                  302, gadhi colony,251001 <br />
                  Muzaffarnagar, India
                  </Text>
                </VStack>
              </HStack>
              
              <Divider />
              
              <HStack align="flex-start" spacing={4}>
                <Icon
                  as={FaPhone}
                  color="brand.500"
                  boxSize={6}
                  mt={1}
                />
                <VStack align="start" spacing={0}>
                  <Text fontWeight="bold">Phone</Text>
                  <Text color={useColorModeValue('gray.600', 'gray.400')}>
                    +1 (555) 123-4567
                  </Text>
                </VStack>
              </HStack>
              
              <Divider />
              
              <HStack align="flex-start" spacing={4}>
                <Icon
                  as={FaEnvelope}
                  color="brand.500"
                  boxSize={6}
                  mt={1}
                />
                <VStack align="start" spacing={0}>
                  <Text fontWeight="bold">Email</Text>
                  <Text color={useColorModeValue('gray.600', 'gray.400')}>
                  cryptodigit00@gmail.com
                  </Text>
                </VStack>
              </HStack>
              
              <Divider />
              
              <HStack align="flex-start" spacing={4}>
                <Icon
                  as={FaGlobe}
                  color="brand.500"
                  boxSize={6}
                  mt={1}
                />
                <VStack align="start" spacing={0}>
                  <Text fontWeight="bold">Hours</Text>
                  <Text color={useColorModeValue('gray.600', 'gray.400')}>
                    Monday - Friday: 9AM - 6PM<br />
                    Saturday: 10AM - 4PM<br />
                    Sunday: Closed
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          </VStack>
          
          <Box
            flex={1.5}
            p={8}
            bg={useColorModeValue('white', 'dark.800')}
            boxShadow="xl"
            borderRadius="xl"
            order={{ base: 1, lg: 2 }}
          >
            <VStack spacing={4} as="form" onSubmit={handleSubmit}>
              <Heading size="lg" mb={2}>Send Us a Message</Heading>
              
              <FormControl isInvalid={errors.name}>
                <FormLabel>Your Name</FormLabel>
                <InputGroup>
                  <InputLeftElement children={<Icon as={FaUser} color="gray.500" />} />
                  <Input 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe" 
                    focusBorderColor="brand.500"
                  />
                </InputGroup>
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>
              
              <FormControl isInvalid={errors.email}>
                <FormLabel>Email</FormLabel>
                <InputGroup>
                  <InputLeftElement children={<Icon as={FaEnvelope} color="gray.500" />} />
                  <Input 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com" 
                    focusBorderColor="brand.500"
                  />
                </InputGroup>
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              
              <FormControl isInvalid={errors.subject}>
                <FormLabel>Subject</FormLabel>
                <Select 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Select a subject" 
                  focusBorderColor="brand.500"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Account Issues">Account Issues</option>
                  <option value="Partnership Opportunity">Partnership Opportunity</option>
                  <option value="Other">Other</option>
                </Select>
                <FormErrorMessage>{errors.subject}</FormErrorMessage>
              </FormControl>
              
              <FormControl isInvalid={errors.message}>
                <FormLabel>Message</FormLabel>
                <Textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..." 
                  rows={6}
                  focusBorderColor="brand.500"
                />
                <FormErrorMessage>{errors.message}</FormErrorMessage>
              </FormControl>
              
              <Button
                type="submit"
                colorScheme="brand"
                size="lg"
                width="full"
                isLoading={isSubmitting}
                loadingText="Sending"
              >
                Send Message
              </Button>
            </VStack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
} 