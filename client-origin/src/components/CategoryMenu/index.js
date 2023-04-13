import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();
  // ❄️ MX: check for currentCategory
  // console.log('state.currentCategory - CategoryMenu', state.currentCategory);

  // ❄️ MX: added currentCategory to the destructuring assignment
  const { categories, currentCategory } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    // ❄️ MX: added storeCategories() function
    const storeCategories = async (categories) => {
      await Promise.all(categories.map(category => idbPromise('categories', 'put', category)));
      dispatch({
        type: UPDATE_CATEGORIES,
        categories,
      });
    };

    if (categoryData) {
      storeCategories(categoryData.categories);
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories || [],
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div>
      <h2>Choose a Category:</h2>
      {/* ❄️ MX: changed mapping parameters */}
      {categories.map((category) => (
        <button
          key={category._id}
          onClick={() => {
            handleClick(category._id);
          }}
          className={`btn ${currentCategory === category._id && 'active'}`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;