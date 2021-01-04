import { React, Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    }
  }

  onChange(event) {
    const { target: { value } } = event;
    this.setQuery(value)
  }

  setQuery(query) {
    this.setState({
      query
    });
  }

  onSearch() {
    const { query } = this.state;
    fetch(`http://www.omdbapi.com/?apikey=ed65566c&s=${query}`)
      .then(res => res.json())
      .then((data) => {
        const { updateResults } = this.props;

        data.Response ? updateResults(data.Search) : updateResults([]);
      });
    this.setQuery('');
  }

  render() {
    const { query } = this.state;
    return (
      <div className="columns mt-2">
        <div className="column is-9">
          <div className="control">
            <input className="input is-fullwidth" type="text" placeholder="Search your movie..." value={query}
                   onChange={this.onChange.bind(this)}/>
          </div>
        </div>
        <div className="column is-3">
          <div className="control">
            <button className="button is-primary is-fullwidth" onClick={this.onSearch.bind(this)}>
              <strong>Search</strong>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;