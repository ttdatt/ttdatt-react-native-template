import React from 'react';
import { WelcomeScreen } from '../welcome/WelcomeScreen';
import { cleanup, fireEvent, waitFor } from '../../../jest/testUtils';
import { mockedNavigate } from '../../../jest/jestSetup';

describe('WelcomeScreen', () => {
  beforeEach(() => {
    mockedNavigate.mockClear();
  });
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  // test('click sign in and state should have credentials', async () => {
  //   const {
  //     store,
  //     component: { getByText },
  //   } = renderWithStore(<WelcomeScreen />);
  //   const credentials = {
  //     accessToken:
  //       'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjlIV2RBT1h6QVozYUlSaFFGSjZzUSJ9.eyJodHRwczovL3JlYWR5dGVjaC5jb20vZW1wbG95ZWVJZCI6IjI1IiwiaXNzIjoiaHR0cHM6Ly9yZWFkeXRlY2gtd2ZzLmF1LmF1dGgwLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExNzgyNDM5MzQ2MDg0ODYwNzg0NyIsImF1ZCI6WyJodHRwczovL2hyM3Jlc3RhcGkvYXBpIiwiaHR0cHM6Ly9yZWFkeXRlY2gtd2ZzLmF1LmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2NTA1OTYwMjYsImV4cCI6MTY1MDY4MjQyNiwiYXpwIjoiYVR1UFk5dTJpR0IzM0F2YlFFYlo3V3RlS0JBOGYzOE8iLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwib3JnX2lkIjoib3JnX0JKM0FnVmF2dnVXejhRRjEifQ.pjqI_r0UvQcVKkuPmFgVd-SFVD3_zdb81Z4-jcP6f21ajDsggDkUg3scBBfFaqnVpetDyJGFp7xzrMewTfSeAU2Jh0yq812vevgieuSVJ06M-EVo-pkNI5W1Qk4BBR9nKRFgO9wyjqC3JyucPRrEcq7SiXfFf3nr9YZu5Qxb3yIaXYL4EjnGysUIFgH-ATek0yXHjAfNSuYYWtDEbhYdFcWyu_RUy5HMwAtapkeGhzRHfV7cmJfiZHqGPK1qy94uVeXzryuEwCvaXL6R1PX-rDr8o2AKZTC4B4IeXgiBfvg4XaUjg-q8yQxSRD9Uaw8eWbkJOPyfQtGEIXBKIZ9vrg',
  //     idToken: 'id token',
  //     expiresIn: 123123,
  //     scope: 'read',
  //     tokenType: 'bearer',
  //   };
  //   jest.spyOn(auth0, 'login').mockResolvedValue(credentials);
  //   const signIn = getByText('Sign in');
  //   expect(signIn).toBeTruthy();
  //   fireEvent.press(signIn);
  //   expect(auth0.login).toHaveBeenCalled();
  //   await waitFor(() => expect(store.getState().user.credentials).toEqual(credentials));
  //   await waitFor(() => expect(mockedNavigate).toHaveBeenCalled());
  // });
});
