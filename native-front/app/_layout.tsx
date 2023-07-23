import { Stack } from 'expo-router'
import { NativeBaseProvider } from 'native-base'

export default function HomeLayout() {
  return (
    <NativeBaseProvider>
      <Stack />
    </NativeBaseProvider>
  )
}
