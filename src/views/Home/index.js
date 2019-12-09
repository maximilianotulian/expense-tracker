// @packages
import React from 'react';
import './styles.scss';

// @own
import Layout from 'components/Layout';
import LineChart from 'components/LineChart';
import mockedData from 'src/data';

console.log(mockedData);
const { expensesByMonth } = mockedData;

function Home() {
  return (
    <Layout>
      <div>
        <h2>Gastos por mes</h2>
        <LineChart 
          data={expensesByMonth} 
          dataKey="money"
          width={1000}
          height={400}
        />
      </div>
      <div>
        <h2>Gastos por dia</h2>
        <LineChart 
          data={expensesByMonth} 
          dataKey="money"
          width={1000}
          height={400}
        />
      </div>
    </Layout>
  );
}

export default Home;
