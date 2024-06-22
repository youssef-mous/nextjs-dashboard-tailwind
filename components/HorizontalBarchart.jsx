// components/Horizontal.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { data } from '../data/data';

const LinearBarChart = () => {
  const productSalesChartData = {
    labels: data.productSales.map(product => product.productName),
    datasets: [
      {
        label: 'Total Sales',
        data: data.productSales.map(product => product.totalSales),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const productSalesOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Sales by Product',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
    },
    indexAxis: 'y', // This will make the bar chart horizontal
  };

  return (
    <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
      <Bar data={productSalesChartData} options={productSalesOptions} />
    </div>
  );
};

export default LinearBarChart;
