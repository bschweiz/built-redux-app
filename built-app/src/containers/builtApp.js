import {AgGridColumn, AgGridReact} from 'ag-grid-react';


function BuiltApp() {
    const rowData = [
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 }
    ];
  
    return (
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <img src={logo} className="App-logo" alt="logo" />
        <AgGridReact
          rowData={rowData}>
          <AgGridColumn field="make"></AgGridColumn>
          <AgGridColumn field="model"></AgGridColumn>
          <AgGridColumn field="price"></AgGridColumn>
        </AgGridReact>
      </div>
  
      // <div className="App">
      //   <header className="App-header">
      //     <Counter />
      //     <p>
      //       Welcome to this <code>built</code> challenge app.
      //     </p>
      //     <span>
      //       <span>Learn </span>
      //       <a
      //         className="App-link"
      //         href="https://reactjs.org/"
      //         target="_blank"
      //         rel="noopener noreferrer"
      //       >
      //         React
      //       </a>
      //       <span>, </span>
      //       <a
      //         className="App-link"
      //         href="https://redux.js.org/"
      //         target="_blank"
      //         rel="noopener noreferrer"
      //       >
      //         Redux
      //       </a>
      //       <span>, </span>
      //       <a
      //         className="App-link"
      //         href="https://redux-toolkit.js.org/"
      //         target="_blank"
      //         rel="noopener noreferrer"
      //       >
      //         Redux Toolkit
      //       </a>
      //       ,<span> and </span>
      //       <a
      //         className="App-link"
      //         href="https://react-redux.js.org/"
      //         target="_blank"
      //         rel="noopener noreferrer"
      //       >
      //         React Redux
      //       </a>
      //     </span>
      //   </header>
      // </div>
    );
  }
  
  export default BuiltApp;