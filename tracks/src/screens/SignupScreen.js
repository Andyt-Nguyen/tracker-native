import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { Spacer } from '../components';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({navigation}) => {
  const { state, signup } = useContext(AuthContext);
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>

      <Spacer>
        <Input 
          autoCapitalize="none"
          autoCorrect={false}
          label="Email" 
          onChangeText={setEmail}
          value={email}
        />
      </Spacer>

      <Spacer>
        <Input
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          label="Password" 
          onChangeText={setPassword} 
          value={password}
        />
        {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
      </Spacer>

        <Spacer>
          <Button 
            title="Sign up"
            onPress={() => signup({ email, password })}
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
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15
  }
});

export default SignupScreen;