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
  a6,
  a7,
  a8,
  a9,
  a10,
} from '../../components/data/Hsk1Data';

function Hsk1() {
  return (
    <>
      <ScrollStyling>
        <ScrollStylingWrapper>
          <ArticleModal data={a6} titleCn='你会游泳吗?' />
          <ArticleModal data={a2} titleCn='去逛街' />
          <ArticleModal data={a3} titleCn='外卖' />
          <ArticleModal data={a4} titleCn='南京火车站' />
        </ScrollStylingWrapper>
        <ScrollStylingWrapper>
          <ArticleModal data={a5} titleCn='红包来了！' />
          <ArticleModal data={a7} titleCn='你能帮我吗?' />
          <ArticleModal data={a8} titleCn='在北京路游' />
          <ArticleModal data={a9} titleCn='秋天的日子' />
        </ScrollStylingWrapper>
        <ScrollStylingWrapper>
          <ArticleModal data={a10} titleCn='狗追猫' />
          <ArticleModal data={a1} titleCn='你会游泳吗?' />
        </ScrollStylingWrapper>
      </ScrollStyling>
    </>
  );
}

export default Hsk1;

const ScrollStyling = styled.View``;
const ScrollStylingWrapper = styled.View`
  display: flex;
  flex-direction: row;
  max-height: 220px;
  overflow-x: auto;
`;
