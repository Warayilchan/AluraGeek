let API_BASE_URL = "http://localhost:3000"; 

if (window.location.hostname === 'alura-geek-gamma-wheat.vercel.app') {
    API_BASE_URL = "https://alura-geek-gamma-wheat.vercel.app/";
}

export { API_BASE_URL };
