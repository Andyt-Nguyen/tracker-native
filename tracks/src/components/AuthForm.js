import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ headerText, submitTitle, onSubmit, errorMessage }) => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
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
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
      </Spacer>

      <Spacer>
        <Button 
          title={submitTitle}
          onPress={() => onSubmit({email, password})}
        />
      </Spacer>
    </>
  );
};

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
  },
  link: {
    color: 'blue'
  }
});

export default AuthForm;