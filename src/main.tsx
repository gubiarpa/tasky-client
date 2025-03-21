import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './index.css';

import TaskyApp from './TaskyApp.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<TaskyApp />
	</StrictMode>
);
