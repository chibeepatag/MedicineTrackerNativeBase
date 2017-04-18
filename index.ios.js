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
      patient: {
        name: '',
        urn: ''},
      events: [],
      medications:[]
    };

    this.setPatient = this.setPatient.bind(this);
  }

  setPatient(key, value){
    patient = this.state.patient
    patient[key] = value;
    this.setState({patient: patient});
  }

  render() {
    return (
      <Container>
        <Header hasTabs>
          <Body>
            <Title>Medicine Tracker</Title>
          </Body>
        </Header>
        <Tabs>
          <Tab heading="Patient">
            <PatientScreen setPatient={this.setPatient}/>
          </Tab>
          <Tab heading="Event">
            <EventScreen/>
          </Tab>
          <Tab heading="Medications">
            <MedicationScreen/>
          </Tab>
        </Tabs>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Report</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}


AppRegistry.registerComponent('AwesomeNativeBase', () => AwesomeNativeBase);
