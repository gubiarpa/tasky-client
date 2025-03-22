import { createRoot } from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './index.css';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import queryClient from './queryClient.ts';

import { TaskyApp } from './TaskyApp.tsx';

createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={queryClient}>
		<TaskyApp />
		<ReactQueryDevtools />
	</QueryClientProvider>
);
