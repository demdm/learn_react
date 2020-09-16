// Core
import { call, delay, put } from 'redux-saga/effects';

// Other
import { taskManagerActions } from "../../actions";
import { api } from '../../api';

export function* completeTask(data) {
    const { payload: { id, isCompleted } } = data;

    try {
        yield put(taskManagerActions.completingTask(id, isCompleted, true));

        const response = yield call(api.tasks.changeCompletion, id, isCompleted);
        const responseStatus = response.status;

        if (responseStatus !== 200) {
            if (responseStatus >= 400 && responseStatus <= 599) {
                yield put(taskManagerActions.renderErrorApiResponseMessage(responseStatus, true));
            }

            throw new Error('Something went wrong. Can\'t complete task!');
        }

        yield delay(1000);
    } catch (error) {
    } finally {
        yield put(taskManagerActions.completingTask(id, isCompleted, false));
    }
}
