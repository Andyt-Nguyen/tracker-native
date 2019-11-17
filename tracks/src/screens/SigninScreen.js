import React, { useContext } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import Spacer from '../components/Spacer';

import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents 
        onWillBlur={clearErrorMessage}
      />
      <AuthForm 
        headerText="Sign into your account"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitTitle="Sign in"
      />
      <NavLink text="Don't have an account? Sign up insetad" routeName="Signup" />
    </View>
  )
}

SigninScreen.navigationOptions = {
  header: null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200
  }
});

export default SigninScreen;