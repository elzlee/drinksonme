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
          <div className="subtitle">select a category:</div>
        </div>

        <div className="pagebody-bottom">
          <CategoryCircle
            categoryName = "Spirits"
            id = "hidden-checkbox-1"
            top = "25%"
            left = "15%"
            className = "spiritsCircle"/>
 
          <CategoryCircle
            categoryName = "Liqueurs"
            id = "hidden-checkbox-2"
            top = "25%"
            left = "40%"/>

          <CategoryCircle
            categoryName = "Wines & Champagnes"
            id = "hidden-checkbox-3"
            top = "25%"
            left = "65%"/>

          <CategoryCircle
            categoryName = "Beers & Ciders"
            id = "hidden-checkbox-4"
            top = "65%"
            left = "15%"/>

          <CategoryCircle
            categoryName = "Mixers"
            id = "hidden-checkbox-5"
            top = "65%"
            left = "40%"/>

          <CategoryCircle
            categoryName = "Other"
            id = "hidden-checkbox-6"
            top = "65%"
            left = "65%"/>
        </div>
      </div>
    );

    
  }
}

export default CategoriesPage
