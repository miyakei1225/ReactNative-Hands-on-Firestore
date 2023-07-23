import { StatusBar } from 'expo-status-bar'
import { Box, Button, NativeBaseProvider, Text } from 'native-base'

export default function App() {
  return (
    <NativeBaseProvider>
      <Box colorScheme={'red'} color={'red'}>
        <Text color={'red'}>Hello world</Text>
      </Box>
      <Box alignItems="center">
        <Button color={'red'} colorScheme={'red'} onPress={() => console.log('hello world')}>
          <Text>Click Me</Text>
        </Button>
      </Box>
      <StatusBar style="auto" />
    </NativeBaseProvider>
  )
}
