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
import Header from 'components/molecules/header';

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
      <Header />
      <Container bgColor='gray.100' maxW='100%'>
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
                More Information
              </Heading>
              <Flex flexDir='column' mt={6} w='100%'>
                <Heading as='h3' fontSize={20} textAlign='center'>
                  Fahrenheit
                </Heading>
                <Heading as='h4' mt={6} fontSize={16} textAlign='left'>
                  Unit of: Temperature
                </Heading>
                <Heading as='h4' mt={4} fontSize={16} textAlign='left'>
                  Symbol: ºF
                </Heading>
                <Heading as='h4' mt={4} fontSize={16} textAlign='left'>
                  Usage
                </Heading>
                <Text mt={2} textAlign='justify'>
                  The Fahrenheit scale was the primary temperature standard for
                  climatic, industrial and medical purposes in English-speaking
                  countries until the 1960s. In the late 1960s and 1970s, the
                  Celsius scale replaced Fahrenheit in almost all of those
                  countries—with the notable exception of the United States and
                  in certain cases, the United Kingdom—typically during their
                  general metrication process.
                </Text>
                <Text mt={2} textAlign='justify'>
                  Fahrenheit is used in the United States, its territories and
                  associated states (all served by the U.S. National Weather
                  Service), as well as the Cayman Islands and Liberia for
                  everyday applications. For example, U.S. weather forecasts,
                  food cooking, and freezing temperatures are typically given in
                  degrees Fahrenheit. Scientists, including meteorologists, use
                  degrees Celsius or kelvin in all countries.
                </Text>
                <Text mt={2} textAlign='justify'>
                  Early in the 20th century, Halsey and Dale suggested that
                  reasons for resistance to use the centigrade (now Celsius)
                  system in the U.S. included the larger size of each degree
                  Celsius and the lower zero point in the Fahrenheit system.
                </Text>
                <Text mt={2} textAlign='justify'>
                  Canada has passed legislation favoring the International
                  System of Units, while also maintaining legal definitions for
                  traditional Canadian imperial units. Canadian weather reports
                  are conveyed using degrees Celsius with occasional reference
                  to Fahrenheit especially for cross-border broadcasts.
                  Fahrenheit is still used on virtually all Canadian ovens.
                  Thermometers, both digital and analog, sold in Canada usually
                  employ both the Celsius and Fahrenheit scales.
                </Text>
                <Heading as='h4' mt={4} fontSize={16} textAlign='left'>
                  Definition
                </Heading>
                <Text mt={2} textAlign='justify'>
                  On the Fahrenheit scale, the melting point of water is 32°F
                  and the boiling point is 212°F (at standard atmospheric
                  pressure). This puts the boiling and freezing points of water
                  180 degrees apart. Therefore, a degree on the Fahrenheit scale
                  is 1⁄180 of the interval between the freezing point and the
                  boiling point. On the Celsius scale, the freezing and boiling
                  points of water are 100 degrees apart. A temperature interval
                  of 1 °F is equal to an interval of 5⁄9 degrees Celsius. The
                  Fahrenheit and Celsius scales intersect at −40° (i.e. −40 °F =
                  −40 °C).
                </Text>
                <Text mt={2} textAlign='justify'>
                  Absolute zero is −273.15 °C or −459.67 °F. The Rankine
                  temperature scale uses degree intervals of the same size as
                  those of the Fahrenheit scale, except that absolute zero is 0
                  °R — the same way that the Kelvin temperature scale matches
                  the Celsius scale, except that absolute zero is 0 K.
                </Text>
                <Text mt={2} textAlign='justify'>
                  The combination of degree symbol (°) followed by an uppercase
                  letter F is the conventional symbol for the Fahrenheit
                  temperature scale. A number followed by this symbol (and
                  separated from it with a space) denotes a specific temperature
                  point (e.g. &quot;Gallium melts at 85.5763 °F&quot;), a
                  difference between temperatures (e.g. &quot;The output of the
                  heat exchanger experiences an increase of 72 °F&quot;) or an
                  uncertainty in temperature (e.g. &quot;Our standard
                  uncertainty is ±5 °F&quot;). The symbol for the Celsius scale
                  also uses the degree symbol (°C), while the symbol for the
                  Kelvin scale is just an uppercase letter K. The numerical
                  value of a temperature difference or temperature interval is
                  the same when expressed in either degrees Celsius or in
                  kelvin.
                </Text>
                <Heading as='h3' mt={10} fontSize={20} textAlign='center'>
                  Celsius
                </Heading>
                <Heading as='h4' mt={6} fontSize={16} textAlign='left'>
                  Unit of: Temperature
                </Heading>
                <Heading as='h4' mt={4} fontSize={16} textAlign='left'>
                  Symbol: ºC
                </Heading>
                <Heading as='h4' mt={4} fontSize={16} textAlign='left'>
                  Usage
                </Heading>
                <Text mt={2} textAlign='justify'>
                  Most countries worldwide – including non-metric Liberia and
                  Burma – use Celsius as their official temperature scale. Only
                  a few countries use Fahrenheit as their official scale: the
                  United States, Belize, Palau, the Bahamas and the Cayman
                  Islands. Fahrenheit is still sometimes used in Canada,
                  although Celsius is more common and is the official Canadian
                  temperature scale.
                </Text>
                <Heading as='h4' mt={4} fontSize={16} textAlign='left'>
                  Definition
                </Heading>
                <Text mt={2} textAlign='justify'>
                  Since 1743 the Celsius scale has been based on 0 °C for the
                  freezing point of water and 100 °C for the boiling point of
                  water at 1 atm pressure. Prior to 1743 the values were
                  reversed (i.e. the boiling point was 0 degrees and the
                  freezing point was 100 degrees). The 1743 scale reversal was
                  proposed by Jean-Pierre Christin.
                </Text>
                <Text mt={2} textAlign='justify'>
                  By international agreement, between 1954 and 2019 the unit
                  degree Celsius and the Celsius scale were defined by absolute
                  zero and the triple point of Vienna Standard Mean Ocean Water
                  (VSMOW), a precisely defined water standard. This definition
                  also precisely related the Celsius scale to the Kelvin scale,
                  which defines the SI base unit of thermodynamic temperature
                  with symbol K. Absolute zero, the lowest temperature possible,
                  is defined as being exactly 0 K and −273.15 °C. Until 19 May
                  2019, the temperature of the triple point of water was defined
                  as exactly 273.16 K (0.01 °C). This means that a temperature
                  difference of one degree Celsius and that of one kelvin are
                  exactly the same.
                </Text>
                <Text mt={2} textAlign='justify'>
                  On 20 May 2019, the kelvin was redefined so that its value is
                  now determined by the definition of the Boltzmann constant
                  rather than being defined by the triple point of VSMOW. This
                  means that the triple point is now a measured value, not a
                  defined value. The newly-defined exact value of the Boltzmann
                  constant was selected so that the measured value of the VSMOW
                  triple point is exactly the same as the older defined value to
                  within the limits of accuracy of contemporary metrology. The
                  degree Celsius remains exactly equal to the kelvin, and 0 K
                  remains exactly −273.15 °C.
                </Text>
              </Flex>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </>
  );
};

export default FahrenheitToCelsius;
