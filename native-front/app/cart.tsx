import { Box, Center, Divider, ScrollView, Text } from 'native-base'
import React from 'react'
import ProductCard from '../components/ui-parts/ProductCard'

const Cart = () => {
  return (
    <ScrollView>
      <Center>
        <Text>カート画面</Text>
        <Box backgroundColor={'white'} width={'80%'} height={'100%'} marginTop={4}>
          <Text fontWeight={'normal'} fontSize={'xl'} marginLeft={4} marginTop={4}>
            ショッピングカート
          </Text>
          <Center>
            <Divider width={'90%'} />
          </Center>
          <ProductCard />
          <Center marginTop={4}>
            <Divider width={'90%'} />
          </Center>
          <ProductCard />
          <Center marginTop={4}>
            <Divider width={'90%'} />
          </Center>
          <ProductCard />
          <Center marginTop={4}>
            <Divider width={'90%'} />
          </Center>
        </Box>
      </Center>
    </ScrollView>
  )
}

export default Cart
