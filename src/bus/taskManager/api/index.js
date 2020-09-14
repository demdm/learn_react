const api_port = 5000;
const api_url = `http://localhost:${api_port}`;

export const api = {
    tasks: {
        getAll: async () => {
            return await fetch(`${api_url}/tasks`);
        },
        create: async (title) => {
            try {
                return await fetch(`${api_url}/tasks`, {
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    method: 'POST',
                    body: JSON.stringify({ title }),
                });
            } catch(error) {
                console.error(error);
            }
        },
        remove: async (id) => {
            try {
                return await fetch(`${api_url}/tasks/${id}`, {
                    method: 'DELETE',
                });
            } catch(error) {
                console.error(error);
            }
        },
        changeCompletion: async (id, isCompleted) => {
            try {
                return await fetch(`${api_url}/tasks/${id}`, {
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    method: 'PATCH',
                    body: JSON.stringify({ isCompleted }),
                });
            } catch(error) {
                console.error(error);
            }
        },
    }
};
