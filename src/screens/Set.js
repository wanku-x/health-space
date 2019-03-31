import React from 'react';
import styled from 'styled-components/native';
import { StatusBar, Platform, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Body } from 'native-base';

import RountButton from '../components/RoundButton';
import { writeCompletedSet } from '../utils/storage';

const styles = StyleSheet.create({
  content: {
    paddingTop: Platform.OS === 'ios' ? 15 : StatusBar.currentHeight + 15,
    backgroundColor: '#F8F8F8'
  }
});

const ButtonWrap = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

const Title = styled.Text`
  padding: 0 16px;
  font-size: 30px;
  font-weight: bold;
`;

const Description = styled.Text`
  padding: 16px;
  font-size: 16px;
`;

const Message = styled.Text`
  padding: 0 16px;
  font-size: 14px;
  font-weight: bold;
`;

class Set extends React.Component {
  state = {
    started: false
  };

  handleStart = () => this.setState({ started: true });

  handleFinish = () => {
    const { navigation } = this.props;
    const set = navigation.getParam('set');

    writeCompletedSet({ id: set.id, completedAt: new Date() });

    navigation.goBack();
  };

  render() {
    const { navigation } = this.props;
    const { started } = this.state;
    const set = navigation.getParam('set');

    return (
      <Container>
        <Content style={styles.content} bounces={false}>
          <Card>
            <CardItem header>
              <Title>{set.name}</Title>
            </CardItem>
            <CardItem>
              <Body>
                <Description>{set.discription}</Description>
              </Body>
            </CardItem>
            <CardItem>
              <Message>Давай начнём упражнение!</Message>
            </CardItem>
            <CardItem footer>
              <ButtonWrap>
                {started ? (
                  <RountButton onPress={this.handleFinish}>Готово!</RountButton>
                ) : (
                  <RountButton onPress={this.handleStart}>Начать</RountButton>
                )}
              </ButtonWrap>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default Set;
