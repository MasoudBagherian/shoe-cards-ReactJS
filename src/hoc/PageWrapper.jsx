import React from 'react';

const PageWrapper = (props) => {
  return (
    <div className="outer-container">
      <div className="inner-container">{props.children}</div>
    </div>
  );
};

export default PageWrapper;
