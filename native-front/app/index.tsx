import { useRouter, Link } from 'expo-router'
import { Box, Center, Text } from 'native-base'

const Page = () => {
  const router = useRouter()
  return (
    <Box>
      <Center mt={'4'}>
        <Text>初期ページ</Text>
      </Center>
      <Link href="/home">ホーム画面へ</Link>
    </Box>
  )
}

export default Page
