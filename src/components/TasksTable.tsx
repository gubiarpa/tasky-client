// Bootstrap
import { Table } from 'react-bootstrap';
// Queries
import { useTask } from '../hooks/tasks';
// Icons
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr';
// Third Party
import moment from 'moment';

export const TasksTable = () => {
	const { isLoading, isError, data: tasks } = useTask();
	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error</div>;
	return (
		<>
			<div className='h3 ms-2 mb-3 mb-sm-3'>Less than an hour</div>
			<Table
				bordered
				striped
			>
				<tbody>
					{tasks?.map(({ id, description, deadline, done }) => (
						<tr key={id}>
							<td className='d-flex ps-3'>
								<span>{done ? <GrCheckboxSelected /> : <GrCheckbox />}</span>
								<span className='d-flex justify-content-between ps-5 pe-4 w-100'>
									<span>{description}</span>
									<span>{moment(deadline).fromNow()}</span>
								</span>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	);
};
