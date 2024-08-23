import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Title from '../Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import style from './styles';

const Home = () => {
  return (
    <View style={style.container}>
      <Title title="Let’s Explore" />
      <TouchableOpacity style={style.messaging}>
        <FontAwesomeIcon icon={faEnvelope} color="#898DAE" />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
