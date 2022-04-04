import axios from "axios";
import { create, remove, insert, replace, update, append, clear } from "no-reducer";

export const action = (action = "") => {
    return async (dispatch) => {
        try {
            switch (action) {
                case "createAnArrayFromAPI":
                    let response = await axios.get('https://jsonplaceholder.typicode.com/users');
                    await dispatch(create('Users', response.data));
                    break;

                case "createAnObjectFromAPI":
                    let response2 = await axios.get('https://jsonplaceholder.typicode.com/users/2');
                    console.log(response2)
                    await dispatch(create('User', response2.data));
                    break;

                case "createNestedObjectInArray":
                    await dispatch(create('MyClass', {
                        name: 'Computer',
                        students: [
                            {
                                id: 1,
                                name: 'Bill Gate',
                                companies: [{ cid: 1, name: 'Microsoft', found: 1975 }]
                            },
                            {
                                id: 2,
                                name: 'Steve Jobs',
                                companies: [{ cid: 2, name: 'Apple', found: 1976 }]
                            },
                            {
                                id: 3,
                                name: 'Elon Musk',
                                companies: [{ cid: 3, name: 'Tesla', found: 2003, cars: [{ mid: 1, n: 'Model X' }, { mid: 2, n: 'Model Y' }, { mid: 3, n: 'Model S' }] }, { cid: 4, name: 'Paypal', found: 1999 }],
                            },
                            {
                                id: 4,
                                name: 'Mark Zuckerberg',
                                companies: [{ cid: 5, name: 'Facebook', found: 2004 }]
                            },

                        ]
                    }));
                    break;

                case "insertObjectToObject":
                    await dispatch(insert('User', 'food', "crawfish"));
                    break;

                case "insertArrayToObject":
                    await dispatch(insert('User', 'meal', ["crawfish", "corn", "hotdog", "shrimp"]));
                    break;

                case "insertObjectToArrayItem":
                    await dispatch(insert('Users', "Nicknames", [
                        { id: 1, name: 'Crawfish' },
                        { id: 2, name: 'Crawdad' },
                        { id: 3, name: 'Crayfish' }], 2, 'id'));
                    break;

                case "insertObjectToNestedObject":
                    await dispatch(insert('User>address>geo', 'gps', { x: 1, y: 2, z: 3 }));
                    break;

                case "insertObjectToNestedObject2":
                    await dispatch(insert('MyClass>students|id=3>companies', 'a.k.a', 'X.com', 4, 'cid'));
                    break;

                case "insertObjectToNestedObject3":
                    await dispatch(insert('MyClass>students|id=3>companies|cid=3>cars', 'status', 'new', 1, 'mid'));
                    break;

                case "insertBranchToLeaf":
                    await dispatch(insert('User', 'name', { first: 'Craw', last: 'Fish' }));
                    break;

                case "removeAnObject":
                    await dispatch(remove('User>address>geo'))
                    break;

                case "removeAnItemOfArray":
                    await dispatch(remove('Users', 8, 'id'))
                    break;

                case "removeAnItemFromArrayOfObject":
                    await dispatch(remove('User>meal', 'shrimp'))
                    break;

                case "replaceAnItemInArray":
                    await dispatch(replace('Users', { name: "Crawfish" }, 1, 'id'))
                    break;

                case "replaceAnObject":
                    await dispatch(replace('User>name', "Crawfish Guy"))
                    break;

                case "replaceAnItemInArrayOfObject":
                    await dispatch(replace('User>meal', "crayfish", 'crawfish'))
                    break;

                case "updateAnItemInArray":
                    await dispatch(update('Users', { name: "Crawfish Lover" }, 2, 'id'))
                    break;

                case "updateAnObject":
                    await dispatch(update('User', { website: "crawfish.com" }))
                    break;

                case "updateAnItemFromNestedObject":
                    await dispatch(update('MyClass>students|id=4>companies', { name: "Meta" }, 5, 'cid'))
                    break;

                case "updateAnItemFromNestedObject2":
                    await dispatch(update('MyClass>students|id=3>companies|cid=3>cars', { status: "old" }, 1, 'mid'))
                    break;

                case "appendAnArray":
                    let response3 = await axios.get('https://jsonplaceholder.typicode.com/users');
                    console.log(response3.data)
                    await dispatch(append('Users', [...response3.data]))
                    break;

                case "clearAnObject":
                    await dispatch(clear('User'))
                    break;

                case "clearAnArray":
                    await dispatch(clear('Users', 7, 'id'))
                    break;
                default:
                    return "";
            }
        } catch (err) {
            console.log(err)
        }
    };
}