const { NODE_ENV } = process.env;

export let serverUrl;

if(NODE_ENV === 'development') {
  serverUrl = 'http://localhost:3003' // адрес сервера на локалке
} else {
  serverUrl = 'https://detailing-frontend.onrender.com'; // адрес сервера после выгрузки
}