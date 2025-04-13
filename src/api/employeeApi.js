const apiUrl = 'https://dummyjson.com/users';

export const getAllEmployees = async () => {
    const res = await fetch(apiUrl);
    const data = await res.json();

    return data.users || [];
}

export const getEmployeeById = async (id) => {
    const res = await fetch(`${apiUrl}/${id}`);
    return await res.json();
};

export const createEmployee = async (employee) => {
    await fetch(apiUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(employee),
    });
};

export const updateEmployee = async (id, employee) => {
    await fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employee),
    });
};

export const deleteEmployee = async (id) => {
    await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    });
};