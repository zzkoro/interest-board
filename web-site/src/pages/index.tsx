import React, { FunctionComponent } from 'react';
import Text from '../components/Text';
import Slide from '../components/Slide';
import { css } from '@emotion/react';

const IndexPage: FunctionComponent = function () {
  // return <Text text="Home" />

  return (
    <div
      css={css`
        text-align: center;
        border-top: 1px solid #aaa;
        padding-top: 40px;
        padding-bottom: 60px;
      `}
    >
      <h1>이자 보드</h1>
      <Slide title="정기예금 현황">
        <b>정기예금 이자 현황을 보여줍니다.</b>
      </Slide>
      <Slide title="정기적금 현황">정기적금 이자 현황을 보여줍니다.</Slide>
    </div>
  );
};

export default IndexPage;
