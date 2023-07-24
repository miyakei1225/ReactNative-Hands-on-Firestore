import { Box, HStack, Image, Text, VStack } from 'native-base'
import React from 'react'

const ProductCard = () => {
  const randomId = Math.floor(Math.random() * 100)
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
          <Text fontSize={'sm'}>【商品名】テスト</Text>
          <Text fontSize={'sm'}>【金額】1,200円</Text>
          <Text fontSize={'sm'}>【数量】2個</Text>
        </VStack>
      </HStack>
    </Box>
  )
}

export default ProductCard
