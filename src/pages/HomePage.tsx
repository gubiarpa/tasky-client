import { Form } from 'react-bootstrap';
import { TaskInput } from '../components';
import { AppTitle } from '../components/AppTitle';
import { TasksTable } from '../components/TasksTable';
import { Task } from '../interfaces/Task';

export const HomePage = () => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(e);
	};

	const tasks: Task[] = [
		{ task: 'Hacer ejercicios', time: '1h 29m' },
		{ task: 'Bañarme', time: '4h 27m' },
		{ task: 'Ir al parque', time: '1h 29m' },
		{ task: 'Rezar', time: '1h 29m' },
		{ task: 'Bailar', time: '4h 27m' },
	];

	return (
		<>
			<AppTitle />
			<Form onSubmit={handleSubmit}>
				<Form.Group className='mt-4'>
					<TaskInput />
				</Form.Group>
				<Form.Group className='mt-4 mt-sm-5'>
					<TasksTable tasks={tasks} />
				</Form.Group>
			</Form>
		</>
	);
};
