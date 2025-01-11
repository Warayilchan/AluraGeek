let API_BASE_URL = "http://localhost:3000"; 

if (window.location.hostname === 'alura-geek-sigma-nine.vercel.app') {
    API_BASE_URL = "https://alura-geek-sigma-nine.vercel.app/";
}

export { API_BASE_URL };
