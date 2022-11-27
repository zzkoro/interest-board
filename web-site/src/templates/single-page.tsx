import React, { FunctionComponent } from 'react';
import Slide from '../components/Slide';

interface Props {
  pageContext: PageContext;
  location: Location;
}

interface PageContext {
  dataSource: DataSource;
}

interface DataSource {
  thirdSlideTitle: string;
}

const SinglePage: FunctionComponent<Props> = function ({ pageContext }) {
  const { dataSource } = pageContext;
  const { thirdSlideTitle } = dataSource;

  console.log(location);

  return (
    <div>
      <h1>이자 보드 Home</h1>
      <p>createPage로 만들어진 페이지입니다.</p>
      <Slide title="정기예금현황">정기예금 현황을 보여줍니다.</Slide>
      <Slide title="적금현황">적금 현황을 보여줍니다.</Slide>
      <Slide title={thirdSlideTitle}>세번째 타이틀입니다.</Slide>
    </div>
  );
};

export default SinglePage;
