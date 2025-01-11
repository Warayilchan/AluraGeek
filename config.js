let API_BASE_URL = "http://localhost:3000"; 

if (process.env.NODE_ENV === 'production') {
    API_BASE_URL = "https://alura-geek-sigma-nine.vercel.app/";
}

export { API_BASE_URL };
