import { useRouter, Link } from 'expo-router'
import { Box, Button, Center, NativeBaseProvider, Text } from 'native-base'

const Page = () => {
  const router = useRouter()
  return (
    <Box>
      <Center mt={'4'}>
        <Text color={'red'} bgColor={'red'}>
          aaa
        </Text>
      </Center>
      <Link href="/home">ホーム画面へ</Link>
    </Box>
  )
}

export default Page
