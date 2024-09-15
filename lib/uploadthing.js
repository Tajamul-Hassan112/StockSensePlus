// import {
//     generateUploadButton,
//     generateUploadDropzone,
//   } from "@uploadthing/react";
   

   
//   export const UploadButton = generateUploadButton<OurFileRouter>();
//   export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
import { generateUploadButton, generateUploadDropzone } from "@uploadthing/react";
import { ourFileRouter } from "../app/api/uploadthing/core"; // Adjust the path if necessary

// Generate the upload button and dropzone without using generics
export const UploadButton = generateUploadButton(); 
export const UploadDropzone = generateUploadDropzone();

