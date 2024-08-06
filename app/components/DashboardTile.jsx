import React from 'react'

const DashboardTile = ({ text, value, percentage, color }) => {
    const badgeClass = `bg-${color}-100 text-${color}-800 text-xs font-medium px-2.5 py-0.5 rounded border border-${color}-400 inline-flex`
    return (
        <div className='border rounded-xl shadow p-4 inline-flex  min-w-[16vw] flex-col m-4'>
            <div className='flex justify-between'>
            <h5 className='text-slate-400 text-xs font-extralight'>{text}</h5>
            <div>
            </div>
                <div className={badgeClass}>{percentage}%</div>
            </div>
            <h4 className='text-3xl text-blue-600 font-medium'>₹{value}</h4>
        </div>
    )
}

export default DashboardTile