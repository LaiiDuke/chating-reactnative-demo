import { StatusBar } from 'expo-status-bar';
import {Button, Platform, StyleSheet} from 'react-native';
import * as Notifications from 'expo-notifications';

import { Text, View } from '../components/Themed';

async function getToken() {
  const {status} = await Notifications.getPermissionsAsync()
  if (status !== 'granted') {
    const {status} = await Notifications.requestPermissionsAsync()
    if (status !== 'granted') {
      alert('Failed')
      return 
    }
  }
  const tokenObj = await Notifications.getExpoPushTokenAsync()
  const token = tokenObj.data
  alert(token)
  console.log(token)
  return token

}

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get Token</Text>
      <Button title="Get Token"  onPress={getToken}/>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
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
});
