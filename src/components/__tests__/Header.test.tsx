import React from 'react'
import {render} from '@testing-library/react-native'
import Header from '../Header'

describe('<Header />', () => {
  test('renders correctly', () => {
    const {getByTestId} = render(<Header />)

    expect(getByTestId('header-container')).toBeDefined()
    expect(getByTestId('header-logo')).toBeDefined()
  })
})
