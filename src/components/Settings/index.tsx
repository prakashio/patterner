import React from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'

import { Row } from '../commons'
import { SettingsProps } from './types'


const Settings: React.FC<SettingsProps> = (props) => {
    return (
        <section {...props} className="col-auto border border-gray-100 p-4 rounded-lg">
            <header className="flex justify-between items-center">
                <span className="text-lg font-bold">pttr.</span>
                <FiMoreHorizontal className="transform scale-125" />
            </header>
            <div>
                <Row title="Patterns">
                    <div className="flex gap-4">
                        {[1, 1, 1, 1].map((i: number, key: number) => <div className="w-24 h-24 rounded-lg bg-gradient-to-r from-gray-800 to-gray-50 hover:bg-black" key={key}>
                        </div>)}
                    </div>
                </Row>
                <Row title="Sizes">
                    <div className="flex gap-1">
                        {["1x", "2x", "3x", "4x"].map((s: string) => <div key={s} className="flex-1 border hover:bg-gray-900 border-gray-100 hover:text-gray-50 p-2 text-center">{s}</div>)}
                    </div>
                </Row>
            </div>
        </section>
    )
}

export default Settings