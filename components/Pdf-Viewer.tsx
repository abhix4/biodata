// components/PDFClientViewer.tsx
'use client'; // if you're on App Router

import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './Document';
import { useAtom } from 'jotai';
import { UserAtom } from '@/atoms/user';


export default function PDFClientViewer() {
  const userData = useAtom(UserAtom)
  console.log(userData[0])
  return (
    <PDFViewer style={{ width: '100%', height: '90vh', border: '2px solid #ddd' , borderRadius:'12px' }}>
      <MyDocument userData={userData[0]} />
    </PDFViewer>
  );
}
