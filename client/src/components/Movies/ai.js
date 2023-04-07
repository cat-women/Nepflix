import React from 'react';

const ScrollableDivWithScrollbar = () => {
  return (
    <div
      style={{
        whiteSpace: 'nowrap',
        overflowX: 'auto',
        height: '200px',
        position: 'relative'
      }}
    >
      {Array.from(Array(10).keys()).map(i =>
        <div
          key={i}
          style={{
            display: 'inline-block',
            minWidth: '200px',
            margin: '0 10px'
          }}
        >
          <h2>
						Item {i + 1}
          </h2>
          <p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua.
          </p>
        </div>
      )}
      <div
        style={{
          height: '5px',
          backgroundColor: 'gray',
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0'
        }}
      />
    </div>
  );
};

export default ScrollableDivWithScrollbar;
