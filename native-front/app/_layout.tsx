import { Tabs } from 'expo-router'
import { NativeBaseProvider } from 'native-base'
import { AntDesign, FontAwesome5 } from '@expo/vector-icons'

export default function HomeLayout() {
  return (
    <NativeBaseProvider>
      <Tabs
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ffffff'
          },
          headerTintColor: '#000000'
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            headerTitle: 'ホーム',
            tabBarIcon: ({ color, size }) => <FontAwesome5 name="home" size={size} color={color} />,
            tabBarLabel: 'ホーム'
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            headerTitle: 'テスト用',
            headerShown: false,
            tabBarIcon: ({ color, size }) => <FontAwesome5 name="map-marked-alt" size={size} color={color} />,
            tabBarLabel: 'テスト用'
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            headerTitle: 'カート',
            tabBarIcon: ({ color, size }) => <AntDesign name="shoppingcart" size={size} color={color} />,
            tabBarLabel: 'カート'
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            headerTitle: '検索',
            tabBarIcon: ({ color, size }) => <AntDesign name="search1" size={size} color={color} />,
            tabBarLabel: '検索'
          }}
        />
        <Tabs.Screen
          name="account"
          options={{
            headerTitle: 'アカウント',
            tabBarIcon: ({ color, size }) => <FontAwesome5 name="user" size={size} color={color} />,
            tabBarLabel: 'アカウント'
          }}
        />
        {/* 除外ページ */}
        <Tabs.Screen
          name="test"
          options={{
            headerTitle: 'My Profile',
            tabBarIcon: ({ color, size }) => <FontAwesome5 name="user" size={size} color={color} />,
            tabBarLabel: 'My Profile',
            // headerRight: () => <LogoutButton />,
            href: null
          }}
          // redirect={!isSignedIn}
        />
      </Tabs>
    </NativeBaseProvider>
  )
}
