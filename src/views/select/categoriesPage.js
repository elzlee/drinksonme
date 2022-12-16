import React, { Component } from 'react';
import '../../categoriesPage.css';
import CategoryCircle from './categoryCircle';

//import  from './';

class CategoriesPage extends Component {
  
  render() {
    return (
      <div CategoriesPage-container>
        <div className="header-top">
          <div className="title">what do you have?</div>
          <div className="subtitle">select a category</div>
        </div>

        <div className="pagebody-bottom">
          <CategoryCircle
            categoryName = "Spirits"
            top = "25%"
            left = "15%"
            className = "spiritsCircle"/>
 
          <CategoryCircle
            categoryName = "Liqueurs"
            top = "25%"
            left = "40%"/>

          <CategoryCircle
            categoryName = "Wines & Champagnes"
            top = "25%"
            left = "65%"/>

          <CategoryCircle
            categoryName = "Beers & Ciders"
            top = "65%"
            left = "15%"/>

          <CategoryCircle
            categoryName = "Mixers"
            top = "65%"
            left = "40%"/>

          <CategoryCircle
            categoryName = "Other"
            top = "65%"
            left = "65%"/>
        </div>
      </div>
    );

    
  }
}

export default CategoriesPage
