import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // Importing FaTimes for the close button
import { pdfjs } from 'react-pdf';
import "bootstrap/dist/css/bootstrap.min.css";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFFrame = ({ file }) => {
    const [isOpen, setIsOpen] = useState(true); // State to manage PDF visibility

    const closePDF = () => {
        console.log("Close PDF button clicked"); // Log to check if the function is called
        setIsOpen(false); // Function to close the PDF
        console.log("isOpen state after click:", isOpen); // Log the state after click
    };

    return (
        <div style={{
            padding: 0,
            margin: 0,
            overflow: 'hidden',
            height: '100vh', // Set to full viewport height
            width: '100vw' // Set to full viewport width
        }}>
            {isOpen && ( // Conditionally render the iframe
                <>
                    <iframe
                        src={file ? `${file}#view=FitH&zoom=500&toolbar=0&navpanes=0&scrollbar=0` : ""}
                        width="100%"
                        height="100%" // Set to full height
                        title="PDF Viewer"
                        style={{
                            border: 'none',
                            padding: 0,
                            margin: 0, // Remove margin
                            display: 'block'
                        }}
                    />
                    <button
                        className="pdf-close-btn"
                        onClick={closePDF}
                    >
                        <FaTimes size={24} />
                    </button>
                </>
            )}
        </div>
    );
};

export default PDFFrame;
