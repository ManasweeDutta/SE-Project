import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function Charts() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [
      { label: 'Income', data: [3000, 4000, 5000], backgroundColor: 'green' },
      { label: 'Expenses', data: [2000, 2500, 3000], backgroundColor: 'red' },
    ],
  };

  return <Bar data={data} />;
}
