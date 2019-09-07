import React, { Component } from 'react';
import {Dimensions, StyleSheet, Text, View, ColorPropType} from 'react-native';
import { colors, Icon, Button, Header } from 'react-native-elements';

export default class App extends Component{ 
  render(){
    return (

      <View style={styles.all}>
        <Header    barStyle="dark-content" // or directly 3D6DCC
          centerComponent={{ text: 'Vehiculos', style: { fontSize: 16, fontWeight: '700', color: '#fff' } }}
          containerStyle={{
            height: 60,
            backgroundColor: '#FFFFFF',
            justifyContent: 'space-around',
          }}
          centerContainerStyle={{
            marginBottom: 20
          }}></Header>

          <Text>  </Text>
      </View>

    );

  }
}


const styles = StyleSheet.create({
  all: {
    backgroundColor: '#FFFFFF',
    height: Dimensions.get('window').height
  },
  head: {
    backgroundColor: '#000000',
    height: 50, 
    justifyContent: 'flex-start',
  },
  body: {
    flex: 8,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start' 
  },
  pie: {
    backgroundColor: 'green',
    justifyContent: 'flex-start',
    height: 90
  },
  add: {
    backgroundColor: '#000000',
    justifyContent: 'flex-start',
    height: 165,
    backgroundColor: '#FFF',
    borderColor: '#000000',
    margin: 2,
  }
});
