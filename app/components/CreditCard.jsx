import React from 'react'

const CreditCard = ({username, balance, income, expense}) => {
  return (
    <div className="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">
            
                <img className="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png" />
                
                <div className="w-full px-8 absolute top-8">
                    <div className="flex justify-between">
                        <div className="">
                            <p className="font-light">
                                Name
                            </p>
                            <p className="font-medium tracking-widest">
                                {username}
                            </p>
                        </div>
                        <img className="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png"/>
                    </div>
                    <div className="pt-1">
                        <p className="font-light">
                            Current Balance
                        </p>
                        <p className="font-medium tracking-more-wider">
                            ${balance}
                        </p>
                    </div>
                    <div className="pt-6 pr-6">
                        <div className="flex justify-between">
                            <div className="">
                                <p className="font-light text-xs">
                                    Expense
                                </p>
                                <p className="font-medium tracking-wider text-sm">
                                    ${expense}
                                </p>
                            </div>
                            <div className="">
                                <p className="font-light text-xs">
                                    Income
                                </p>
                                <p className="font-medium tracking-wider text-sm">
                                    ${income}
                                </p>
                            </div>
    
                            <div className="">
                                <p className="font-light text-xs">
                                    CVV
                                </p>
                                <p className="font-bold tracking-more-wider text-sm">
                                    ···
                                </p>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
  )
}

export default CreditCard