import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import {data} from "../data/data"
Chart.register(Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const StackedBarChartComponent = () => {
  const labels = data.countrySales.map(country => country._id);
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Total Sales',
        data: data.countrySales.map(country => country.totalSales),
        backgroundColor: 'rgba(235, 54, 54, 0.6)',
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
        text: 'Sales by Month',
        color:'white',
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
    <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg border-gray-400 bg-gray-800'>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default StackedBarChartComponent;