import { Box, Button, Center, Divider, Input, ScrollView, Text } from 'native-base'
import React, { useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs, getFirestore, setDoc } from 'firebase/firestore'
import ProductCard from '../components/ui-parts/ProductCard'
import { app } from '../Firebase/config/firebaseConfig'
import { TextInput } from 'react-native'

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

  const [itemName, setItemName] = useState('')
  const [itemPrice, setItemPrice] = useState(0)
  const [itemQuantity, setItemQuantity] = useState(0)

  const onSubmit = async () => {
    const newItem = {
      name: itemName,
      price: itemPrice,
      quantity: 3
    }
    const docRef = doc(db, 'items', 'test')

    console.log(newItem, '新しいアイテム')
    const result = await setDoc(
      docRef,
      {
        name: itemName,
        price: itemPrice,
        quantity: itemQuantity
      },
      { merge: true }
    )
    console.log(result, '結果')
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
          {cartItems.map((item) => (
            <Box>
              <ProductCard name={item.name} price={item.price} quantity={item.quantity} />
              <Center marginTop={4}>
                <Divider width={'90%'} />
              </Center>
            </Box>
          ))}
          <Box mt={16}>
            <Text>商品追加</Text>
            <Input value={itemName} onChangeText={(e) => setItemName(e)} placeholder="商品名" />
            <Input
              value={String(itemPrice)}
              onChangeText={(e) => setItemPrice(Number(e))}
              placeholder="金額"
              keyboardType="numeric"
            />
            <Input
              value={String(itemQuantity)}
              onChangeText={(e) => setItemQuantity(Number(e))}
              placeholder="金額"
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
