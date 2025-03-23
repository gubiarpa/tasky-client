import { apiUrl } from '../constants/apiUrl';
import { Task } from '../interfaces';
import { delay } from '../shared/utils';
import apiBase from './base/apiBase';

export async function getTasks() {
	if (import.meta.env.DEV) {
		await delay(3000);
	}
	const url = apiUrl.TASKS;
	const { data } = await apiBase.get<Task[]>(url);
	return data;
}
