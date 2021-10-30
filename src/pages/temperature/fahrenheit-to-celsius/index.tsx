import { useState, useEffect } from 'react';
import {
  Heading,
  Container,
  Flex,
  Text,
  Divider,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Card from 'components/molecules/card';

const FahrenheitToCelsius: NextPage = () => {
  const [value, setValue] = useState('');
  const [convertedValue, setConvertedValue] = useState('');

  const convertValue = (originalValue: string) => {
    const valueFloat = parseFloat(originalValue);
    const finalValue = (valueFloat - 32) / 1.8;

    return finalValue.toFixed(2);
  };

  useEffect(() => {
    setConvertedValue(convertValue(value));
  }, [value]);

  return (
    <>
      <NextSeo
        title='Fahrenheit to Celsius - ºF to ºC conversion - Universal Converter'
        description='Fahrenheit to Celsius (°F to °C) conversion calculator, temperature conversions, tables and how to.'
        canonical='https://www.universalconverter.org/temperature/fahrenheit-to-celsius'
      />
      <Container bgColor='gray.50' maxW='100%'>
        <Flex
          justifyContent='center'
          alignItems='center'
          flexDir='column'
          py={10}
        >
          <Card>
            <Flex flexDir='column' alignItems='center'>
              <Heading as='h1' color='gray.700' textAlign='center'>
                Fahrenheit to Celsius
              </Heading>
              <NumberInput
                bgColor='white'
                color='gray.700'
                maxW='360px'
                w='100%'
                mt={8}
                onChange={(valueString) => setValue(valueString)}
              >
                <NumberInputField placeholder='ºF' />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              {convertedValue !== 'NaN' && (
                <Heading
                  as='h3'
                  fontSize={30}
                  color='gray.700'
                  opacity='0.7'
                  mt={6}
                >
                  {value} ºF = {convertedValue} ºC
                </Heading>
              )}
            </Flex>
          </Card>
          <Card mt={10}>
            <Flex flexDir='column' alignItems='center'>
              <Heading
                as='h2'
                fontSize={28}
                color='gray.700'
                textAlign='center'
              >
                Fahrenheit to Celsius formula
              </Heading>
              <Flex flexDir='row' mt={6}>
                <Heading
                  as='h3'
                  color='gray.700'
                  opacity='0.7'
                  mr={2}
                  fontSize={28}
                >
                  ºC =
                </Heading>
                <Flex flexDir='column' alignItems='center'>
                  <Heading
                    as='h3'
                    color='gray.700'
                    opacity='0.7'
                    mr={2}
                    fontSize={28}
                  >
                    ºF - 32
                  </Heading>
                  <Divider borderColor='black' opacity='0.7' />
                  <Heading
                    as='h3'
                    color='gray.700'
                    opacity='0.7'
                    mr={2}
                    fontSize={28}
                  >
                    1.8
                  </Heading>
                </Flex>
              </Flex>
            </Flex>
          </Card>
          <Card mt={10}>
            <Flex flexDir='column' alignItems='center'>
              <Heading
                as='h2'
                fontSize={28}
                color='gray.700'
                textAlign='center'
              >
                Information about Fahrenheit
              </Heading>
              <Flex flexDir='column' mt={6} w='100%'>
                <Text>blablabla</Text>
              </Flex>
            </Flex>
          </Card>
          <Card mt={10}>
            <Flex flexDir='column' alignItems='center'>
              <Heading
                as='h2'
                fontSize={28}
                color='gray.700'
                textAlign='center'
              >
                Information about Celsius
              </Heading>
              <Flex flexDir='column' mt={6} w='100%'>
                <Text>blablabla</Text>
              </Flex>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </>
  );
};

export default FahrenheitToCelsius;
