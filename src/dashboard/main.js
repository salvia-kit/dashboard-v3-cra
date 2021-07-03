import React from 'react';

// we are using memo to prevent unnecessary re render
function Main({ children, className }) {
  return <main className={className}>{children}</main>;
}

export default React.memo(Main);
