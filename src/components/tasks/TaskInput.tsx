import { Button, Form, InputGroup } from 'react-bootstrap';
import { VscSend } from 'react-icons/vsc';

export const TaskInput = () => {
	return (
		<InputGroup>
			<Form.Control
				type='text'
				placeholder='Ej. Sacar al perro'
			/>
			<Button
				variant='outline-secondary'
				id='button-addon2'
			>
				<VscSend />
			</Button>
		</InputGroup>
	);
};
