import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'; 

import StatusBar from '../components/StatusBar'
import TodayHeader from '../components/TodayHeader'
import TodayTaskList from '../components/TodayTaskList'
import TodayTask from '../components/TodayTask'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null, // we don't want a header here because we have a custom greeting for this page
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar/>
        <TodayHeader></TodayHeader>
        <ScrollView style={styles.contentContainer}>
          <TodayTaskList>
            <TodayTask colors={['#FF4242', '#FF6F6F']} taskTitle='Water the Plants' taskDescription="light task, very high priority" taskDuration="about 5 minutes"></TodayTask>
            <TodayTask colors={['#42B1FF', '#73C5FF']} taskTitle='Eat said Plants' taskDescription="heavy task, low priority" taskDuration="about 2 hours"></TodayTask>
            <TodayTask colors={['#ED9700', '#EBA52B']} taskTitle='Digest those Plants' taskDescription="heavy task, low priority" taskDuration="about 2 hours"></TodayTask>
          </TodayTaskList>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
  },
  contentContainer: {
    backgroundColor: '#F6F6F6',
  },
});
