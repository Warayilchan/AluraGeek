let API_BASE_URL = "http://localhost:3000"; 

if (process.env.NODE_ENV === 'production') {
    API_BASE_URL = "https://seu-projeto.vercel.app";
}

export { API_BASE_URL };
