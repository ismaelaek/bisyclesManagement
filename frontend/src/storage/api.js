const BASE_URL = 'http://localhost:8000/api'; 

const endpoints = {
    customers: '/customers',
    bikes : '/bikes',
    feedbacks : '/feedbacks'
};

export const getEndpoint = (endpointKey) => {
    const endpoint = endpoints[endpointKey];
    if (!endpoint) {
        throw new Error(`Endpoint "${endpointKey}" not found.`);
    }
    return `${BASE_URL}${endpoint}`;
};