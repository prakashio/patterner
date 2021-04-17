import React from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'

import { Row, Button } from '../commons'
import { SettingsProps } from './types'


const Settings: React.FC<SettingsProps> = (props) => {
    return (
        <section {...props} className="col-auto border border-gray-100 p-4 rounded-lg">
            <header className="flex justify-between items-center">
                <span className="text-lg font-bold">
                    <svg width="70" height="20" viewBox="0 0 84 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M50.8421 4.55325L46.8133 0.483887L39.7895 7.56844L32.6983 0.483887L28.7368 4.55325L35.755 11.5698L28.7368 18.592L32.6983 22.6557L39.7895 15.5711L46.8133 22.6557L50.8421 18.592L43.8239 11.5698L50.8421 4.55325ZM20.0445 17.9056C23.5054 12.8967 22.2627 6.02212 17.2688 2.55081C12.275 -0.920494 5.42106 0.325967 1.96017 5.33486C-1.50072 10.3438 -0.257997 17.2183 4.73587 20.6896C9.72973 24.1609 16.5837 22.9145 20.0445 17.9056ZM84 0.483887H61.8947V22.6557H84V0.483887Z" fill="#000"></path>
                    </svg>
                </span>
                <FiMoreHorizontal className="transform scale-125" />
            </header>
            <div className="grid grid-cols-1 pb-4">
                <Row title="Patterns">
                    <div className="flex gap-4">
                        {[1, 1, 1, 1].map((i: number, key: number) => <div className="w-24 h-24 rounded-lg bg-gradient-to-r from-gray-800 to-gray-50 hover:bg-black" key={key}>
                        </div>)}
                    </div>
                </Row>
                <Row title="Sizes">
                    <div className="flex gap-1">
                        {["1x", "2x", "3x", "4x"].map((s: string) => <Button key={s}><span>{s}</span></Button>)}
                    </div>
                </Row>
                <div >
                    <Button>
                        Download
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Settings