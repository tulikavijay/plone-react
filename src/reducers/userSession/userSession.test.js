import userSession from './userSession';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../../constants/ActionTypes';

describe('User session reducer', () => {
  it('should return the initial state', () => {
    expect(
      userSession(),
    ).toEqual({
      token: null,
      login: {
        loaded: false,
        loading: false,
        error: null,
      },
    });
  });

  it('should handle LOGIN', () => {
    expect(
      userSession(undefined, {
        type: LOGIN,
      }),
    ).toEqual({
      token: null,
      login: {
        loaded: false,
        loading: true,
        error: null,
      },
    });
  });

  it('should handle LOGIN_SUCCESS', () => {
    expect(
      userSession(undefined, {
        type: LOGIN_SUCCESS,
        result: {
          token: '1234',
        },
      }),
    ).toEqual({
      token: '1234',
      login: {
        loaded: true,
        loading: false,
        error: null,
      },
    });
  });

  it('should handle LOGIN_FAIL', () => {
    expect(
      userSession(undefined, {
        type: LOGIN_FAIL,
        error: {
          error: 'failed',
        },
      }),
    ).toEqual({
      token: null,
      login: {
        loaded: false,
        loading: false,
        error: 'failed',
      },
    });
  });

  it('should handle LOGOUT', () => {
    expect(
      userSession({
        token: '1234',
        login: {
          loaded: false,
          loading: false,
          error: null,
        },
      }, {
        type: LOGOUT,
      }),
    ).toEqual({
      token: null,
      login: {
        loaded: false,
        loading: false,
        error: null,
      },
    });
  });
});