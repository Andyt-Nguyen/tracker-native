import createDataContext from './createDataContext';
import { SIGN_IN, SIGN_OUT, SIGN_UP } from './types';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
  switch(action.type) {
    case SIGN_IN:
      return state;
    
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

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signup', { email, password });
      console.log(response.data)
    } catch(e) {
      dispatch({ type: 'add_error', payload: 'Something went wrong with sign up'})
      console.log('E',e.message);
    }   
  }
}

const signin = (dispatch) => {
  return ({ email, password}) => {
    
  }
}

const signout = (dispatch) => {
  return () => {

  }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup },
  { isSignedIn: false, errorMessage: '' }
);