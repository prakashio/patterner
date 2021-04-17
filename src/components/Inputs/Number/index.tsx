import React, { useState } from 'react'

interface NumberInputProps {
    range?: [number, number]
}

const Number: React.FC<NumberInputProps> = ({ range }) => {
    const [value, setValue] = useState(5)

    return <div className="flex justify-between">
        <button onClick={() => setValue(value + 1) /* Incrementer */} className="bg-blue-500 text-white rounded-full w-8 h-8">+</button>
        <span className="w-8 h-8 inline-block">{value}</span>
        <button onClick={() => setValue(value - 1) /* Decrementer */} className="bg-blue-500 text-white rounded-full w-8 h-8">-</button>
    </div>
}

export default Number