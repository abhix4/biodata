// components/PDFClientViewer.tsx
'use client'; // if you're on App Router

import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './Document';


export default function PDFClientViewer() {
  return (
    <PDFViewer style={{ width: '100%', height: '90vh', border: '2px solid #ddd' , borderRadius:'12px' }}>
      <MyDocument />
    </PDFViewer>
  );
}
