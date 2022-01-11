import {Button, StyleSheet, TextInput} from 'react-native';

import { Text, View } from '../components/Themed';
import * as Notifications  from 'expo-notifications';
import {sendPushNotification} from "../services/api";
import {useEffect, useRef, useState} from "react";


export default function TabTwoScreen() {
  const [mess, setMess] = useState('');
  const [text, onChangeText] = useState('');
  useEffect(() => {
    Notifications.addNotificationReceivedListener(e => {
      if (e !== null) {
        if (e.request.content.title !== 'Tab2') {
          setMess(mess + '\n\t' + e.request.content.title + ': ' + e.request.content.body)
        }
      }
    });
  }, []);
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Tab Two</Text>
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
        />
        <Text style={styles.paragraph}>{mess}</Text>
        <Button title="Send" onPress={() => {
          sendPushNotification('Tab2', text).then(r => setMess(mess + '\nMe: ' + text))
        }}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  paragraph: {
    margin: 24,
    textAlign: 'left',
  },
});
