const baseUrl: string = 'https://api.quotable.io';

const httpGetService = (path: string) => {
    return fetch(baseUrl + path)
            .then(res => res.json())
            .then(data => data)
};

export default httpGetService;