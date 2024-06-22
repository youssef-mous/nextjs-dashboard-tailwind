// components/StackedBarChartComponent.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import {data} from '../data/data';
// Register necessary elements
if (Chart.register) {
  Chart.register(Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement);
}

const StackedBarChartComponent = () => {
  // Extract labels (country names) and total sales from data
  const labels = data.countrySales.map(country => country.category);
  const totalSalesData = data.countrySales.map(country => country.totalSales);

  // Data structure for chart.js
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Total Sales',
        data: totalSalesData,
        backgroundColor: 'rgba(235, 54, 54, 0.6)', // Red color
        borderColor: 'rgba(54, 162, 235, 1)',
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
        text: 'Sales by Country',
      },
    },
    scales: {
      x: {
        type: 'category',
      },
      y: {
        type: 'linear',
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default StackedBarChartComponent;
