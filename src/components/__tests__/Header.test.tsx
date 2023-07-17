import React from 'react'
import {render} from '@testing-library/react-native'
import Header from '../Header'

describe('<Header />', () => {
  test('renders correctly', () => {
    const {getByTestId} = render(<Header />)

    // Verificar que el componente se haya renderizado correctamente
    expect(getByTestId('header-container')).toBeDefined()

    // Verificar que la imagen del logo esté presente
    expect(getByTestId('header-logo')).toBeDefined()
  })
})
