import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import { SIGN_IN, SIGN_OUT } from './types';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch(action.type) {
    case SIGN_IN:
      return { errorMessage: '', token: action.payload };

    case SIGN_OUT:
      return { ...state, token: '', errorMessage: '' }

    case 'add_error':
      return { ...state, errorMessage: action.payload };

    case 'clear_error_message':
      return { ...state, errorMessage: '' }
    default:
      return state;
  }
};

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if(token) {
    dispatch({ type: 'signin', payload: token });
    navigate('TrackList');
    return;
  }
  navigate('Signup');
  return;
}

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'clear_error_message' });
}

const signup = (dispatch) => async ({ email, password }) => {
    try {
      const { data } = await trackerApi.post('/signup', { email, password });
      await AsyncStorage.setItem('token', data.token);
      dispatch({ type: SIGN_IN, payload: data.token });
      navigate('TrackList');
    } catch(e) {
      dispatch({ type: 'add_error', payload: 'Something went wrong with sign up'});
    }   
}

const signin = (dispatch) => async ({ email, password}) => {
    try {
      const response = await trackerApi.post('/signin', { email, password });
      await AsyncStorage.setItem('token', response.data);
      dispatch({ type: SIGN_IN, payload: response.data })
      navigate('TrackList')
    } catch(e) {
      console.log(e);
      dispatch({ type: 'add_error', payload: 'Somthing went wrong with sign in' })
    }
}

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: SIGN_OUT });
  navigate('loginFlow');
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, clearErrorMessage, tryLocalSignin, signout },
  { token: null, errorMessage: '' }
);