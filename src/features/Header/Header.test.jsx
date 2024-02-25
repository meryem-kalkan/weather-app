import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from './Header';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

describe(Header, () => {
    it("should change the metric when clicked", () => {
        
    render(<Provider store={store}>
        <Header />
      </Provider>)
      
     const metric = screen.getByTestId('metric')
     fireEvent.click(metric)
     expect(metric).toHaveTextContent('°F');
    })
    it("should set the value of the input when typed", () => {
        
        render(<Provider store={store}>
            <Header />
          </Provider>)
          
         const input = screen.getByRole('searchbox');
         fireEvent.change(input, {target: {value: "baku"}})
         expect(input).toHaveValue('baku')
        })
    test("Skyly test heading", () => {
        
     render(<Provider store={store}>
          <Header />
         </Provider>)
          
     const heading = screen.getByRole('heading', {level: 2});
     expect(heading).toHaveTextContent('Skyly')
      })
})
 