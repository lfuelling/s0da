export function login(username, password) {
    return fetch('/api/users/authenticate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    }).then((res) =>
        res.text().then((text) => {
            const data = text && JSON.parse(text);
            if (!res.ok) {
                if ([401, 403].indexOf(res.status) !== -1) {
                    throw new Error('Unauthorized!');
                }
                const error = (data && data.message) || res.statusText;
                return Promise.reject(error);
            }
            return data;
        })
    );
}

export function logout() {
    fetch('/api/users/logout').then(
        (res) => !res.ok && console.log('Error during logout!')
    );
}
