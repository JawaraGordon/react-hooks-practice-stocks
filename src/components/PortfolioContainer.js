import React from 'react';
import Stock from './Stock';

function PortfolioContainer({ stocks, handleRemoveStock }) {
  console.log(stocks);

  return (
    <div>
      <h2>My Portfolio</h2>
      <ul>
        {stocks.map((stock) => (
          <Stock
            key={stock.id}
            stock={stock}
            onStockClick={handleRemoveStock}
          />
        ))}
      </ul>
    </div>
  );
}

export default PortfolioContainer;
