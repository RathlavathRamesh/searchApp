// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: '', userDetails: this.props}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput, userDetails} = this.state
    return (
      <div className="searchContainer">
        <h1 className="heading">Destination Search</h1>
        <div className="searchicon">
          <input
            type="search"
            placeholder="Search"
            className="search"
            onChange={this.onChangeSearchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
            alt="search icon"
            className="icon"
          />
        </div>
        <ul className="items">
          {destinationsList.map(eachuser => (
            <DestinationItem Details={eachuser} key={eachuser.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
