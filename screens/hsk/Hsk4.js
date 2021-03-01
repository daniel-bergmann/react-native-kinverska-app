import React from 'react';
import { Text, Button, StyleSheet, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

// Components
import ArticleModal from '../../components/ArticleModal';

// data
import { a1, a2, a3 } from '../../components/data/Hsk4Data';

function Hsk4() {
  return (
    <>
      <ScrollStyling>
        <ScrollStylingWrapper>
          <ArticleModal data={a2} titleCn='压力多不多?' />
          <ArticleModal data={a3} titleCn='你有没有微信支付呢?' />
          <ArticleModal data={a1} titleCn='这里是我的名片' />
        </ScrollStylingWrapper>
      </ScrollStyling>
    </>
  );
}

export default Hsk4;

const ScrollStyling = styled.View``;
const ScrollStylingWrapper = styled.View`
  display: flex;
  flex-direction: row;
  max-height: 220px;
  overflow-x: auto;
`;
