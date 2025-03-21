import { Form } from 'react-bootstrap';
import { InputTask } from '../components';
import { AppTitle } from '../components/AppTitle';

export const HomePage = () => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(e);
	};

	return (
		<>
			<AppTitle />
			<Form onSubmit={handleSubmit}>
				<Form.Group className='mt-4'>
					<InputTask />
				</Form.Group>
			</Form>
		</>
	);
};
