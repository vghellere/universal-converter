import { Box, Text, Link, Flex } from '@chakra-ui/react';

import Img from 'components/atoms/image';
import LogoImage from '@public/images/logo.svg';

const Header = () => (
  <Box bgColor='white' w='100%' maxW='100%' p={4}>
    <Flex justifyContent='space-between' alignItems='center'>
      <Link href='/'>
        <Flex justifyContent='space-between' alignItems='center'>
          <Box w='48px' h='48px'>
            <Img
              src={LogoImage}
              width='48px'
              height='48px'
              alt='Universal Converter'
              layout='fixed'
            />
          </Box>
          <Text ml={2} lineHeight='normal' fontSize={40} fontWeight={700}>
            Universal Converter
          </Text>
        </Flex>
      </Link>
    </Flex>
  </Box>
);

export default Header;
