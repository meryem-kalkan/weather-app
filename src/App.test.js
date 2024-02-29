import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

describe(App, () => {
  it("should show text when there is no chosen location", () => {
      
  render(<Provider store={store}>
      <App />
    </Provider>)
    
   const text = screen.getByText('Explore current weather data and 5-day forecast of more than 200,000 cities!');
   expect(text).toBeInTheDocument();
  })
})
