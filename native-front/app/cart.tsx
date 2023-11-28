import { Box, Button, Center, Divider, Input, ScrollView, Text } from 'native-base'
import React, { useEffect, useState } from 'react'
import { collection, doc, getDocs, getFirestore, setDoc } from 'firebase/firestore'
import ProductCard from '../components/ui-parts/ProductCard'
import { app } from '../Firebase/config/firebaseConfig'

type CartItem = {
  name: string
  price: number
  quantity: number
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [itemName, setItemName] = useState('')
  const [itemPrice, setItemPrice] = useState(0)
  const [itemQuantity, setItemQuantity] = useState(0)

  const db = getFirestore(app)
  useEffect(() => {
    ;(async () => {
      const querySnapshot = await getDocs(collection(db, 'items'))
      setCartItems(querySnapshot.docs.map((doc) => doc.data() as CartItem))
    })()
  }, [])

  const onSubmit = async () => {
    const docRef = doc(db, 'items', Math.random().toString(32))
    await setDoc(
      docRef,
      {
        name: itemName,
        price: itemPrice,
        quantity: itemQuantity
      },
      { merge: true }
    )
  }

  return (
    <ScrollView>
      <Center mt={16}>
        <Text>カート画面</Text>
        <Box backgroundColor={'white'} width={'80%'} height={'100%'} marginTop={4}>
          <Text fontWeight={'normal'} fontSize={'xl'} marginLeft={4} marginTop={4}>
            ショッピングカート
          </Text>
          <Center>
            <Divider width={'90%'} />
          </Center>
          {cartItems.map((item, index) => (
            <Box key={index}>
              <ProductCard name={item.name} price={item.price} quantity={item.quantity} />
              <Center marginTop={4}>
                <Divider width={'90%'} />
              </Center>
            </Box>
          ))}
          <Box mt={16}>
            <Text>商品追加</Text>
            <Text mt={4}>商品名前</Text>
            <Input value={itemName} onChangeText={(e) => setItemName(e)} placeholder="商品名" />
            <Text mt={4}>金額</Text>
            <Input
              value={String(itemPrice)}
              onChangeText={(e) => setItemPrice(Number(e))}
              placeholder="金額"
              keyboardType="numeric"
            />
            <Text mt={4}>数量</Text>
            <Input
              value={String(itemQuantity)}
              onChangeText={(e) => setItemQuantity(Number(e))}
              placeholder="数量"
              keyboardType="numeric"
            />
            <Button onPress={onSubmit}>
              <Text>追加</Text>
            </Button>
          </Box>
        </Box>
      </Center>
    </ScrollView>
  )
}

export default Cart
