import './BookButton.css'
import React from 'react'

export default class BookButton extends React.Component {
  openBookingNewTab = () => {
    window.open('https://book-directonline.com/properties/avatararesortdirect')
  }
  render(){
    return (
      <div className="book-button">
        <h5 onClick={this.openBookingNewTab}> Book Now</h5>
      </div>
    );
  }
}
