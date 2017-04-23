import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Text,
  TouchableHighlight
  } from 'react-native';
  import { Icon } from 'native-base';
  import CalendarPicker from 'react-native-calendar-picker';

  export default class CalendarModal extends Component{
    constructor(props){
      super(props);
      this.state = {
        selectedStartDate: null,
        selectedEndDate: null,
      };
      this.onDateChange = this.onDateChange.bind(this);
    }

    closeModal(){
      this.props.toggleCalendarModal();
    }

    onDateChange(date, type) {
      if (type === 'END_DATE') {
        this.setState({ selectedEndDate: date});
        this.props.setEndDate(date);
      } else {
        this.props.setStartDate(date);
        this.setState({
          selectedStartDate: date,
          selectedEndDate: null,
        });
      }
    }

    render(){
      const minDate = new Date(2017, 1, 1);
      const maxDate = new Date(2017, 6, 3);

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
            <CalendarPicker
              startFromMonday={true}
              allowRangeSelection={this.props.allowRangeSelection}
              minDate={minDate}
              maxDate={maxDate}
              todayBackgroundColor="#f2e6ff"
              selectedDayColor="#7300e6"
              selectedDayTextColor="#FFFFFF"
              onDateChange={this.onDateChange}
            />
            <View>
            </View>
            </View>
          </View>
        </Modal>
      )
    }
  }

  const styles = StyleSheet.create({
    modalContainer:{
      
      backgroundColor: 'white',
      justifyContent: 'center',
      padding: 15,
      width: 375,
      height: 400
    },
    title:{
      flexDirection: 'row',
      height: 30,
      justifyContent: 'space-between',
      borderBottomWidth: 1
    },
    content:{
      width: 375,
      height: 300,
      marginTop: 10
    }
  })
