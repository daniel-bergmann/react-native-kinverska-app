import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'modal-react-native-web';
import { ScrollView } from 'react-native-gesture-handler';

const ArticleModal = (props) => {
  // Open close for the modal
  const [modalOpen, setModalOpen] = useState(false);
  const [content, setContent] = useState(props.data);
  const [isSimp, setIsSimp] = useState(true);
  const [hidePin, setHidePin] = useState(false);
  // Change the hanzi in the buttons
  const [hanzi, setHanzi] = useState('汉字');
  const [wupin, setWuPin] = useState('无拼音');

  // Writing out the logic as the user demands.
  // This is for removing the pinyin if one pleases
  const handleClick = (e) => {
    setHidePin(!hidePin);
    wupin === '无拼音' ? setWuPin('拼音') : setWuPin('无拼音');
  };

  // This is for swapping between traditional and simplified hanzi
  const handleClick2 = (e) => {
    setIsSimp(!isSimp);
    if (hanzi === '汉字') {
      setHanzi('漢字');
    } else {
      setHanzi('汉字');
    }
  };

  return (
    <>
      <View>
        {/* Content inside the Modal */}
        <Modal animationType='slide' transparent={false} visible={modalOpen}>
          <ModalContainer>
            <ScrollView style={{ width: '100%' }}>
              <LineContainer>
                <Line />
              </LineContainer>
              <TextWrapper>
                <TextHeading>{props.titleCn}</TextHeading>
                {content.map((i) => {
                  return (
                    <>
                      <Hanzi>{isSimp ? i.simp : i.trad}</Hanzi>
                      <Pinyin>{hidePin ? '' : i.pin}</Pinyin>
                    </>
                  );
                })}
              </TextWrapper>
              {/* Buttons */}
              <ButtonWrapper>
                {/* Pinyin and fantizi toggler */}
                <ToggleButtonWrapper>
                  <ToggleButton onPress={handleClick2}>{hanzi}</ToggleButton>
                  <ToggleButton onPress={handleClick}>{wupin}</ToggleButton>
                </ToggleButtonWrapper>
                <CloseModalButton onPress={() => setModalOpen(false)}>
                  Loka
                </CloseModalButton>
              </ButtonWrapper>
            </ScrollView>
          </ModalContainer>
        </Modal>

        {/* Button to open the modal */}
        <WrapperContainer>
          <TextBox onPress={() => setModalOpen(true)}>{props.titleCn}</TextBox>
        </WrapperContainer>
      </View>
    </>
  );
};

// Styled components

// styling outside the modal

const ModalContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #e8e8e8;
  top: 30px;
  border-radius: 25px;
`;

const LineContainer = styled.View`
  width: 100%;
`;

const Line = styled.View`
  margin: 0 auto;
  align-items: center;
  background: #b8b8b8;
  height: 5px;
  width: 50%;
  border-radius: 11px;
`;

// Styling fo individual button outside the modal
const WrapperContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  margin-top: 20px;
`;

const TextBox = styled.TouchableOpacity`
  /* Flexbox */
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* Other */
  text-align: center;
  color: #333;
  padding: 45px 35px 45px 35px;
  border-radius: 9px;
  font-weight: bold;
  border: 2px solid #e5e5e5;
  font-family: monospace;
`;

// This is the styling inside the modal

const ButtonWrapper = styled.View`
  width: 100%;
`;

const ToggleButtonWrapper = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;
const ToggleButton = styled.TouchableOpacity`
  text-align: center;
  padding: 20px;
  border: 2px #b8b8b8 solid;
  margin: 5px;
  border-radius: 11px;
  width: 49%;
`;

const TextWrapper = styled.View`
  justify-content: center;
  align-items: flex-start;
  margin: 20px;
`;

const TextHeading = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin: 10px auto;
  color: #333;
`;

const Hanzi = styled.Text`
  font-size: 20px;
  text-align: left;
  color: #333;
`;

const Pinyin = styled.Text`
  font-size: 16px;
  color: #333;
`;

const CloseModalButton = styled.TouchableOpacity`
  text-align: center;
  padding: 20px;
  border: 2px #b8b8b8 solid;
  border-radius: 11px;
  width: 100%;
  font-weight: bold;
  font-family: monospace;
  color: #333;
  /* Added margin bottom because of the top in the parent View */
  margin-bottom: 30px;
  margin-top: 5px;
`;

export default ArticleModal;
