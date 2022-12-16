import React, { Component } from 'react';
import '../../categoryCircle.css';

class CategoryCircle extends Component {
  
  /*
  const handleClick = () => {
    window.location.href = '/my-page';
  };
*/


  render() {
    return (
      <div className="CategoryCircle-container">
        <a href="">
          <input id={this.props.id} type="checkbox"></input>
          <label htmlFor={this.props.id} style={{top: this.props.top, left:this.props.left}}>
            <div className="categoryName" >{this.props.categoryName}</div>
          </label>        
        </a>
      </div>
    );

    
  }
}

export default CategoryCircle

