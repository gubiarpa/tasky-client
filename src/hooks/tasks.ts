import { useQuery } from '@tanstack/react-query';
import { getTasks } from '../services/tasks';
import { queryKeys } from '../constants';

const taskStaletime = +import.meta.env.VITE_ACCOUNT_STALETIME as number;

export const useTask = () => {
	return useQuery({
		queryKey: [queryKeys.TASKS],  
		queryFn: () => getTasks(),
		staleTime: taskStaletime,
	});
};
