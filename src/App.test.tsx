import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import{MemoryRouter} from  'react-router-dom'
import '@testing-library/jest-dom/extend-expect'

describe ('teste de integração 1', () => {

  it('Testando permissão de acesso para a página de Usuário', () => {

    render(
            <MemoryRouter initialEntries={['/Usuario']}>  
                <App />
            </MemoryRouter>            
        ); 

        const ElementoNotFount = screen.getByText('Usuario sem permissão');
        expect(ElementoNotFount).toBeInTheDocument();
  })
});

it('Testando elemento interesses da página logada', () => {
  const {container} = render (    
    <MemoryRouter initialEntries={['/Usuario']}>
      <App />
    </MemoryRouter>
  );

  const usuarioInteresses = container.getElementsByClassName("Interesses");
  expect (usuarioInteresses).toBeGreaterThan(0);
})
it('Testando número de elementos interesses da página logada', () => {
  const {container} = render (    
    <MemoryRouter initialEntries={['/Usuario']}>
      <App />
    </MemoryRouter>
  );
  const usuarioInteresses1 = container.getElementsByClassName("Interesses");
  expect(usuarioInteresses1).toBe(1);

  });

export {};