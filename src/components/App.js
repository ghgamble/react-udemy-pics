import React, {Component} from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
// import ImageList from './ImageList';

class App extends Component {
      async onSearchSubmit(term) {
            // console.log(term);
            const response = await axios.get('https://api.unsplash.com/search/photos', {
                  params: { query: term },
                  headers: {
                        Authorization: 'Client-ID f54fc9fe0b91157a7522878f6d88efa206cc3d897836d08b2dafcc36615f4ca5'
                  }
            });
            console.log(response.data.results);
      }
      render() {
            return (
                  <div className="ui container" style={{ marginTop: '10px' }}>
                        <SearchBar onSubmit={this.onSearchSubmit} />
                  </div>
            );
      }
}

export default App;
