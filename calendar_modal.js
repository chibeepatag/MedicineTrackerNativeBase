import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Text,
  TouchableHighlight
  } from 'react-native';
  import { Icon } from 'native-base';

  export default class CalendarModal extends Component{
    constructor(props){
      super(props);
    }

    closeModal(){
      this.props.toggleCalendarModal();
    }

    render(){
      return(
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.props.modalVisible}>
          <View style={styles.modalContainer}>
            <View style={styles.title}>
              <Text>Event Date</Text>
              <TouchableHighlight onPress={this.closeModal.bind(this)}>
                <View><Icon name='close'/></View>
              </TouchableHighlight>
            </View>
            <View style={styles.content}>
              <Text>Calendar picker goes here.</Text>
            </View>
          </View>
        </Modal>
      )
    }
  }

  const styles = StyleSheet.create({
    modalContainer:{
      marginLeft: 20,
      marginRight: 20,
      backgroundColor: 'white',
      justifyContent: 'center',
      padding: 15,
      width: 335,
      height: 400
    },
    title:{
      flexDirection: 'row',
      height: 30,
      justifyContent: 'space-between',
      borderBottomWidth: 1
    },
    content:{
      width: 335,
      height: 300,
      marginTop: 10
    }
  })
