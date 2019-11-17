import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import { SIGN_IN, SIGN_OUT, SIGN_UP } from './types';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch(action.type) {
    case SIGN_IN:
      return { errorMessage: '', token: action.payload };
    
    case SIGN_UP:
      return state;
    
    case SIGN_OUT:
      return state;

    case 'add_error':
      return { ...state, errorMessage: action.payload };

    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signup', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: SIGN_UP, payload: response.data.token });
      navigate('TrackList');
    } catch(e) {
      dispatch({ type: 'add_error', payload: 'Something went wrong with sign up'});
    }   
}

const signin = (dispatch) => ({ email, password}) => {
    
}

const signout = (dispatch) => () => {

}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup },
  { token: null, errorMessage: '' }
);