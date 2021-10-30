import { Box, BoxProps } from '@chakra-ui/react';

const Card = ({ children, ...props }: BoxProps) => (
  <Box
    name='card'
    bgColor='white'
    w={['80%']}
    maxW='700px'
    p={10}
    borderRadius={12}
    borderColor='gray.200'
    borderStyle='solid'
    boxShadow='base'
    {...props}
  >
    {children}
  </Box>
);

export default Card;
