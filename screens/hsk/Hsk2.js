import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

// Components
import ArticleModal from '../../components/ArticleModal';

// data
import {
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
} from '../../components/data/Hsk2Data';

function Hsk2() {
  return (
    <>
      <ScrollStyling>
        <ScrollStylingWrapper>
          <ArticleModal data={a6} titleCn='你会游泳吗?' />
          <ArticleModal data={a2} titleCn='新老师' />
          <ArticleModal data={a3} titleCn='帮助我找一找' />
          <ArticleModal data={a4} titleCn='来一杯美式咖啡' />
          <ArticleModal data={a1} titleCn='拍照片' />
        </ScrollStylingWrapper>
        <ScrollStylingWrapper>
          <ArticleModal data={a5} titleCn='我今天去逛街了' />
          <ArticleModal data={a7} titleCn='市中心' />
          <ArticleModal data={a8} titleCn='你忙不忙?' />
          <ArticleModal data={a9} titleCn='生日礼物' />
          <ArticleModal data={a10} titleCn='上班族' />
        </ScrollStylingWrapper> 
      </ScrollStyling>
    </>
  );
}

export default Hsk2;

const ScrollStyling = styled.View``;
const ScrollStylingWrapper = styled.View`
  display: flex;
  flex-direction: row;
  max-height: 220px;
  overflow-x: auto;
`;
