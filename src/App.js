import './App.scss';
import { React, Component } from 'react';
import Search from "./components/Search/Search";
import Media from "./components/Media/Media";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: [],
    }
  }

  updateSearchResutls(results) {
    this.setState({
      search: results && results.length ? results : []
    });
  }

  toggleMediaSelection(mediaId, selected) {
    this.setState(function (state) {
      const { search } = state;
      const addedMediaIndex = search.findIndex(media => media.imdbID === mediaId);
      search[addedMediaIndex].selected = selected
      return {
        search
      }
    })
  }

  render() {
    const { search } = this.state;
    return (
      <div className="App section">
        <div className="container">
          <Search updateResults={this.updateSearchResutls.bind(this)}/>
          <div className="columns is-multiline">
            {
              search.map((media) => {
                return (
                  <Media media={media} onMediaClick={this.toggleMediaSelection.bind(this)} key={media.imdbID}/>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }


}

export default App;
