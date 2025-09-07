const API_APP = import.meta.env.VITE_APP_ID;
const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;

if (!API_APP || !ACCESS_KEY) throw new Error('Missing environment variables');

const env = { API_APP, ACCESS_KEY };

export default env;
