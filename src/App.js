import React, { useState } from 'react';
import { Document, Page} from 'react-pdf'

function App() {

  const [numPages, setNumPages ] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const files = [
    {
      name: "1.pdf",
      visible: true
    },
    {
      name: "2.pdf",
      visible: true
    },
    {
      name: "3.pdf",
      visible: false
    },
    {
      name: "sab15jv.pdf",
      visible: true
    },
    
  ]

  let onDocumentLoadSuccess = ({numPages}) => {
    setNumPages(numPages)
    // setPageNumber(1)
  }


  return (
    <div className="App">
      <div>
        <ul>
          {
            files.map(file  => {
            if(file.visible){
              return (
                <li>{file.name}</li>
              )}
            })
          }
        </ul>

      </div>
      {
        files.map(file  => {
          if(file.visible){
            return (
            <Document
                file={`files/${file.name}`}
                options={{ workerSrc: "/pdf.worker.js" }}
                onLoadSuccess={onDocumentLoadSuccess}
              >
               <Page pageNumber={pageNumber} />
              </Document>

            )}
          
        })
      }
    </div>
  );
}

export default App;
