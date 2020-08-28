import React, { useState } from 'react';
import { Document, Page} from 'react-pdf'

function App() {
  
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [files, setFiles] = useState([])

  const ops = [
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

  

  const addToList = (e, name) => {
    const file = { name, visible: 0 }
    setFiles(previas => [
      ...previas,
      file
    ])

  }


  return (
    <div className="App">
      <div>
          {
            ops.map(op  => {
              return (
                  <button key={op.name} onClick={(e) => addToList(e, op.name)}>{op.name}</button>
              )
            })
          }
      </div>
      {
        files.map(file  => {
          return (
            <Document
              file={`files/${file.name}`}
              options={{ workerSrc: "/pdf.worker.js" }}
              onLoadSuccess={onDocumentLoadSuccess}
              key={file.name}
            >
               <Page pageNumber={pageNumber} />
            </Document>
          )
        })
          
      }
    </div>
  );
}

export default App;
