import './App.css'
import { Button } from '@repo/ui'
import { TamaguiProvider, createTamagui } from 'tamagui'
import { defaultConfig } from '@tamagui/config/v4'

const tamaguiConfig = createTamagui(defaultConfig)

function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
        <Button title={'Click me'} onClick={() => alert('Button clicked!')} />
    </TamaguiProvider>
  )
}

export default App
