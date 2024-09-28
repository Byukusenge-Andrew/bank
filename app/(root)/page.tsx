import React from 'react'
import HeaderBox from '@/components/HeaderBox' 
import TotalBalancebox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'
import { getLoggedInUser } from '@/lib/actions/user.action'
import { redirect } from 'next/navigation'



const Home = async () => {
  const loggedIn = await getLoggedInUser()
  
  console.log(loggedIn)
 console.log(`the firstname is ${loggedIn?.name}` )

  return (
    <section className='home'>
      <div className='home-content'>
       <header className='home-header'>
       <HeaderBox
        type="greeting"
        title ="Welcome"
        user ={loggedIn?.name}
        subtext= "Access and Manage your accounts and transactions"

       />

       <TotalBalancebox
         accounts = {[]}
         totalBanks = {1}
         totalCurrentBalance = {1250.35}

       />

        </header>
        RECENT TRANSCACTIONS

      </div>

      <RightSidebar user={loggedIn}
      transactions = {[]}
      banks = {[{currentBalance: 1250.35},{currentBalance: 1350.35}]}
      />
    </section>
  )
}

export default Home

