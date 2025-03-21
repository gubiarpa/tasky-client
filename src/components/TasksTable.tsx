import { Table } from 'react-bootstrap';
import { Task } from '../interfaces';

interface Props {
	tasks: Task[];
}

export const TasksTable = ({ tasks }: Props) => {
	return (
		<>
			<div className='h3 ms-2 mb-2 mb-sm-3'>Less than an hour</div>
			<Table bordered>
				<tbody>
					{tasks.map(({ task, time }) => (
						<tr key={task}>
							<td className='d-flex justify-content-between px-4'>
								<span>{task}</span>
								<span>{time}</span>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	);
};
