import React from 'react'
import { PatterViewProps } from './types'

const PatternView: React.FC<PatterViewProps> = (props) => {
    return (
        <section {...props} className="col-span-2 rounded-lg border border-gray-100 bg-gray-50">

        </section>
    )
}

export default PatternView