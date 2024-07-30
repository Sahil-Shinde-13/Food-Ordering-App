import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 5000;


app.use(cors({
    origin: 'https://food-ordering-c8jepd8yo-sahils-projects-0c93b532.vercel.app/' // Your front-end production URL
  }));

app.get('/', (req, res) => {
    res.send('Welcome to the API server!');
});

app.get('/api/home', async (req, res) => {
    try {
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING', {
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            const errorBody = await response.text();
            console.error(`Network response was not ok: ${response.statusText}. Response body: ${errorBody}`);
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/api/menu/:resId', async (req, res) => {
    const { resId } = req.params;
    try {
        const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`, {
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            const errorBody = await response.text();
            console.error(`Network response was not ok: ${response.statusText}. Response body: ${errorBody}`);
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
