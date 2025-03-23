import { ImSpinner2 } from 'react-icons/im';

export const Loading = () => {
	return (
		<div className='text-center'>
			<ImSpinner2
				className='spin animate__animated animate__fadeOutUpx'
				size={50}
			/>
		</div>
	);
};
