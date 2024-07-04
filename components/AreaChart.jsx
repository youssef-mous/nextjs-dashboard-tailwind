// components/ChartComponent.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const AreaChartComponent = ({data}) => {
  const chartData = {
    labels: data.monthlySales.map(d => d.month),
    datasets: [
      {
        label: 'Monthly Sales',
        data: data.monthlySales.map(d => d.monthlySales),
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        yAxisID: 'y-axis-1',
      },
      {
        label: 'Cumulative Sales',
        data: data.monthlySales.map(d => d.cumulativeSales),
        fill: true,
        backgroundColor: 'rgba(153,102,255,0.2)',
        borderColor: 'rgba(153,102,255,1)',
        yAxisID: 'y-axis-2',
      },
    ],
  };

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
      },
    },
    scales: {
      'y-axis-1': {
        type: 'linear',
        display: true,
        position: 'left',
      },
      'y-axis-2': {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  return (
    <>
      <div className='w-full md:col-span-3 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
      <Line data={chartData} options={options} />;
      </div>
    </>
  );
   
};

export default AreaChartComponent;
