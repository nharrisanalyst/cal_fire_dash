import type { Decorator } from '@storybook/react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const client = new QueryClient();

export const UseQueryDecorator:Decorator =(Story ,context )=>(
  <QueryClientProvider client={client} >
    <Story {...context.args} />
  </QueryClientProvider>
)