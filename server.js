if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const WEATHERSTACK_API_KEY = process.env.WEATHERSTACK_API_KEY;
