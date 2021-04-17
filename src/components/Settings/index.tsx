import React from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'

import { SettingsProps } from './types'


const Settings: React.FC<SettingsProps> = (props) => {
    return (
        <section {...props} className="col-auto bg-gray-100 p-4 rounded-lg">
            <header className="flex justify-between items-center">
                <span className="text-lg font-bold">pttr.</span>
                <FiMoreHorizontal className="transform scale-125" />
            </header>
        </section>
    )
}

export default Settings