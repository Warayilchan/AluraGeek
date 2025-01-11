let API_BASE_URL = "http://localhost:3000"; 

if (window.location.hostname === 'alura-geek-9jd1bboe0-larissa-s-castros-projects.vercel.app') {
    API_BASE_URL = "https://e028-2804-d55-8faa-1400-21f2-be3c-37eb-eed.ngrok-free.app";
}

export { API_BASE_URL };
