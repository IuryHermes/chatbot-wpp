const { LOCAL_JSON_SERVER_URL, LOCAL_SISTEMA } = require('./constants.js');

async function makeRequest(url, method, data) {
    const upperCaseMethod = method.toUpperCase();
    if (!['GET', 'POST', 'PUT', 'DELETE', 'PATCH'].includes(upperCaseMethod)) {
        throw new Error('Method not allowed');
    }

    const options = {
        method: upperCaseMethod,
        headers: {
            'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify(data) : undefined
    };

    try {
        const response = await fetch(url, options);
        return await response.json();
    } catch (err) {
        console.error(err);
    }
}

function getURL(route) {
    return `${LOCAL_JSON_SERVER_URL}/${route}`;
}

function URLSistema(route) {
    return `${LOCAL_SISTEMA}/${route}`;
}

// Usando module.exports para exportar funções
module.exports = {
    makeRequest,
    getURL,
    URLSistema
};
