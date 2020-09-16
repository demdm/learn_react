import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { taskManagerActions } from "../../actions";
import {
    MessageBar,
    MessageBarType,
} from "@fluentui/react";

const Message = () => {
    const dispatch = useDispatch();
    const {
        errorApiResponse: {
            responseStatusCode = null,
            isMessageRendered = false,
        } = {
            responseStatusCode: null,
            isMessageRendered: false,
        }
    } = useSelector(state => state.taskManager);

    let errorMessageText = '';
    if (responseStatusCode >= 400 && responseStatusCode <= 499) {
        errorMessageText = 'Client error';
    } else if (responseStatusCode >= 500 && responseStatusCode <= 599) {
        errorMessageText = 'Server error';
    }

    const onDismiss = () => dispatch(
        taskManagerActions.renderErrorApiResponseMessage(null, false)
    );

    return isMessageRendered
        ? <>
            <MessageBar
                messageBarType={MessageBarType.error}
                isMultiline={false}
                onDismiss={onDismiss}
                dismissButtonAriaLabel="Close"
            >
                {errorMessageText}
            </MessageBar>
            <br/>
        </>
        : null
    ;
};

export default Message;