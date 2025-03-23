import { Form } from 'react-bootstrap';
import { TaskInput } from '../components';
import { AppTitle } from '../components/AppTitle';
import { TasksTable } from '../components/TasksTable';

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
					<TaskInput />
				</Form.Group>
				<Form.Group className='mt-4 mt-sm-5'>
					<TasksTable />
				</Form.Group>
			</Form>
		</>
	);
};
