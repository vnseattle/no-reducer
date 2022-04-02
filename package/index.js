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

