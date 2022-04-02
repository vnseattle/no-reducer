/*
Dynamic Reducer

Copyright © 2022 Henry Nguyen (Dev9x)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


import { CREATE } from './core/create';
import { REMOVE } from './core/remove';
import { INSERT } from './core/insert';
import { REPLACE } from './core/replace';
import { UPDATE } from './core/update';
import { APPEND } from './core/append';
import { CLEAR } from './core/clear';


export const reducer = (state = {}, action) => {
    switch (action.type) {
        case `CREATE`:
            return CREATE(state, action);
        case "REMOVE":
            return REMOVE(state, action);
        case "INSERT":
            return INSERT(state, action);
        case "REPLACE":
            return REPLACE(state, action);
        case "UPDATE":
            return UPDATE(state, action);
        case "APPEND":
            return APPEND(state, action);
        case "CLEAR":
            return CLEAR(state, action);
        default:
            return state

    }
}

export const create = (name, payload) => {
    return {
        type: `CREATE`,
        name,
        payload,
    }
}

export const remove = (name, value, target) => {
    return {
        type: "REMOVE",
        name,
        value,
        target
    }
}

export const insert = (name, payloadName, payload, value, target) => {
    return {
        type: "INSERT",
        name,
        payloadName,
        payload,
        value,
        target
    }
}

export const replace = (name, payload, value, target) => {
    return {
        type: "REPLACE",
        name,
        value,
        target,
        payload,
    }
}

export const update = (name, payload, value, target) => {
    return {
        type: "UPDATE",
        name,
        value,
        target,
        payload,
    }
}


export const append = (name, payload) => {
    return {
        type: "APPEND",
        name,
        payload,
    }
}

export const clear = (name, value, target) => {
    return {
        type: "CLEAR",
        name,
        value,
        target,
    }
}

