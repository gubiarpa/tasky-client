import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages';

export const DashboardRouter = () => {
	return (
		<Container>
			<Routes>
				<Route
					path='/'
					element={<HomePage />}
				/>
			</Routes>
		</Container>
	);
};
