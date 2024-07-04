// utils/fetchData.js
import axios from 'axios';

export async function fetchData() {
  try {
    const response = await axios.get('http://localhost:3000/getData');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return  null;
}
}