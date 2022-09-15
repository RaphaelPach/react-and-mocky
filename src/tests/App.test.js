import { render, screen } from '@testing-library/react';
import App from '../App';
import mocks from './mocks'

describe('Test Rick & Morty API', () => {

  beforeEach(()=>{
    global.fetch = jest.fn(() =>
    Promise.resolve({
    json: () => Promise.resolve( mocks ),
    })) 
    
    render(<App/>)
  })
  
  test('Verifica se aparece o card com titulo de "Rick Sanchez"', () => {
    const ricky = screen.getByRole('heading', {
      name: /rick sanchez/i
    });
    expect(ricky).toBeInTheDocument();
  })

  test('Verifica se existem o input de texto e o botão "Buscar"', () => {
    const input = screen.getByRole('textbox')
    const btn = screen.getByRole('button');

    expect(input).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  })

  test('Verifica se ao buscar por "Smith" aparecem 4 cards', () => {
    const summer = screen.getAllByRole('heading', {
      name: /smith/i
    })
     expect(summer).toHaveLength(4);
  })

})
