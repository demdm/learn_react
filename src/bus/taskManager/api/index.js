export const api = {
    tasks: {
        getAll: async () => {
            const response = await fetch('http://localhost:5000/tasks');
            const tasks = await response.json();

            return tasks;
        }
    }
};