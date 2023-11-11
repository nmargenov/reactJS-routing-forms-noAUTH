import * as fetcher from './fetcher';

const BASE_URL = 'http://localhost:3030/jsonstore/games';


export const create = async (data) =>{
    const result = await fetcher.createGame(BASE_URL,data);
    return result;
}
