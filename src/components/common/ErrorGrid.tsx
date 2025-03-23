import { Button, Col, Container, Row } from 'react-bootstrap';
import { BiError } from 'react-icons/bi';

interface Props {
	message?: string;
	onRetry?: () => void;
}

export const ErrorGrid = ({ message, onRetry }: Props) => {
	return (
		<Container className='d-flex align-items-center justify-content-center'>
			<Row className='text-center'>
				<Col>
					<BiError
						size={80}
						className='text-danger mb-3'
					/>
					<h3 className='text-danger'>Error loading data</h3>
					<p>{message || 'Something went wrong. Please try again.'}</p>
					<Button
						variant='danger'
						onClick={onRetry}
					>
						Retry
					</Button>
				</Col>
			</Row>
		</Container>
	);
};
