import React from 'react';
import { WelcomeScreen } from '../WelcomeScreen';
import { cleanup, fireEvent, render, waitFor } from '../../../jest/testUtils';
import { mockedNavigate } from '../../../jest/jestSetup';

describe('WelcomeScreen', () => {
  beforeEach(() => {
    mockedNavigate.mockClear();
  });
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  test('click sign in and state should have credentials', async () => {
    const { queryByText } = render(<WelcomeScreen />);
    await waitFor(() => expect(queryByText('Hello world')).toBeTruthy());
  });
});
