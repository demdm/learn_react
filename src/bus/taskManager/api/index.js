const api_port = 5000;
const api_url = `http://localhost:${api_port}`;

async function fetchRequest(uri, method, data = null) {
    try {
        let fetchOptions = {
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            method,
        };

        if (data) {
            fetchOptions.body = JSON.stringify(data);
        }

        return await fetch(uri, fetchOptions);
    } catch(error) {
        console.error(error);
    }
}

export const api = {
    tasks: {
        getAll: async () => fetchRequest(`${api_url}/tasks`, 'GET'),
        create: async title => fetchRequest(`${api_url}/tasks`, 'POST', { title }),
        remove: async id => fetchRequest(`${api_url}/tasks/${id}`, 'DELETE'),
        changeCompletion: async (id, isCompleted) => fetchRequest(
            `${api_url}/tasks/${id}`,
            'PATCH',
            { isCompleted }
        ),
    }
}
