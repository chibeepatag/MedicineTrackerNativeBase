/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import { Container, Header, Title, Content, Tabs, Tab, Footer, FooterTab, Button, Left, Right, Body, Icon, Toast} from 'native-base';
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
      event: {eventDate: new Date()},
      medication: {startDate: new Date(), endDate: new Date()}
    };

    this.setPatient = this.setPatient.bind(this);
  }

  setPatient(key, value){
    this.setState({patient: Object.assign({}, this.state.patient, { [key]: value })});
  }

  getEvent(){
    return this.state.event
  }

  setEvent(key, value){
    event = this.state.event
    event[key] = value;
    this.setState({event: event})
    //this.setState({event: Object.assign({}, event)})
  }

  getMedication(){
    return this.state.medication
  }

  setMedication(key, value){
    medication = this.state.medication
    medication[key] = value
    this.setState({medication: medication});
  }

  add(){
    if(this.state.currentTab == 1){
        var events = this.state.events;
        events.push(this.state.event);
        this.setState({events: events});

        Toast.show({
              text: 'Event added! ' + event.organ + ' : ' + event.reaction,
              position: 'bottom',
              duration: 3000
            });
    }else if(this.state.currentTab == 2){
       var medications = this.state.medications;
       medications.push(this.state.medication);
       this.setState({medications: medications});

        Toast.show({
              text: 'Medication added! ' + medication.antibiotic + ' : ' + medication.route + ' : ' + medication.dose,
              position: 'bottom',
              duration: 3000
            });
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
         <Left>
          <Button transparent>
           <Icon name='menu' />
          </Button>
         </Left>
         <Body>
          <Title>Medicine Tracker</Title>
        </Body>
        <Right></Right>
        </Header>
        <Tabs onChangeTab={(event) => this.changeTab(event)}>
          <Tab heading="Patient">
            <PatientScreen setPatient={this.setPatient}/>
          </Tab>
          <Tab heading="Event">
            <EventScreen setEvent={this.setEvent.bind(this)} getEvent={this.getEvent.bind(this)}/>
          </Tab>
          <Tab heading="Medications">
            <MedicationScreen setMedication={this.setMedication.bind(this)} getMedication={this.getMedication.bind(this)}/>
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
