import { Box, Button, Center, FormControl, Input, Stack, Text } from 'native-base'
import React from 'react'

const Search = () => {
  return (
    <Box>
      <Center>
        <Text>検索画面</Text>
        <FormControl>
          <Center marginTop={4}>
            <Box>
              <Text textAlign={'left'}>検索キーワード</Text>
              <Input variant="outline" placeholder="例：◯◯◯" width={'50%'} />
            </Box>
            <Button size="sm" marginTop={4} width={'50%'}>
              検索
            </Button>
          </Center>
        </FormControl>
      </Center>
    </Box>
  )
}

export default Search
