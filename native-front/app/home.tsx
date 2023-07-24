import { Center, ScrollView, Text } from 'native-base'
import React from 'react'

const Home = () => {
  return (
    <ScrollView>
      <Center>
        <Text>ホーム画面</Text>
        <Center marginTop={4}>
          <Text fontSize={'lg'}>【課題用】</Text>
          <Text fontSize={'lg'}>こちらのページを編集してみよう！</Text>
        </Center>
      </Center>
    </ScrollView>
  )
}

export default Home
