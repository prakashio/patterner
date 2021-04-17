import React from 'react'
import { PatternView, Settings } from './components'

const App: React.FC = () => {
  return (
    <div className="grid grid-cols-3 p-8 gap-8">
      <Settings />
      <PatternView />
    </div>
  )
}

export default App
