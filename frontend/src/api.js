import axios from 'axios';

export default axios.create({
  baseURL: "https://rest-countries-api-demo-production.up.railway.app/api"
});
