import { useRouter, Link } from 'expo-router'
import { Box, Center, ScrollView, Text } from 'native-base'

const Page = () => {
  const router = useRouter()
  return (
    <ScrollView>
      <Center mt={'4'}>
        <Text>初期ページ</Text>
      </Center>
      <Link href="/home">ホーム画面へ</Link>
    </ScrollView>
  )
}

export default Page
