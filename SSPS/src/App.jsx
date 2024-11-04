import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideNavigation from './component/SideNav/nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <SideNavigation/>
  )
}

export default App
