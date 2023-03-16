// Write your code here
import './index.css'
import {Component} from 'react'

class DestinationItem extends Component {
  render() {
    const {Details} = this.props
    const {name, imgUrl} = Details
    return (
      <li className="item">
        <img src={imgUrl} alt={name} className="images" />
        <h1 className="name-style">{name}</h1>
      </li>
    )
  }
}
export default DestinationItem
