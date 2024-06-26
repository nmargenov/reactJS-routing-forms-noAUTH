async function request(method, url,data) {
    const options = {};
    
    if(method !=="GET"){
        options.method=method;
        if(data){
            options.headers={
                'content-type':'application/json'
            };
            options.body = JSON.stringify(data);
        }
    }
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();

        return result;
    } catch (err) {
        return {};
    }
}

export const createGame = request.bind(null,'POST');
export const get = request.bind(null,"GET");
export const del = request.bind(null,"DELETE");
export const put = request.bind(null,'PUT');