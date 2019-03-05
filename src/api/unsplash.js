import axios from 'axios';

export default axios.create({
      baseURL: 'https://api.unsplash.com/',
      headers: {
            Authorization: 'Client-ID f54fc9fe0b91157a7522878f6d88efa206cc3d897836d08b2dafcc36615f4ca5'
      }
});
