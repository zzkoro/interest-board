import React, { FunctionComponent } from 'react';

type SlideProps = {
  title: string;
  children: React.ReactNode;
};

const Slide: FunctionComponent<SlideProps> = function (props) {
  const { title, children } = props;

  console.log(children);

  return (
    <div>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Slide;
