import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./DropzoneArea.scss";

const DropzoneArea = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = function () {
      const base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
      localStorage.setItem("uploadedFile", base64String);
    };

    reader.readAsDataURL(file);
  }, []);

 
  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()}  />
      {acceptedFiles.length === 0 && (
        <p>Add Your Resume </p>
      )}
      {acceptedFiles.length > 0 && (
        <div>
         
          <ul>
            {acceptedFiles.map((file) => (
              <li key={file.name}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropzoneArea;
