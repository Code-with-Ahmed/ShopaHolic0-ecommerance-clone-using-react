import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => { 
  const { ItemName } = useParams();
  return (
    <div>
      <h1 className="text-4xl text-center mt-60 font-bold">Yes it is a Page of {ItemName}</h1>
    </div>
  )
}

export default ItemDetail;
