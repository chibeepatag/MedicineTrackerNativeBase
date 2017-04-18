/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
 Text
} from 'react-native';
import { Content,  Form, Item, Input, Label} from 'native-base';

export default class PatientScreen extends Component {
  constructor(props) {
    super(props);
  }

  setURN(text){
    this.props.setPatient('urn', text);
  }

  setName(text){
    this.props.setPatient('name', text);
  }
 render() {
   return (
       <Content>
        <Form>
          <Item inlineLabel>
            <Label>URN</Label>
            <Input onEndEditing={(event) => this.setURN(event.nativeEvent.text)}/>
          </Item>
          <Item inlineLabel last>
            <Label>Name</Label>
            <Input onEndEditing={(event) => this.setName(event.nativeEvent.text)}/>
          </Item>
        </Form>
       </Content>

   );
 }
}
