import {test} from 'vitest'
import {render, screen} from '@testing-library/react'
import Alert from './Alert';

test('this is a smoke test for <Alert/>', ()=>{
    render(<Alert status='active' />)
})

test('the active icon has class active when status is active', ()=>{
  render(<Alert status='active' />)
  const alert = screen.getByTestId('alert-icon-321')
  expect(alert).toHaveClass(/activeAlert/i)
})

test('the inactive icon has class active when status is inactive', ()=>{
  render(<Alert status='inactive' />) 
  const alert = screen.getByTestId('alert-icon-321')
  expect(alert).toHaveClass(/inactiveAlert/i)
})