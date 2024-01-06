import { env } from '$env/dynamic/public';

export const getHealth = async () => {
    return await fetch(`${env.PUBLIC_API_URL}/health`).then((res) => res.json());
};

export const getLateByUsers = async () => {
    return await fetch(`${env.PUBLIC_API_URL}/late`).then((res) => res.json());
};

export const postLate = async (userId: string, startedAt: Date) => {
    return await fetch(`${env.PUBLIC_API_URL}/late`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, startedAt })
    }).then((res) => res.json());
};

export const fetchUser = async () => {
    return await fetch(`${env.PUBLIC_API_URL}/user`).then((res) => res.json());
};

export const postUser = async (user: string) => {
    return await fetch(`${env.PUBLIC_API_URL}/user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([user])
    }).then((res) => res.json());
};

export const deleteUser = async (user: string) => {
    return await fetch(`${env.PUBLIC_API_URL}/user`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([user])
    }).then((res) => res.json());
};
