let API_BASE_URL = "http://localhost:3000"; 

if (process.env.NODE_ENV === 'production') {
    API_BASE_URL = "https://alura-geek-9km3odcr1-larissa-s-castros-projects.vercel.app/";
}

export { API_BASE_URL };
