import React, { useContext } from 'react'
import DashboardTile from './DashboardTile'
import ActionButtons from './ActionButtons'
import CreditCard from './CreditCard'
import { balance, expense, income, username } from '../context/context'

const PrimaryDashboard = ({ balPer, incPer, exPer }) => {
  const balanceRef = useContext(balance);
  const expenseRef = useContext(expense);
  const incomeRef = useContext(income);
  const usernameRef = useContext(username);
  return (
    <>
      <div className='pt-8 px-16 text-3xl font-medium text-grey-900'>
        Hello, {usernameRef}!
      </div>
      <div className='flex flex-row my-8 items-center justify-center'>
        <div className='mx-4'>
          <CreditCard username={usernameRef} balance={balanceRef} income={incomeRef} expense={expenseRef} />
        </div>
        <div className='flex flex-col'>
          <div className='inline-flex items-center justify-center md:flex'>
            <DashboardTile text={"Balance"} value={balanceRef} percentage={balPer} color={"blue"} />
            <DashboardTile text={"Income"} value={incomeRef} percentage={incPer} color={"green"} />
            <DashboardTile text={"Expense"} value={expenseRef} percentage={exPer} color={"red"} />
          </div>
          <div className='inline-flex items-center justify-center md:flex'>
            <ActionButtons primaryText={"Add Income"} descText={"Add an income manually"} symbol={'/add.gif'} />
            <ActionButtons primaryText={"Add Expense"} descText={"Add an expense"} symbol={'/minus.gif'} />
            <ActionButtons primaryText={"Transfer"} descText={"Add a transfer"} symbol={'/transfer.gif'} />
          </div>
        </div>
      </div>


    </>
  )
}

export default PrimaryDashboard