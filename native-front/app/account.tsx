import { Avatar, Box, Center, Divider, HStack, Icon, ScrollView, Text, VStack } from 'native-base'
import { MaterialCommunityIcons, Feather, Octicons, Fontisto } from '@expo/vector-icons'
import React from 'react'

const Account = () => {
  return (
    <ScrollView>
      <Center>
        <Text>アカウント画面</Text>
        <Center marginTop={4}>
          <Avatar
            source={{
              uri: `https://picsum.photos/200`
            }}
            size={'lg'}
          >
            Profile Avatar
          </Avatar>
          <Text marginTop={4} fontSize={'lg'} fontWeight={'semibold'}>
            テストユーザー
          </Text>
          <Text style={{ color: 'gray' }} fontSize={'md'}>
            エンジニア
          </Text>
          <HStack marginTop={4} space={4}>
            <VStack>
              <Center>
                <Icon mb="1" as={<Feather name={'phone'} />} color="gray.400" size="md" />
                <Text style={{ color: 'gray' }} fontSize={'sm'}>
                  連絡先
                </Text>
              </Center>
            </VStack>
            <VStack>
              <Center>
                <Icon mb="1" as={<Octicons name={'device-camera-video'} />} color="gray.400" size="md" />
                <Text style={{ color: 'gray' }} fontSize={'sm'}>
                  ビデオ通話
                </Text>
              </Center>
            </VStack>
            <VStack>
              <Center>
                <Icon mb="1" as={<MaterialCommunityIcons name={'message-text'} />} color="gray.400" size="md" />
                <Text style={{ color: 'gray' }} fontSize={'sm'}>
                  メッセージ
                </Text>
              </Center>
            </VStack>
            <VStack>
              <Center>
                <Icon mb="1" as={<Fontisto name={'email'} />} color="gray.400" size="md" />
                <Text style={{ color: 'gray' }} fontSize={'sm'}>
                  ホーム
                </Text>
              </Center>
            </VStack>
          </HStack>
        </Center>
      </Center>
      <Center marginTop={4}>
        <Divider width={'90%'} />
      </Center>
    </ScrollView>
  )
}

export default Account
