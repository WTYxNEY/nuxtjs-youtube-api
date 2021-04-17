import axios from 'axios'
const KEY = 'AIzaSyAh23emfysRxSIOSc9Mzs9ba3LekBTi2Kg'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 6,
        key: KEY,
    }
})
