import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { connect } from "react-redux";
import { action } from "./action";
import ReactJson from 'react-json-view'

const App = (props) => {

  return (
    <div>
      <div style={{ width: '65%', float: 'left', height: '100vh', overflow: 'auto' }}>
        <h1>No-reducer</h1>
        <h2>Create</h2>

        <div>
          <h3>Create an object or array</h3>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`dispatch(create('YOUR-OBJECT-NAME', { YOUR: 'OBJECT' }));`}
          </SyntaxHighlighter>

          <div>Example: Create array Users
            <div>
              <button onClick={() => props.action("createAnArrayFromAPI")}>
                Run
              </button>
            </div>

          </div>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`response = await axios.get('https://jsonplaceholder.typicode.com/Users');
                            \nawait dispatch(create('Users', response.data));`}
          </SyntaxHighlighter>


          <div>Example: Create object User
            <div>
              <button onClick={() => props.action("createAnObjectFromAPI")}>
                Run
              </button>
            </div>
          </div>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`response = await axios.get('https://jsonplaceholder.typicode.com/Users/2');
                    \nawait dispatch(create('User', response.data));`}
          </SyntaxHighlighter>

          <div>Example: Create nested objects in array
            <div>
              <button onClick={() => props.action("createNestedObjectInArray")}>
                Run
              </button>
            </div>
          </div>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`response = await axios.get('https://jsonplaceholder.typicode.com/Users/2');
                    \nawait dispatch(create('User', response.data));`}
          </SyntaxHighlighter>

          <br />

        </div>

        <h2>Insert</h2>
        <div>
          <h3>Insert an object or array</h3>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`await dispatch(insert('DESTINATION', 'OBJECT-NAME', PAYLOAD ))`}
          </SyntaxHighlighter>


          <div>Example: Insert object 'food' to User
            <div>
              <button onClick={() => props.action("insertObjectToObject")}>
                Run
              </button>
            </div>

          </div>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`await dispatch(insert('User', 'food', 'crawfish'));`}
          </SyntaxHighlighter>

          <div>Example: Insert array object 'Nicknames' to Users with id=2
            <div>
              <button onClick={() => props.action("insertObjectToArrayItem")}>
                Run
              </button>
            </div>

          </div>

          <SyntaxHighlighter language="javascript" style={docco}>
            {`await dispatch(insert('Users', "Nicknames", ['{ id: 1, name: 'Crawfish' },{ id: 2, name: 'Crawdad' },{ id: 3, name: 'Crayfish' }'], 2, 'id'));`}
          </SyntaxHighlighter>


          <div>Example: Insert array 'meal' to User
            <div>
              <button onClick={() => props.action("insertArrayToObject")}>
                Run
              </button>
            </div>
          </div>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`await dispatch(insert('User', 'meal', ["crawfish", "corn", "hotdog", "shrimp"]));`}
          </SyntaxHighlighter>

          <div>Example: Insert an object using destination path
            <div>
              <button onClick={() => props.action("insertObjectToNestedObject")}>
                Run
              </button>
            </div>
          </div>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`await dispatch(insert('User>address>geo', 'gps', { x: 1, y: 2, z: 3 }));`}
          </SyntaxHighlighter>


          <div>Example: Insert an object using destination path 2
            <div>
              <button onClick={() => props.action("insertObjectToNestedObject2")}>
                Run
              </button>
            </div>
          </div>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`await dispatch(insert('MyClass>students|id=3>companies', 'aka', 'X.com', 4, 'cid'));`}
          </SyntaxHighlighter>

          <div>Example: Example: Insert an object using destination path 3
            <div>
              <button onClick={() => props.action("insertObjectToNestedObject3")}>
                Run
              </button>
            </div>
          </div>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`await dispatch(insert('MyClass>students|id=3>companies|cid=3>cars', 'status','new', 1, 'mid'))`}
          </SyntaxHighlighter>


        </div>
        <br />


        <h2>Remove</h2>
        <div>
          <button onClick={() => props.action("createAnObjectFromAPI")}>
            Re-create object User
          </button>
          <button onClick={() => props.action("createAnArrayFromAPI")}>
            Re-create array Users
          </button>
          <h3>Remove an object</h3>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`await dispatch(remove('DESTINATION'));`}
          </SyntaxHighlighter>


          <div>Example: Remove geo object in address of User
            <div>
              <button onClick={() => props.action("removeAnObject")}>
                Run
              </button>
            </div>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`await dispatch(remove('User>address>geo'));`}
            </SyntaxHighlighter>

          </div>


          <h3>Remove an item in an array</h3>
          <SyntaxHighlighter language="javascript" style={docco}>
            {`await dispatch(remove('DESTINATION',CONDITION-VALUE,CONDITION-KEY));`}
          </SyntaxHighlighter>
          <div>Example: Remove User with id=8 in Users
            <div>
              <button onClick={() => props.action("removeAnItemOfArray")}>
                Run
              </button>
            </div>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`await dispatch(remove('Users', 8, 'id'))`}
            </SyntaxHighlighter>

          </div>

          <div>Example: Remove a meal=shrimp in meal of User
            <div>
              <button onClick={() => props.action("removeAnItemFromArrayOfObject")}>
                Run
              </button>
            </div>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`await dispatch(remove('User>meal','shrimp))`}
            </SyntaxHighlighter>

          </div>

          <br />
        </div>
        <div>

          <h2>Replace</h2>
          <div>
            <button onClick={() => props.action("createAnObjectFromAPI")}>
              Re-create object User
            </button>
            <button onClick={() => props.action("createAnArrayFromAPI")}>
              Re-create array Users
            </button>
            <button onClick={() => props.action("insertArrayToObject")}>
              Re-insert meal to User
            </button>
            <h3>Replace an object</h3>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`await dispatch(replace('DESTINATION',PAYLOAD));`}
            </SyntaxHighlighter>

            <div>Example: replace name of User
              <div>
                <button onClick={() => props.action("replaceAnObject")}>
                  Run
                </button>
              </div>
              <SyntaxHighlighter language="javascript" style={docco}>
                {`await dispatch(replace('User>name', "Crawfish Guy"))`}
              </SyntaxHighlighter>

            </div>

            <h3>Replace an item of an array</h3>
            <div>Example: Replace User with id 1 in Users
              <div>
                <button onClick={() => props.action("replaceAnItemInArray")}>
                  Run
                </button>
              </div>
              <SyntaxHighlighter language="javascript" style={docco}>
                {`await dispatch(replace('Users', { name: "Crawfish" }, 1, 'id'))`}
              </SyntaxHighlighter>

            </div>

            <div>Example: change the meal crawfish to crayfish
              <div>
                <button onClick={() => props.action("replaceAnItemInArrayOfObject")}>
                  Run
                </button>
              </div>
              <SyntaxHighlighter language="javascript" style={docco}>
                {`await dispatch(replace('User>meal', "crayfish", 'crawfish'))`}
              </SyntaxHighlighter>

            </div>
            <br />
          </div>

          <h2>Update</h2>
          <div>
            <button onClick={() => props.action("createAnObjectFromAPI")}>
              Re-create object User
            </button>
            <button onClick={() => props.action("createAnArrayFromAPI")}>
              Re-create array Users
            </button>
            <button onClick={() => props.action("insertArrayToObject")}>
              Re-insert meal to User
            </button>
            <h3>Update an object</h3>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`await dispatch(update('DESTINATION', {YOUR:OBJECT}))`}
            </SyntaxHighlighter>

            <div>Example: update website of User
              <div>
                <button onClick={() => props.action("updateAnObject")}>
                  Run
                </button>
              </div>
              <SyntaxHighlighter language="javascript" style={docco}>
                {`await dispatch(update('User', { website: "crawfish.com" }))`}
              </SyntaxHighlighter>

            </div>

            <h3>Update an item of an array</h3>
            <div>Example: Update Users with id=2
              <div>
                <button onClick={() => props.action("updateAnItemInArray")}>
                  Run
                </button>
              </div>
              <SyntaxHighlighter language="javascript" style={docco}>
                {` await dispatch(update('Users', { name: "Crawfish Lover" }, 2, 'id'))`}
              </SyntaxHighlighter>

            </div>

            <div>Example: Using destination path 1
              <div>
                <button onClick={() => props.action("updateAnItemFromNestedObject")}>
                  Run
                </button>
              </div>
            </div>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`await dispatch(update('MyClass>students|id=4>companies', { name: "Meta" }, 5, 'cid'))`}
            </SyntaxHighlighter>

            <div>Example: Using destination path 2
              <div>
                <button onClick={() => props.action("updateAnItemFromNestedObject2")}>
                  Run
                </button>
              </div>
            </div>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`await dispatch(update('MyClass>students|id=3>companies|cid=3>cars', { status: "old" }, 1, 'mid'))`}
            </SyntaxHighlighter>

          </div>
          <br />

          <h2>Append</h2>

          <div>
            <h3>Append an array</h3>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`dispatch(append('DESTINATION',[Your Array]));`}
            </SyntaxHighlighter>

            <div>Example: Append Users
              <div>
                <button onClick={() => props.action("appendAnArray")}>
                  Run
                </button>
              </div>

            </div>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`response = await axios.get('https://jsonplaceholder.typicode.com/Users');
                    \nawait dispatch(append('Users', response.data))`}
            </SyntaxHighlighter>

            <br />

          </div>

          <h2>Clear</h2>

          <div>
            <button onClick={() => props.action("createAnObjectFromAPI")}>
              Re-create object User
            </button>
            <button onClick={() => props.action("createAnArrayFromAPI")}>
              Re-create array Users
            </button>
            <h3>Clear an object</h3>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`dispatch(clear('DESTINATION'));`}
            </SyntaxHighlighter>

            <div>Example: Clear User
              <div>
                <button onClick={() => props.action("clearAnObject")}>
                  Run
                </button>
              </div>

            </div>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`await dispatch(clear('User'))`}
            </SyntaxHighlighter>

            <h3>Clear an item in array</h3>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`dispatch(clear('DESTINATION',CONDITION-VALUE,CONDITION-KEY));`}
            </SyntaxHighlighter>

            <div>Example: Clear Users with id = 7
              <div>
                <button onClick={() => props.action("clearAnArray")}>
                  Run
                </button>
              </div>

            </div>
            <SyntaxHighlighter language="javascript" style={docco}>
              {`await dispatch(clear('Users', 7, 'id'))`}
            </SyntaxHighlighter>

            <br />
          </div>
        </div>
      </div>

      <div style={{ width: '35%', float: 'right', height: '100vh', overflow: 'auto' }}>
        <ReactJson src={props.ds} collapsed={true} />

      </div>
    </div>
  );
}

export default connect(state => state, { action })(App);
