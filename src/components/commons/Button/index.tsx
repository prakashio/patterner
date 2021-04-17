import React from 'react'

interface ButtonProps {
    children: JSX.Element | string
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
    return (
        <button className="w-full block p-1 border border-gray-100 hover:bg-gray-900 hover:text-white" {...rest}>
            {children}
        </button>
    )
}

export default Button