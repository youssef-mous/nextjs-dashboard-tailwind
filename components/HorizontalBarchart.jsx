
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { data } from '../data/data';

const LinearBarChart = () => {
  // Extraction des données pour le graphique
  const productSalesChartData = {
    labels: data.productSales.map(product => product._id), // Utilisation des IDs des produits comme étiquettes
    datasets: [
      {
        label: 'Total Sales',
        data: data.productSales.map(product => product.totalSales), // Ventes totales par produit
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Options du graphique
  const productSalesOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Sales by Product',
        color:'white',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      color:'white',
    },
    indexAxis: 'y', // Faire du graphique une barre horizontale
  };

  return (
    <div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg border-gray-400 bg-gray-800 '>
      <Bar data={productSalesChartData} options={productSalesOptions} />
    </div>
  );
};

export default LinearBarChart;