import React, { Component } from 'react';
import Timeline from 'react-native-timeline-listview';
import { Toolbar } from 'react-native-material-ui';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Buttons
} from 'react-native';
import api from './api/api'

export default class App extends Component<Props> {
  
  static navigationOptions = { title: "Hasil Pencarian", headerStyle: {
      backgroundColor: '#006bff',
    } }

  constructor(props){
    super(props)
    this.state = {
      log: [],
      no_order: '',
      nama: ''
    }
  }

  id = this.props.navigation.state.params.no_order

  getData = () => {
    api.get('/api/log/order/' + this.id)
      .then((response) => {
        if(response.status == 200) {
          let responseData = response.data
          let timeline = []
          responseData.data.log.forEach((el, i) => {
            timeline.push({time: ++i, title: el.message})
          })
          this.setState({log: timeline})
          this.setState({no_order: responseData.data.order.id})
          this.setState({nama: responseData.data.order.nama})
        } else {
          // this.setState({no_order: 'Tidak Ditemukan'})
          // this.setState({nama: responseData.data.order.nama})
        }
      })
      .catch(e => {
        alert('Nomor Order Tidak Ditemukan')
      })
  }

  componentDidMount () {
    this.getData()
  }

  render() {

    return (
      <View style={styles.container}>
        <Text>NO ORDER : { this.state.no_order }</Text>   
        <Text>NAMA     : { this.state.nama }</Text>   
        <Timeline 
          style={styles.list}
          data={this.state.log}
          circleSize={20}
          circleColor='rgb(45,156,219)'
          lineColor='rgb(45,156,219)'
          timeContainerStyle={{minWidth:52, marginTop: -5}}
          timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13}}
          descriptionStyle={{color:'gray'}}
          options={{
            style:{paddingTop:5}
          }}
          innerCircle={'dot'}
        />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    paddingTop:0,
    backgroundColor:'white'
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  TextInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    marginRight: 15,
    marginLeft: 15,
    paddingLeft: 20
  },

  list: {
    flex: 1,
    marginTop:20,
    padding: 20,
    paddingTop: 5,
  },

});

