// components/DonutChartComponent.jsx
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Title, Tooltip, Legend } from 'chart.js'; // Import necessary elements
import { data } from '../data/data';
// Register necessary elements
Chart.register(ArcElement, Title, Tooltip, Legend);

// Component definition
const DonutChartComponent = () => {
  const ChartData = {
    labels: data.categorySales.map(d=>d.category ),
    datasets: [
      {
        label: 'Sales by Category',
        data: data.categorySales.map(d=>d.totalSales),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales by Category',
      },
    },
  };

  return (
    <div className='w-full md:col-span-1 relative lg:h-[70vh] h-[70vh] m-auto p-4 border rounded-lg bg-white'>
      <Doughnut data={ChartData} options={options} />
    </div>
  );
};

export default DonutChartComponent;
