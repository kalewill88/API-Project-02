
const URL = 'https://api.giphy.com/v1/gifs/search?api_key=lNY8O9BNw8rneCznqIenVs5AThyTyWfd&q=funny&limit=50&offset=0&rating=pg&lang=en';
const key = 'lNY8O9BNw8rneCznqIenVs5AThyTyWfd';

//GIF-GRID


import { Gif } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
// use @giphy/js-fetch-api to fetch gifs, instantiate with your api key
const gf = new GiphyFetch(key)
// configure your fetch: fetch 10 gifs at a time as the user scrolls (offset is handled by the grid)
//const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 })
// Render the React Component and pass it your fetchGifs as a prop
//ReactDOM.render(<Grid width={800} columns={3} fetchGifs={fetchGifs} />, target)
const {data: gifs} = await gf.trending({ limit: 10})