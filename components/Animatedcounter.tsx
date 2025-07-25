'use client'

import React from 'react'
import CountUp from 'react-countup'

const Animatedcounter = ({amount}:{amount : number}) => {
  return (
    <div>
     <CountUp 
     decimal='.'
     prefix='$'
     duration={2.5}
     decimals={2}
     end={amount} />
    </div>
  )
}

export default Animatedcounter
