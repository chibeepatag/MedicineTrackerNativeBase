/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
 StyleSheet,
 Text,
 View
} from 'react-native';
import { Content, Form, Item, Label, Picker} from 'native-base';

import MEDICATIONS_LIST from './medications_list.json';
import DOSE from './dose.json'
import FREQUENCY from './frequency.json'
import ROUTE from './route.json'

export default class MedicationScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      antibiotics: [],
      medication_class: '',
      antobiotic: '',
      dose: '',
      frequency: '',
      route: '',
      start: '',
      end: ''
    }
  }

  onValueChangeClass(value: string){
    medication = MEDICATIONS_LIST.find((item) => item.name == value)
    this.setState({medication_class: value,
                   antibiotics: medication.antibiotics
                 });
  }

  onValueChangeAntibiotic(value: string){
    this.setState({antibiotic: value})
  }

  onValueChangeDose(value: string){
    this.setState({dose: value})
  }

  onValueChangeFrequency(value: string){
    this.setState({frequency: value})
  }

  onValueChangeRoute(value: string){
    this.setState({route: value})
  }

 render() {
   var antibioticPicker = null;
   if(this.state.medication_class.length > 1){
     antibioticPicker = <Picker
       iosHeader="Antibiotic"
       mode="dropdown"
       selectedValue={this.state.antibiotic}
       onValueChange={this.onValueChangeAntibiotic.bind(this)}>
       {this.state.antibiotics.map((dose, index) => <Picker.Item  key={index} label={dose}  value={dose} />)}
     </Picker>
   }

   return (
       <Content>
       <Form>
         <Item fixedLabel>
          <Label>Class</Label>
          <Picker
            iosHeader="Class"
            mode="dropdown"
            selectedValue={this.state.medication_class}
            onValueChange={this.onValueChangeClass.bind(this)}>
            {MEDICATIONS_LIST.map((med_class, index) => <Picker.Item  key={index} label={med_class.name}  value={med_class.name}/>)}
          </Picker>

          </Item>
          <Item fixedLabel>
            <Label>Antibiotic</Label>
            {antibioticPicker}
            </Item>
            <Item fixedLabel>
              <Label>Dose</Label>
              <Picker
                iosHeader="Dose"
                mode="dropdown"
                selectedValue={this.state.dose}
                onValueChange={this.onValueChangeDose.bind(this)}>
                {DOSE.map((dose, index) => <Picker.Item  key={index} label={dose}  value={dose} itemTextStyle={styles.itemStyle}/>)}
              </Picker>
            </Item>
            <Item fixedLabel>
              <Label>Frequency</Label>
              <Picker
                iosHeader="Frequency"
                mode="dropdown"
                selectedValue={this.state.frequency}
                onValueChange={this.onValueChangeFrequency.bind(this)}>
                {FREQUENCY.map((dose, index) => <Picker.Item  key={index} label={dose}  value={dose} itemTextStyle={styles.itemStyle}/>)}
              </Picker>
            </Item>
            <Item fixedLabel>
              <Label>Route</Label>
              <Picker
                iosHeader="Route"
                mode="dropdown"
                selectedValue={this.state.route}
                onValueChange={this.onValueChangeRoute.bind(this)}>
                {ROUTE.map((dose, index) => <Picker.Item  key={index} label={dose}  value={dose} itemTextStyle={styles.itemStyle}/>)}
              </Picker>
            </Item>
            <Item fixedLabel>
              <Label>Start</Label>
            </Item>
            <Item fixedLabel>
              <Label>End</Label>
            </Item>
          </Form>
       </Content>

   );
 }
}

const styles = StyleSheet.create({
  container: {
     flex: 1
   }
})
