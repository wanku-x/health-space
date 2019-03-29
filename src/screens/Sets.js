import React from 'react';
import { StatusBar, Platform, StyleSheet } from 'react-native';
import {
  Body,
  Container,
  Content,
  Icon,
  Separator,
  Right,
  Text,
  Button,
  ListItem,
} from 'native-base';

import setsArray from '../variables/setsArray';

const styles = StyleSheet.create({
  content: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
});

const Sets = ({ navigation }) => (
  <Container>
    <Content style={styles.content}>
      <Separator bordered>
        <Text>ПРОСТЫЕ КОМПЛЕКСЫ</Text>
      </Separator>
        <ListItem
          onPress={() => navigation.navigate('Set1')}
        >
          <Body>
            <Text>Разминка (50 ккал)</Text>
            <Text note numberOfLines={1}>Легкая разминка для утренней зарядки или подготовки к тренировке.</Text>
          </Body>
          <Right>
            <Icon active name="md-arrow-round-forward" style={{fontSize: 30, color: '#007aff'}} />
          </Right>
        </ListItem>
        <ListItem
           onPress={() => navigation.navigate('Set2')}
        >
          <Body>
            <Text>Интенсивная разминка (75 ккал)</Text>
            <Text note numberOfLines={1}>Более интенсивный вариант разминки.</Text>
          </Body>
        <Right>
          <Icon active name="md-arrow-round-forward" style={{fontSize: 30, color: '#007aff'}} /> 
        </Right>
        </ListItem>
        <Separator bordered>
          <Text>КОМПЛЕКСЫ ДЛЯ ТРЕНАЖЕРНОГО ЗАЛА</Text>
        </Separator>
        <ListItem
         onPress={() => navigation.navigate('Set3')}
        >
          <Body>
            <Text>Комплекс для мужчин (270 ккал)</Text>
            <Text note numberOfLines={1}>
            Комплекс для начинающих в тренажерном зале, направленный на общую физическую подготовку. Требует разминки до и заминки после выполнения комплекса
            </Text>
          </Body>
        <Right>
          <Icon active name="md-arrow-round-forward" style={{fontSize: 30, color: '#007aff'}} /> 
        </Right>
        </ListItem>
        <ListItem
          onPress={() => navigation.navigate('Set3')}
        >
          <Body>
            <Text>Комплекс для женщин (310 ккал)</Text>
            <Text note numberOfLines={1}>Интенсивный комплекс для начинающих в тренажерном зале, направленный на общую физическую подготовку. Требует разминки до и заминки после выполнения комплекса
            </Text>
          </Body>
        <Right>
          <Icon active name="md-arrow-round-forward" style={{fontSize: 30, color: '#007aff'}} /> 
        </Right>
        </ListItem>
        <Separator bordered>
          <Text>ДРУГИЕ КОМПЛЕКСЫ</Text>
        </Separator>
        <ListItem
         onPress={() => navigation.navigate('Set4')}
        >
          <Body>
            <Text>Табата (53 ккал)</Text>
            <Text note numberOfLines={1}>
            Вариант быстрой, но интенсивной тренировки, разгоняющей метаболизм. Требует разминки до и заминки после выполнения комплекса
            Каждое упражнение выполняется в течение 20 секунд, затем наступает перерыв 10 секунд, после происходит переход к следующему упражнению, общее время выполнения 4 минуты.
            </Text>
          </Body>
        <Right>
          <Icon active name="md-arrow-round-forward" style={{fontSize: 30, color: '#007aff'}} /> 
        </Right>
        </ListItem>
        <ListItem
          onPress={() => navigation.navigate('Set4')}
        >
        <Body>
          <Text>Синди (260 ккал)</Text>
          <Text note numberOfLines={1}>
          Простой, но эффективный комплекс, направленный на жиросжигание и ускорение метаболизма. Требует разминки до и заминки после выполнения комплекса
          Цикл упражнений выполняется максимально возможное количество раз в течение 20 минут.
          </Text>
        </Body>
        <Right>
          <Icon active name="md-arrow-round-forward" style={{fontSize: 30, color: '#007aff'}} /> 
        </Right>
        </ListItem>
        <ListItem
          onPress={() => navigation.navigate('Set4')}
        >
        <Body>
          <Text>Комплекс на разные группы мышц (208 ккал)</Text>
          <Text note numberOfLines={1}>
          Комплекс, направленный на проработку различных групп мышц. Требует разминки до и заминки после выполнения комплекса
          Каждое упражнение выполняется в течение 30 секунд без перерыва.
          </Text>
        </Body>
        <Right>
          <Icon active name="md-arrow-round-forward" style={{fontSize: 30, color: '#007aff'}} /> 
        </Right>
        </ListItem>
    </Content>
  </Container>
);

export default Sets;
