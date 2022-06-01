export const baseURL = 'https://api.apilayer.com/fixer'


export const axios = {
  get: (endPoint: string) => {
    return fetch(`${baseURL}/${endPoint}?apikey=V1nVADguqCbE5d2p1SJAsc3PKgBLbByr`)
  },
  
}

