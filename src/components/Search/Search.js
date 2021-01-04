import { React, Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      isLoading: false
    }
  }

  onChange(event) {
    const { target: { value } } = event;
    this.updateState(value, false)
  }

  updateState(query, isLoading) {
    this.setState({
      query,
      isLoading
    });
  }

  onSearch() {
    const { query } = this.state;
    this.updateState(query, true);
    fetch(`http://www.omdbapi.com/?apikey=ed65566c&s=${query}`)
      .then(res => res.json())
      .then((data) => {
        const { updateResults } = this.props;
        data.Response ? updateResults(data.Search) : updateResults([]);
        this.updateState('', false);
      });
  }

  render() {
    const { query, isLoading } = this.state;
    return (
      <div className="columns">
        <div className="column is-9">
          <div className="control">
            <input className="input is-fullwidth is-rounded" type="text" placeholder="Search your media..." value={query}
                   onChange={this.onChange.bind(this)} disabled={isLoading}/>
          </div>
        </div>
        <div className="column is-3">
          <div className="control">
            <button className={`button is-rounded is-primary is-fullwidth ${isLoading ? 'is-loading' : ''}`}
                    disabled={query === ''}
                    onClick={this.onSearch.bind(this)}>
              <strong>Search</strong>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;