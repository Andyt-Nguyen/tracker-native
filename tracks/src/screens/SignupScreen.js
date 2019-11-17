import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { Spacer } from '../components';

const SignupScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>

      <Spacer>
        <Input label="Email" />
      </Spacer>

      <Spacer>
        <Input label="Password" />
        </Spacer>

        <Spacer>
        <Button 
          title="Sign up"
        />
        </Spacer>
    </View>
  )
}

SignupScreen.navigationOptions = () => {
  return {
    header: null
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200
  }
});

export default SignupScreen;