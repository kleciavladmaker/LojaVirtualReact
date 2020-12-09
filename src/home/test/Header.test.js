import React from 'react'
import {render} from '@testing-library/react'

import Header from '../Header'

describe('<Header />', () => {
  test('Ao desenhar o componente, o titulo do site deve ser exibido', () => {
    const {getByText} = render(<Header />)
    const h1 = getByText('Loja Virtual')

    expect(h1).toBeInTheDocument()
  })

  test('Validar foto', () =>{
    const {getByTestId} = render(<Header />)
    const root = getByTestId('header')

    expect(root).toMatchSnapshot()
  })

  test.skip('1+1=2', ()=> {
    expect(1+1).toBe(2)
  }) 

  test.skip('2+2=4', () => {
    expect(2+1).toBe(4)
  }) 
})