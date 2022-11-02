import React from 'react'
import { CategoriesList } from '../components/categories-list';
import { CategoriesItem } from '../components/categories-list/category-item';


export const Categories = () => {
    return (
      <div>
        <CategoriesList/>
        <CategoriesItem/>
      </div>
    );
  };

export default Categories