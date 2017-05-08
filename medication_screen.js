/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
 StyleSheet,
 Text,
 View,
 TouchableHighlight
} from 'react-native';
import { Content, Form, Item, Label, Picker} from 'native-base';
import CalendarModal from './calendar_modal'
import MEDICATIONS_LIST from './medications_list.json';
import DOSE from './dose.json'
import FREQUENCY from './frequency.json'
import ROUTE from './route.json'

export default class MedicationScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      calendarModalVisible: false,
      antibiotics: [],
    }
  }

  toggleCalendarModal(){
      this.setState({calendarModalVisible: !this.state.calendarModalVisible});
  }

  onValueChangeClass(value: string){
    keys = Object.keys(MEDICATIONS_LIST)
    key = keys.find((key) => MEDICATIONS_LIST[key]['name'] === value)
    this.setState({antibiotics: MEDICATIONS_LIST[key]['antibiotics']})
    this.props.setMedication('medication_class', value)
  }

  onValueChangeAntibiotic(value: string){
    this.props.setMedication('antibiotic', value)
  }

  onValueChangeDose(value: string){
    this.props.setMedication('dose', value)
  }

  onValueChangeFrequency(value: string){
    this.props.setMedication('frequency', value)
  }

  onValueChangeRoute(value: string){
    this.props.setMedication('route', value)
  }

  setStartDate(date){
    this.props.setMedication('startDate', date)
  }

  setEndDate(date){
    this.props.setMedication('endDate', date)
  }

 render() {
   const medication = this.props.getMedication();
   keys = Object.keys(MEDICATIONS_LIST)
   classes = keys.map((key) => MEDICATIONS_LIST[key]['name'])

   return (
       <Content>
       <Form>
         <Item fixedLabel>
          <Label>Class</Label>
          <Picker
            iosHeader="Class"
            mode="dropdown"
            selectedValue={medication.medication_class}
            onValueChange={this.onValueChangeClass.bind(this)}>
            {classes.map((med_class, index) => <Picker.Item  key={index} label={med_class}  value={med_class}/>)}
          </Picker>

          </Item>
          <Item fixedLabel>
            <Label>Antibiotic</Label>
            <Picker
                      iosHeader="Antibiotic"
                      mode="dropdown"
                      selectedValue={medication.antibiotic}
                      onValueChange={this.onValueChangeAntibiotic.bind(this)}>
                      {this.state.antibiotics.map((antibiotic, index) => <Picker.Item  key={index} label={antibiotic}  value={antibiotic} />)}
             </Picker>
            </Item>
            <Item fixedLabel>
              <Label>Dose</Label>
              <Picker
                iosHeader="Dose"
                mode="dropdown"
                selectedValue={medication.dose}
                onValueChange={this.onValueChangeDose.bind(this)}>
                {DOSE.map((dose, index) => <Picker.Item  key={index} label={dose}  value={dose} itemTextStyle={styles.itemStyle}/>)}
              </Picker>
            </Item>
            <Item fixedLabel>
              <Label>Frequency</Label>
              <Picker
                iosHeader="Frequency"
                mode="dropdown"
                selectedValue={medication.frequency}
                onValueChange={this.onValueChangeFrequency.bind(this)}>
                {FREQUENCY.map((dose, index) => <Picker.Item  key={index} label={dose}  value={dose} itemTextStyle={styles.itemStyle}/>)}
              </Picker>
            </Item>
            <Item fixedLabel>
              <Label>Route</Label>
              <Picker
                iosHeader="Route"
                mode="dropdown"
                selectedValue={medication.route}
                onValueChange={this.onValueChangeRoute.bind(this)}>
                {ROUTE.map((dose, index) => <Picker.Item  key={index} label={dose}  value={dose} itemTextStyle={styles.itemStyle}/>)}
              </Picker>
            </Item>
            <Item fixedLabel>
              <Label>Start</Label>
              <TouchableHighlight  onPress={this.toggleCalendarModal.bind(this)}><Text>{medication.startDate.toLocaleDateString('en-AU')}</Text></TouchableHighlight>
            </Item>
            <Item fixedLabel>
              <Label>End</Label>
              <TouchableHighlight  onPress={this.toggleCalendarModal.bind(this)}><Text>{medication.endDate.toLocaleDateString('en-AU')}</Text></TouchableHighlight>
            </Item>
          </Form>
          <CalendarModal modalVisible={this.state.calendarModalVisible} toggleCalendarModal={this.toggleCalendarModal.bind(this)} title={'Medication Start - End'} allowRangeSelection={true} setStartDate={this.setStartDate.bind(this)} setEndDate={this.setEndDate.bind(this)}/>
       </Content>

   );
 }
}

const styles = StyleSheet.create({
  container: {
     flex: 1
   }
})
