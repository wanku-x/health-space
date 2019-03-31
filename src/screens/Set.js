import React from 'react';
import styled from 'styled-components/native';
import { StatusBar, Platform, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Body } from 'native-base';

import RoundButton from '../components/RoundButton';
import { writeCompletedSet } from '../utils/storage';

const styles = StyleSheet.create({
  content: {
    paddingTop: 36,
    backgroundColor: '#F8F8F8'
  }
});

const ButtonWrap = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

const Title = styled.Text`
  padding: 24px 16px 0;
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
    started: false,
    finishDisabled: true
  };

  handleStart = () => {
    this.setState({ started: true });

    /* предотвращение случайного нажатия на кнопку "Готово", которая появляется вместо "Начать"  */
    setTimeout(() => this.setState({ finishDisabled: false }), 2000)
  }

  handleFinish = () => {
    const { navigation } = this.props;
    const set = navigation.getParam('set');

    writeCompletedSet({ id: set.id, completedAt: new Date() });

    navigation.goBack();
  };

  render() {
    const { navigation } = this.props;
    const { started, finishDisabled } = this.state;
    const set = navigation.getParam('set');

    return (
      <Container>
        <Content style={styles.content} bounces={false}>
          <Card>
            <CardItem header>
              <Body>
                <Title>{set.name}</Title>
                <Description>{set.discription}</Description>
              </Body>
            </CardItem>
            <CardItem>
              <Message>
                {started
                  ? 'Выполни упражнение и нажми «Готово»'
                  : 'Давай начнём упражнение!'}
              </Message>
            </CardItem>
            <CardItem footer>
              <ButtonWrap>
                {started ? (
                  <RoundButton
                    disabled={finishDisabled}
                    onPress={this.handleFinish}
                  >
                    Готово!
                  </RoundButton>
                ) : (
                  <RoundButton onPress={this.handleStart}>Начать</RoundButton>
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
