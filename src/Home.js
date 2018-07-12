/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  KeyboardAvoidingView 
} from 'react-native';




type Props = {};
export default class App extends Component<Props> {

  static navigationOptions = { header: null }

  constructor(props) {
    super(props)
    this.state = {
      no_order: null
    }
  }

  

  render() {
    return (
      <View style={styles.Container}>
        <Image
          style={{marginBottom: 20, alignSelf: 'center'}}
          source={require('./../src/img/wasd.png')}
        />
        <TextInput
          style={styles.TextInput}
          placeholder='Id Order' 
          onChangeText={(no_order) => this.setState({no_order})} 
          value={this.state.no_order}
          underlineColorAndroid='transparent'
        />       
        <Button
          style={{marginTop: 20}}
          onPress= { () => this.props.navigation.navigate('ResultPage', {no_order: this.state.no_order}) }
          // onPress= { () =>alert(this.state.no_order) }
          title="CARI"
          color='blue'
        />
      </View>

      // <KeyboardAvoidingView behaviour="padding">
      //   <Image
      //     style={{marginBottom: 40, alignSelf: 'center'}}
      //     source={require('./../src/img/wasd.png')}
      //   />

      //   <TextInput
      //     style={styles.TextInput}
      //     placeholder='#Tracking Code'
      //     underlineColorAndroid='transparent'
      //   />

      //   <Button
      //     style={{marginTop: 20,marginRight: 15,marginLeft: 15}}
      //     onPress= {this.Profile}
      //     title="Track Now"
      //     color='blue'
      //   />

      // </KeyboardAvoidingView>
      
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center', 
    padding: 20
  },
  TextInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 20
  }
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   TextInput: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 10,
//     marginRight: 15,
//     marginLeft: 15,
//     paddingLeft: 20
//   }
  


