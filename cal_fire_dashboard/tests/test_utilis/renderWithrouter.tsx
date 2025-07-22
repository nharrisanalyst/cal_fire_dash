import { render as rtlRender, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import type { ReactNode } from 'react'
import type { RenderOptions } from '@testing-library/react'

type RouterRenderOptions = {
  route?: string
} & Omit<RenderOptions, 'wrapper'>

const renderWithRouter = (
  ui: ReactNode,
  { route = '/', ...options }: RouterRenderOptions = {}
) => {
  window.history.pushState({}, 'Test page', route)

  return rtlRender(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>, options)
}


export { renderWithRouter as render, screen, fireEvent }
