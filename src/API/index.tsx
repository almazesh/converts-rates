import { axios } from './api';

export const getRates = (endPoint:string) => axios.get(endPoint)
