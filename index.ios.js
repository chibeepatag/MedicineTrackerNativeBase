/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text
} from 'react-native';
import { Container, Header, Title, Content, Tabs, Tab, Footer, FooterTab, Button, Left, Right, Body, Icon} from 'native-base';
import PatientScreen from './patient_screen'
import EventScreen from './event_screen'
import MedicationScreen from './medication_screen'
export default class AwesomeNativeBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
      patient: {
        name: '',
        urn: ''},
      events: [],
      medications:[],
      event: null,
      medication: null
    };

    this.setPatient = this.setPatient.bind(this);
  }

  setPatient(key, value){
    patient = this.state.patient
    patient[key] = value;
    this.setState({patient: patient});
  }

  setEvent(event){
    this.setState({event: event});
  }

  setMedication(medication){
    this.setState({medication: medication});
  }

  add(){
    if(this.state.currentTab == 1){
        var events = this.state.events;
        events.push(this.state.event);
        this.setState({events: events});
    }else if(this.state.currentTab == 2){
        var medications = this.state.medications;
        medications.push(this.state.medication);
        this.setState({medications: medications});
    }
  }

  changeTab(event){
    this.setState({currentTab: event.i});
    console.log(event.ref.props.heading);
  }

  render() {
    var addButton = null;
    if([1, 2].includes(this.state.currentTab)){
      addButton = <Button full onPress={this.add.bind(this)}><Text>Add</Text></Button>
    }

    return (
      <Container>
        <Header hasTabs>
          <Body>
            <Title>Medicine Tracker</Title>
          </Body>
        </Header>
        <Tabs onChangeTab={(event) => this.changeTab(event)}>
          <Tab heading="Patient">
            <PatientScreen setPatient={this.setPatient}/>
          </Tab>
          <Tab heading="Event">
            <EventScreen setEvent={(event) => this.setEvent(event)}/>
          </Tab>
          <Tab heading="Medications">
            <MedicationScreen setMedication={(medication) => this.setMedication(medication)}/>
          </Tab>
        </Tabs>
        <Footer>
          <FooterTab>
            {addButton}
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}


AppRegistry.registerComponent('AwesomeNativeBase', () => AwesomeNativeBase);
