import React, { useState } from 'react';
import { CategoryComponent } from './components/CategoryComponent';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Family Guy']);

  return (
    <>
      <h2> GifExpertApp </h2>
      <CategoryComponent setCategories={ setCategories } />
      <hr />

      <ol>
        {
            categories.map( category => {
                return <GifGrid key={ category } category={ category } />;
            })
        }
      </ol>
    </>
  );

}
