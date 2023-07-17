import React from 'react'
import {render} from '@testing-library/react-native'
import Home from '../index'

describe('Home', () => {
  it('renders without error', () => {
    render(<Home />)
  })
})
