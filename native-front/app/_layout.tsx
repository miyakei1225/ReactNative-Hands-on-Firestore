import { Stack, useRouter } from 'expo-router'
import { Box, Center, HStack, Icon, NativeBaseProvider, Pressable, ScrollView, Text } from 'native-base'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'

export default function HomeLayout() {
  const router = useRouter()
  const [selected, setSelected] = useState(1)
  return (
    <NativeBaseProvider>
      <Stack />
      {/* ここからフッター */}
      <Box safeAreaBottom width="100%">
        <HStack bg="black" alignItems="center" safeAreaBottom>
          <Pressable
            opacity={selected === 0 ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => {
              setSelected(0)
              router.push('/home')
            }}
          >
            <Center>
              <Icon
                mb="1"
                as={<MaterialCommunityIcons name={selected === 0 ? 'home' : 'home-outline'} />}
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                ホーム
              </Text>
            </Center>
          </Pressable>
          <Pressable
            opacity={selected === 1 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => {
              setSelected(1)
              router.push('/search')
            }}
          >
            <Center>
              <Icon mb="1" as={<MaterialIcons name="search" />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                検索
              </Text>
            </Center>
          </Pressable>
          <Pressable
            opacity={selected === 2 ? 1 : 0.6}
            py="2"
            flex={1}
            onPress={() => {
              setSelected(2)
              router.push('/cart')
            }}
          >
            <Center>
              <Icon
                mb="1"
                as={<MaterialCommunityIcons name={selected === 2 ? 'cart' : 'cart-outline'} />}
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Cart
              </Text>
            </Center>
          </Pressable>
          <Pressable
            opacity={selected === 3 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => {
              setSelected(3)
              router.push('/account')
            }}
          >
            <Center>
              <Icon
                mb="1"
                as={<MaterialCommunityIcons name={selected === 3 ? 'account' : 'account-outline'} />}
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Account
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
      {/* ここまでフッター */}
    </NativeBaseProvider>
  )
}
