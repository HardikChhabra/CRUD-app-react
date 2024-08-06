import React from 'react'

const ActionButtons = ({ primaryText, descText, symbol, color, action }) => {
    return (
        <div className="w-full max-w-[24vw] p-4 text-gray-500 bg-white rounded-lg shadow border m-4">
            <div className="flex">
                <img className="w-8 h-8 rounded-full" src={`${symbol}`} alt="symbol image" />
                <div className="ms-3 text-sm font-normal">
                    <span className="mb-1 text-sm font-semibold text-gray-900">{primaryText}</span>
                    <div className="text-sm font-normal">{descText}</div>
                </div>
            </div>
        </div>
    )
}

export default ActionButtons