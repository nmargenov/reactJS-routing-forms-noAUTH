import * as fetcher from './fetcher';

const BASE_URL = 'http://localhost:3030/jsonstore/games';


export const create = async (data) =>{
    const result = await fetcher.createGame(BASE_URL,data);
    return result;
}

export const getAllGames = async () =>{
    const result = await fetcher.get(BASE_URL);
    return Object.values(result);
}

export const getGameById = async (id) =>{
    const result = await fetcher.get(BASE_URL+`/${id}`);
    return result;
}

export const deleteGameById = async (id) =>{
    const result = await fetcher.del(BASE_URL+`/${id}`);
    return result;
}