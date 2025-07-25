import React from 'react';
import { formatAmount } from '@/lib/utils';
import Animatedcounter from './Animatedcounter';
import DoughnutChart from './DoughnutChart';

const TotalBalanceBox = ({ accounts = [], totalBanks, totalCurrentBalance }:TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
      <div className='total-balance-chart'>
        <DoughnutChart accounts={accounts} />
      </div>

      <div className='flex flex-col gap-6'>
        <h2 className='header-2'>
          Bank Account: {totalBanks}
        </h2>
     
        <div className='flex flex-col gap-2'>
          <p className="total-balance-label">
            Total current Balance
          </p>
          <div className='total-balance-amount flex-center gap-2'>
            <Animatedcounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
