import { Box, Center, Divider, ScrollView, Text } from 'native-base'
import React, { useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs, getFirestore, setDoc } from 'firebase/firestore'
import ProductCard from '../components/ui-parts/ProductCard'
import { app } from './libs/Firebase/config/firebaseConfig'

const Cart = () => {
  type CartItem = {
    name: string
    price: number
    quantity: number
  }
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  console.log(cartItems, 'アイテム一覧')

  const db = getFirestore(app)
  useEffect(() => {
    ;(async () => {
      const querySnapshot = await getDocs(collection(db, 'items'))
      console.log(querySnapshot, 'クエリスナップショット')
      setCartItems(querySnapshot.docs.map((doc) => doc.data() as CartItem))
    })()
  }, [])

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
          {cartItems.map((item) => (
            <Box>
              <ProductCard name={item.name} price={item.price} quantity={item.quantity} />
              <Center marginTop={4}>
                <Divider width={'90%'} />
              </Center>
            </Box>
          ))}
        </Box>
      </Center>
    </ScrollView>
  )
}

export default Cart
