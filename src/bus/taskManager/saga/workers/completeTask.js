// Core
import { call } from 'redux-saga/effects';

// Other
import { api } from '../../api';

export function* completeTask(data) {
    try {
        const { payload: { title, id } } = data;
        const response = yield call(api.tasks.changeCompletion, id, title);

        if (response.status !== 200) {
            throw new Error('Something went wrong. Can\'t complete task!');
        }
    } catch (error) {
    } finally {
    }
}
