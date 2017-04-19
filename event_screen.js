 /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  StyleSheet,
  View
} from 'react-native';
import { Content,
         Form,
         Item,
         Input,
         Label,
         Picker,
         Card,
         CardItem} from 'native-base';
import CalendarModal from './calendar_modal'
import ORGAN_REACTION_LIST from './organ_reaction_list.json'

export default class EventScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventDate: new Date().toLocaleDateString(),
      calendarModalVisible: false,
      severity: 'Mild',
      organ: 'Skin',
      reaction: 'Uticaria',
      reactions: ORGAN_REACTION_LIST['skin']['reactions'],
      events: []
    };
    this.setEvent = this.setEvent.bind(this);
  }

  toggleCalendarModal(){
      this.setState({calendarModalVisible: !this.state.calendarModalVisible});
  }

  setSeverity(value: string){
    this.setState({severity : value});
    this.setEvent();
  }

  setOrgan(value: string){
    this.setState({organ: value})

    keys = Object.keys(ORGAN_REACTION_LIST)
    key = keys.find((key) => ORGAN_REACTION_LIST[key]['organ'] === value)
    this.setState({reactions: ORGAN_REACTION_LIST[key]['reactions']})
    this.setEvent();
  }

  setReaction(value: string){
    this.setState({reaction: value});
    this.setEvent();
  }

  setEvent(){
    event = {date: this.state.eventDate,
             severity: this.state.severity,
             organ: this.state.organ,
             reaction: this.state.reaction}
    this.props.setEvent(event);
  }

  render() {
    keys = Object.keys(ORGAN_REACTION_LIST)
    organs = keys.map((key) => ORGAN_REACTION_LIST[key]['organ'])
    return (
        <Content>
          <Form>
            <Item fixedLabel>
             <Label>Date</Label>
             <TouchableHighlight style={styles.dateLabel} onPress={this.toggleCalendarModal.bind(this)}><Text style={styles.dateText}>{this.state.eventDate}</Text></TouchableHighlight>
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
          <View>
            {this.props.events.map((event) => {
              <Card><CardItem header>
                  <Text>{event.reaction}</Text>
              </CardItem>
              <CardItem>
                  <Text>{event.date}</Text>
                  <Text>{event.severity}</Text>
                  <Text>{event.organ}</Text>
              </CardItem></Card>
            })}
          </View>
          <CalendarModal modalVisible={this.state.calendarModalVisible} toggleCalendarModal={this.toggleCalendarModal.bind(this)}/>
        </Content>
    );
  }
}

const styles = StyleSheet.create({
  dateLabel: {
    height: 46
  },
  dateText:{
    paddingTop: 15
  }
})
