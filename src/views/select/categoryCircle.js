import React, { Component } from 'react';
import '../../categoryCircle.css';

class CategoryCircle extends Component {
  
  render() {
    return (
      <div className="CategoryCircle-container">
          
          <input id={this.props.id} type="checkbox"></input>
          <label htmlFor={this.props.id} style={{top: this.props.top, left:this.props.left}}>
            <div className="categoryName" >{this.props.categoryName}</div>
          </label>        

      </div>
    );

    
  }
}

export default CategoryCircle

