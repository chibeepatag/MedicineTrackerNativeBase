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

    render(){
      return(
        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.props.modalVisible}>
          <View style={styles.modalContainer}>
            <TouchableHighlight onPress={() => this.props.toggleDiscountModal()}>
              <Icon name='close'/>
            </TouchableHighlight>
            <Text>Calendar Modal</Text>
          </View>
        </Modal>
      )
    }
  }

  const styles = StyleSheet.create({
    modalContainer:{
      margin: 20
    }
  })
