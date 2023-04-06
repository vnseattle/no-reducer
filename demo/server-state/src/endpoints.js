export const endpoints = {
    GET_POST : () => { return {
        url: 'https://run.mocky.io/v3/0aa9a7d8-a9d8-4a09-87fe-68b6654dd11d'
        ,reducers: [{src: 'data', target: 'posts'}]
    }},
 
    DELETE_POST : (id) => { return {
        url: 'https://run.mocky.io/v3/87c88f5a-c544-4d92-bbdc-df06b8a53a9a'
        ,reducers: [{src: 'data', target: 'posts'}]
    }}

}