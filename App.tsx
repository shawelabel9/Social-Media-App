import {  SafeAreaView,  TouchableOpacity, View } from 'react-native';
import React from 'react';
import Title from './src/components/Title';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <SafeAreaView>
      <View style= {{flexDirection:'row', alignItems:'center',justifyContent:'space-between',marginTop:20,marginLeft:26,marginRight:17}}>
        <Title title="Let’s Explore" />
        <TouchableOpacity style={{padding:14,backgroundColor:'#F9FAFB',borderRadius:100}}>
          <FontAwesomeIcon icon={faEnvelope} color="#898DAE"/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
