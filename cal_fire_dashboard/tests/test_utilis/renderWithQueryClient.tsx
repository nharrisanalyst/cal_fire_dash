import { render as rtlRender, screen, fireEvent } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from 'react'
import type { RenderOptions } from '@testing-library/react'

const client = new QueryClient();

type QueryRenderOptions = Omit<RenderOptions, 'wrapper'>;

const renderWithQuery = (
  ui: ReactNode,
  {...options} : QueryRenderOptions = {}
) => {
  return rtlRender(<QueryClientProvider client ={client}>{ui}</QueryClientProvider>, options)
}


export { renderWithQuery as render, screen, fireEvent }