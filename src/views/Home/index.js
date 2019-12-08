// @packages
import React from 'react';
import './styles.scss';

// @own
import Layout from 'components/Layout';
import LineChart from 'components/LineChart';

const data = [
  {
    name: 'Enero', 
    money: 100,
  },
  {
    name: 'Febrero',
    money: 10000,
  },
  {
    name: 'Marzo',
    money: 5000,
  },
  {
    name: 'Mayo',
    money: 5000,
  },
  {
    name: 'Junio',
    money: 100,
  },
  {
    name: 'Julio',
    money: 1000,
  },
  {
    name: 'Agosto',
    money: 10000,
  },
  {
    name: 'Septiembre',
    money: 15000,
  },
  {
    name: 'Octubre',
    money: 10000,
  },
  {
    name: 'Noviembre',
    money: 5000,
  },
  {
    name: 'Diciembre',
    money: 10000,
  },
];

function Home() {
  return (
    <Layout>
      <div>
        <h2>Gastos por mes</h2>
        <LineChart 
          data={data} 
          dataKey="money"
          width={1000}
          height={400}
        />
      </div>
      <div>
        <h2>Gastos por dia</h2>
        <LineChart 
          data={data} 
          dataKey="money"
          width={1000}
          height={400}
        />
      </div>
    </Layout>
  );
}

export default Home;
