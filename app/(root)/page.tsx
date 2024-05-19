import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Dashboard = () => {
  const isLoggedIn = {firstName: 'John', lastName: 'Pani', email: 'panilindani@gmail.com'}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type = 'greeting'
            title='Welcome'
            user = {isLoggedIn?.firstName || 'Guest' }
            subtext='Access and manage your account and transactions effeciently'
          />

          <TotalBalanceBox
            accounts = {[]}
            totalBanks = {1}
            totalCurrentBalance = {1111.50}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={isLoggedIn}
        transactions={[]}
        banks={[{currentBalance: 1245.69}, {currentBalance: 600.00}]}
      />
    </section>
  )
}

export default Dashboard