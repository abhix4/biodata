"use client"
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { useAtom } from 'jotai';
import { UserAtom } from '@/atoms/user';
import { title } from 'process';

// Create styles
const styles = StyleSheet.create({
  page: {

    fontFamily:"Helvetica",
    border:'1px solid #ddd',
    padding:20
  },
  heading:{
    fontSize:22,

  },
  title:{
    fontSize:14
  },
  text:{
    fontSize:12,
    paddingTop:8
  },
  section: {
    width:300,
    margin: 10,
    padding: 10,
  }
});

// Create Document Component



export default function MyDocument(){
    const userData = useAtom(UserAtom)
    return (
    <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>Personal Details</Text>
        <Text style={styles.text}>Name: {userData[0].Name}</Text>
        <Text style={styles.text}>Date of birth: {userData[0].DateOfBirth}</Text>
        <Text style={styles.text}>Place of birth: {userData[0].PlaceOfBirth}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Family Details</Text>
        <Text style={styles.text}>Father's name: {userData[0].FatherName}</Text>
        <Text style={styles.text}>Father's occupation: {userData[0].FatherOccupation}</Text>
        <Text style={styles.text}>Mother's name: {userData[0].MotherName}</Text>
        <Text style={styles.text}>Mother's occupation: {userData[0].MotherOccupation}</Text>
        <Text style={styles.text}>Siblings: {userData[0].Siblings}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Contact Details</Text>
        <Text style={styles.text}>Contact number: {userData[0].ContactNumber}</Text>
        <Text style={styles.text}>Residential address: {userData[0].Address}</Text>
        
      </View>
    </Page>
    </Document>
    )
}