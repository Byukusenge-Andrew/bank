import React, { unstable_SuspenseList } from 'react'
import HeaderBox from '@/components/HeaderBox' 
import TotalBalancebox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'
import { getLoggedInUser } from '@/lib/actions/user.action'
import { redirect } from 'next/navigation'
import { getAccount, getAccounts } from '@/lib/actions/bank.actions'



const Home = async ({searchParams:{id,page}}:SearchParamProps) => {
  const loggedIn = await getLoggedInUser()
  const accounts =  await getAccounts({userId:loggedIn.$Id})
  const accountsdata = accounts?.data
  if(!accounts) return;

  const appwriteItemId = (id as string ) || accountsdata?.appwriteItemId;
  const account = await getAccount({appwriteItemId})
  console.log( "The accounts data is "+accountsdata)
  return (
    <section className='home'>
      <div className='home-content'>
       <header className='home-header'>
       <HeaderBox
        type="greeting"
        title ="Welcome"
        user ={loggedIn?.firstName}
        subtext= "Access and Manage your accounts and transactions"

       />

       <TotalBalancebox
         accounts = {[accountsdata]}
         totalBanks = {accounts?.totalBanks}
         totalCurrentBalance = {accounts.totalCurrentBalance}

       />

        </header>
        RECENT TRANSCACTIONS

      </div>

      <RightSidebar user={loggedIn}
      transactions = {accounts?.transactions}
      banks = {accountsdata.slice(0,2)}
      />
    </section>
  )
}

export default Home

