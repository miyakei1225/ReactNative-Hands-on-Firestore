import { Box, HStack, Image, Text, VStack } from 'native-base'
import React, { FC } from 'react'

type Props = {
  name: string
  price: number
  quantity: number
}

const ProductCard: FC<Props> = ({ name, price, quantity }) => {
  return (
    <Box marginTop={4} marginLeft={4}>
      <HStack>
        <Image
          source={{
            uri: `https://picsum.photos/200`
          }}
          alt="Alternate Text"
          size="xl"
        />
        <VStack>
          <Text fontSize={'sm'}>【商品名】{name}</Text>
          <Text fontSize={'sm'}>【金額】{price} 円</Text>
          <Text fontSize={'sm'}>【数量】{quantity} 個</Text>
        </VStack>
      </HStack>
    </Box>
  )
}

export default ProductCard
