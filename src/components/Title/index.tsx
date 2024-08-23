import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TitleProps } from '../../types/ComponentTypes';
import style from './styles';

const Title = ({title}: TitleProps) => {
  return (
    <View>
      <Text style={style.title}>{title}</Text>
    </View>
  );
};

export default Title;

