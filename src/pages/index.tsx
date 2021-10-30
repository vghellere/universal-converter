import { Text, Flex, Container, Link } from '@chakra-ui/react';
import type { NextPage } from 'next';

import Header from 'components/molecules/header';

const Home: NextPage = () => (
  <>
    <Header />
    <Container bgColor='gray.100' maxW='100%' h='100%'>
      <Flex
        flexDir='column'
        justifyContent='center'
        alignItems='center'
        py={10}
      >
        <Text fontSize={20}>
          Easily convert from{' '}
          <Link
            href='temperature/fahrenheit-to-celsius'
            textDecoration='underline'
          >
            Fahrenheit to Celsius
          </Link>
        </Text>
      </Flex>
    </Container>
  </>
);

export default Home;
