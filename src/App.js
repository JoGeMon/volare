import React, { useState } from 'react';
import { Document, Page} from 'react-pdf'
import logo from './logo.svg';
import './App.css';

function App() {

  const [numPages, setNumPages ] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  let onDocumentLoadSuccess = ({numPages}) => {
    setNumPages(numPages)
    // setPageNumber(1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Document
       file={ '/files/2.pdf' }
       options={{ workerSrc: "/pdf.worker.js" }}
       onLoadSuccess={onDocumentLoadSuccess}
       >
         <Page pageNumber={pageNumber} />
       </Document>
       <p>{pageNumber} of {numPages}</p>
    </div>
  );
}

export default App;
