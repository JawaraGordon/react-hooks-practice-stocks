import React from 'react';
import Stock from './Stock';

function StockContainer({ stocks, handleAddStock }) {
  console.log(handleAddStock);
  return (
    <div>
      <h2>Stocks</h2>
      <ul>
        {stocks.map((stock) => (
          <Stock key={stock.id} stock={stock} onStockClick={handleAddStock} />
        ))}
      </ul>
    </div>
  );
}

export default StockContainer;
