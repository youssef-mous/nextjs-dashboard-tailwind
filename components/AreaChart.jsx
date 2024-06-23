
// components/ChartComponent.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

import { data } from '../data/data'; // Assurez-vous que vous importez correctement vos données

const AreaChartComponent = () => {
  // Extraction des données pour le graphique
  const chartData = {
    labels: data.monthlySales ? data.monthlySales.map(d => d._id) : [],
    datasets: [
      {
        label: 'Monthly Sales',
        data: data.monthlySales ? data.monthlySales.map(d => d.monthlySales) : [],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        yAxisID: 'y-axis-1',
      },
      {
        label: 'Cumulative Sales',
        data: data.monthlySales ? data.monthlySales.map(d => d.cumulativeSales) : [],
        fill: true,
        backgroundColor: 'rgba(153,102,255,0.2)',
        borderColor: 'rgba(153,102,255,1)',
        yAxisID: 'y-axis-2',
      },
    ],
  };



  // Options du graphique
  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Monthly and Cumulative Sales',
        color:'white',
      },
    },
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left',
          color:'white',
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right',
          grid: {
            drawOnChartArea: false,
          },
        },
      ],
    },
  };
  const lineStyle = {
    color: 'white', // Couleur du texte
  };
  return (
    <div className='w-full md:col-span-3 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg border-gray-400 bg-gray-800 '>
      <Line data={chartData} options={options} style={lineStyle } />
    </div>
  );
};

export default AreaChartComponent;