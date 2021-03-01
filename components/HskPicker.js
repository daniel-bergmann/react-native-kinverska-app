import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { Text, Button, StyleSheet, View, TouchableOpacity } from 'react-native';

function HskPicker(props) {
  const [content, setContent] = useState(props.data);
  const navigation = useNavigation();
  return (
    <>
      {content.map((i) => {
        return (
          <Container>
            <WrapperContainer>
              <TouchableOpacity
                title={i.title}
                onPress={() => navigation.push(i.url)}
              >
                <Textbox>{i.title}</Textbox>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.push(i.url)}>
                <SideText>{i.about}</SideText>
                <SideText>{i.charCount}</SideText>
              </TouchableOpacity>
            </WrapperContainer>
          </Container>
        );
      })}
    </>
  );
}

export default HskPicker;

// Styled components
const Container = styled.View`
  flex-direction: row;
  margin: 40px;
  align-items: center;
  justify-content: center;
  align-items: center;
`;

// Added this layer to center all the elements
const WrapperContainer = styled.View`
  flex-direction: row;
  width: 200px;
`;

const Textbox = styled.Text`
  /* Flexbox */
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* Other */
  text-align: center;
  color: #333;
  padding: 40px 30px 40px 30px;
  border-radius: 9px;
  font-weight: bold;
  border: 2px solid #e5e5e5;
  font-family: monospace;
`;

const SideText = styled.Text`
  /* Flexbox */
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* Other */
  color: #333;
  padding: 10px;
  font-family: monospace;
`;
