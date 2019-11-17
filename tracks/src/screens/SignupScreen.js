import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';

import { Spacer } from '../components';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({navigation}) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
        <AuthForm 
          headerText="Sign Up for Tracker" 
          errorMessage={state.errorMessage} 
          submitTitle="Sign Up"
          onSubmit={signup}
        />

        <NavLink
          text="Already have an account? Sign in instead"
          routeName="Signin"
        />
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