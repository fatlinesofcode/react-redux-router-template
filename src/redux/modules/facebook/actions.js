import {} from "../parse"
export function facebookLogin(uid) {
    return (dispatch, getState) => {
        FB.login((response) => {
            response.status === 'connected' ? resolve(response) : reject(response);
            if (response.authResponse && response.status == 'connected') {
                // this.accessToken = success.authResponse.accessToken;
                // this.authResponse = success.authResponse;
                // resolve(success);
                dispatch()
            }
        });
    }
}