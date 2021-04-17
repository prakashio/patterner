import React from 'react'
import classNames from 'classnames';

const Row: React.FC<RowProps> = ({ title, description, classes, children }) => {
    return (
        <div className={classNames("py-4", classes)}>
            <div className="pb-2">
                <p className="text-sm font-bold">{title}</p>
                {description && <p>{description}</p>}
            </div>
            {children}
        </div>
    )
}

interface RowProps {
    title: string
    description?: string
    children: JSX.Element
    classes?: string
}

export default Row