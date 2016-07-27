export function updateAppState(payload) {
    return (dispatch, getState) => {
        dispatch({
            type: 'UPDATE_APP_STATE',
            payload: payload,
            receivedAt: Date.now()
        })
        const useroptions = getState().app
        // setLocalItem('userOptions', useroptions);
    }
}