import React, { Component } from 'react';
import '../../categoryCircle.css';

class CategoryCircle extends Component {
  
  render() {
    return (
      <div className="CategoryCircle-container">
          
          <input id="hidden-checkbox" type="checkbox"></input>
          <label htmlFor="hidden-checkbox" style={{background: this.props.color, top: this.props.top, left:this.props.left}}>
            <div className="categoryName" >{this.props.categoryName}</div>
          </label>        

      </div>
    );

    
  }
}

export default CategoryCircle

