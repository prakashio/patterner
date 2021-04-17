import React from 'react'
import { PatterViewProps } from './types'
import Pattern from '../../assets/pattern.jpg'

const PatternView: React.FC<PatterViewProps> = (props) => {
    return (
        <section {...props} className="col-span-2">
            <img src={Pattern} className="object-contain rounded-lg" />
        </section >
    )
}

export default PatternView