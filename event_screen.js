 /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import { Content,
         Form,
         Item,
         Input,
         Label,
         Picker} from 'native-base';
import ORGAN_REACTION_LIST from './organ_reaction_list.json'

export default class EventScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      severity: 'Mild',
      organ: 'Skin',
      reaction: 'Uticaria',
      reactions: ORGAN_REACTION_LIST['skin']['reactions']
    };
  }

  setSeverity(value: string){
    this.setState({severity : value});
  }

  setOrgan(value: string){
    this.setState({organ: value})

    keys = Object.keys(ORGAN_REACTION_LIST)
    key = keys.find((key) => ORGAN_REACTION_LIST[key]['organ'] === value)
    this.setState({reactions: ORGAN_REACTION_LIST[key]['reactions']})
  }

  setReaction(value: string){
    this.setState({reaction: value})
  }

  render() {
    keys = Object.keys(ORGAN_REACTION_LIST)
    organs = keys.map((key) => ORGAN_REACTION_LIST[key]['organ'])
    return (
        <Content>
          <Form>
            <Item fixedLabel>
             <Label>Date</Label>
             <Input />
            </Item>
            <Item fixedLabel>
              <Label>Severity</Label>
              <Picker
                        iosHeader="Select one"
                        mode="dropdown"
                        selectedValue={this.state.severity}
                        onValueChange={this.setSeverity.bind(this)}>
                        <Picker.Item label="Mild" value="Mild" />
                        <Picker.Item label="Moderate" value="Moderate" />
                        <Picker.Item label="Severe" value="Severe" />
                   </Picker>
            </Item>
            <Item fixedLabel>
             <Label>Organ</Label>
             <Picker
                       iosHeader="Select one"
                       mode="dropdown"
                       selectedValue={this.state.organ}
                       onValueChange={this.setOrgan.bind(this)}>
                       {organs.map((organ, index) => <Picker.Item  key={index} label={organ}  value={organ} />)}
              </Picker>
            </Item>
            <Item fixedLabel>
             <Label>Reaction</Label>
             <Picker
                       iosHeader="Select one"
                       mode="dropdown"
                       selectedValue={this.state.reaction}
                       onValueChange={this.setReaction.bind(this)}>
                       {this.state.reactions.map((reaction, index) => <Picker.Item  key={index} label={reaction}  value={reaction} />)}
              </Picker>
            </Item>
          </Form>
        </Content>
    );
  }
}
