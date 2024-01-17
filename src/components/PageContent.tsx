import React from 'react';

interface Props {
  title: string;
  children: React.ReactNode;
}

const PageContent: React.FC<Props> = ({ title, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default PageContent;