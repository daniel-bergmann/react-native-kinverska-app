import React from 'react';
import { Text, Button, StyleSheet, View, TouchableOpacity } from 'react-native';
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
} from '../../components/data/Hsk3Data';

function Hsk3() {
  return (
    <>
      <ScrollStyling>
        <ScrollStylingWrapper>
          <ArticleModal data={a2} titleCn='我好像发烧了' />
          <ArticleModal data={a3} titleCn='我的姑姑很聪明' />
          <ArticleModal data={a4} titleCn='去日本出差' />
          <ArticleModal data={a1} titleCn='你养过宠物吗' />
        </ScrollStylingWrapper>
        <ScrollStylingWrapper>
          <ArticleModal data={a5} titleCn='被老师吓死了' />
        </ScrollStylingWrapper>
      </ScrollStyling>
    </>
  );
}

export default Hsk3;

const ScrollStyling = styled.View``;
const ScrollStylingWrapper = styled.View`
  display: flex;
  flex-direction: row;
  max-height: 220px;
  overflow-x: auto;
`;
