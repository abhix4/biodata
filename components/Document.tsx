// MyDocument.tsx
import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';

// Define styles
const styles = StyleSheet.create({
  page: { fontFamily: 'Times-Roman', padding: 20 },
  heading: { fontSize: 18, marginBottom: 10 },
  section: { width: 300, margin: 10, padding: 10 },
  borderedBox: {
    border: '1px solid #f9ec63',
    padding: 10,
    marginBottom: 10,
    height: '100%',
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 6,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 4,
    width: 800,
    justifyContent: 'space-between'
  },
  label: {
    width: 170,
    fontSize: 14,
    fontWeight: 'medium',
  },
  value: {
    minWidth:100,
    fontSize: 14,
    flex: 1,
  },
});

type UserData = {
  Name: string;
  DateOfBirth: string;
  PlaceOfBirth: string;
  Rashi: string;
  Nakshatra: string;
  Complexion: string;
  Height: string;
  Education: string;
  Job: string;
  FatherName: string;
  FatherOccupation: string;
  MotherName: string;
  MotherOccupation: string;
  Siblings: string;
  ContactNumber: string;
  Address: string;
};

export default function MyDocument({ userData }: { userData: any }) {

 const personalObject: [string, string][] =
  Object.entries(userData)
    .filter(([key]) => key.startsWith('personal-')) // pick only 'personal-' keys
    .map(([key, value]) => [key.replace('personal-', ''), String(value)]) // remove 'personal-' prefix and ensure value is string


 const familyObject = Object.fromEntries(
  Object.entries(userData)
    .filter(([key]) => key.startsWith('family-')) // pick only 'personal-' keys
    .map(([key, value]) => [key.replace('family-', ''), value]) // remove 'personal-' prefix
);

 const contactObject = Object.fromEntries(
  Object.entries(userData)
    .filter(([key]) => key.startsWith('contact-')) // pick only 'personal-' keys
    .map(([key, value]) => [key.replace('contact-', ''), value]) // remove 'personal-' prefix
);

  console.log(contactObject)
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.borderedBox} wrap={false}>
          <Image style={styles.image} src="/ganesha.png" />

          <View style={styles.section}>
            <Text style={styles.heading}>Personal Details</Text>
            <View style={styles.row}>
              <Text style={styles.label}>Name</Text>
              <Text style={styles.value}>{":        " + userData.Name.charAt(0).toUpperCase() + userData.Name.slice(1)}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Date of birth</Text>
              <Text style={styles.value}>{":        " +userData.DateOfBirth}</Text>
            </View>

            {
              userData.Rashi && 
            <View style={styles.row}>
              <Text style={styles.label}>Rashi</Text>
              <Text style={styles.value}>{":        " +userData.Rashi}</Text>
            </View>
            }

         {   userData.Nakshatra &&
            <View style={styles.row}>
              <Text style={styles.label}>Nakshatra</Text>
              <Text style={styles.value}>{":        " +userData.Nakshatra}</Text>
            </View>
          }

         {  userData.complexion && 
            <View style={styles.row}>
              <Text style={styles.label}>Complexion</Text>
              <Text style={styles.value}>{":        " +userData.Complexion}</Text>
            </View>
}
           { userData.Height &&
            <View style={styles.row}>
              <Text style={styles.label}>Height</Text>
              <Text style={styles.value}>{":        " +userData.Height}</Text>
            </View>
}
            <View style={styles.row}>
              <Text style={styles.label}>Education</Text>
              <Text style={styles.value}>{":        " +userData.Education}</Text>
            </View>

          {  userData.Job && 
            <View style={styles.row}>
              <Text style={styles.label}>Job / Occupation</Text>
              <Text style={styles.value}>{":        " +userData.Job}</Text>
            </View>

}
            <View style={styles.row}>
              <Text style={styles.label}>Place of birth</Text>
              <Text style={styles.value}>{":        " +userData.PlaceOfBirth.charAt(0).toUpperCase() + userData.PlaceOfBirth.slice(1)}</Text>
            </View>

            {
              Object.entries(personalObject).map(([key,value]) =>   <View style={styles.row} key={key}>
              <Text style={styles.label}>{value[0]}</Text>
              <Text style={styles.value}>{":        " + value[1]}</Text>
            </View>
 )
            }
          
          </View>

          <View style={styles.section}>
            <Text style={styles.heading}>Family Details</Text>
           { userData.FatherName && <View style={styles.row}>
              <Text style={styles.label}>Father's name</Text>
              <Text style={styles.value}>{":        " +userData.FatherName.charAt(0).toUpperCase() + userData.FatherName.slice(1)}</Text>
            </View>}
         { userData.FatherOccupation &&   <View style={styles.row}>
              <Text style={styles.label}>Father's occupation</Text>
              <Text style={styles.value}>{":        " +userData.FatherOccupation.charAt(0).toUpperCase() + userData.FatherOccupation.slice(1)}</Text>
            </View>}
           {userData.MotherName && <View style={styles.row}>
              <Text style={styles.label}>Mother's name</Text>
              <Text style={styles.value}>{":        " +userData.MotherName.charAt(0).toUpperCase() + userData.MotherName.slice(1)}</Text>
            </View>}
          { userData.MotherOccupation &&  <View style={styles.row}>
              <Text style={styles.label}>Mother's occupation</Text>
              <Text style={styles.value}>{":        " +userData.MotherOccupation.charAt(0).toUpperCase() + userData.MotherOccupation.slice(1)}</Text>
            </View>}
          { userData.Siblings &&  <View style={styles.row}>
              <Text style={styles.label}>Siblings</Text>
              <Text style={styles.value}>{":        " +userData.Siblings}</Text>
            </View>}

 {
  (Object.entries(familyObject) as [string, string][]).map(([key, value]) => (
    <View style={styles.row} key={key}>
      <Text style={styles.label}>{key}</Text>
      <Text style={styles.value}>{":        " + value}</Text>
    </View>
  ))
}
          </View>

          <View style={styles.section}>
            <Text style={styles.heading}>Contact Details</Text>
          {
          userData.ContactNumber &&
          <View style={styles.row}>
              <Text style={styles.label}>Contact number</Text>
              <Text style={styles.value}>{":        " +userData.ContactNumber}</Text>
            </View>}
        { userData.Address &&    <View style={styles.row}>
              <Text style={styles.label}>Residential address</Text>
              <Text style={styles.value}>{":        " +userData.Address.charAt(0).toUpperCase() + userData.Address.slice(1)}</Text>
            </View>}
 {
  (Object.entries(contactObject) as [string, string][]).map(([key, value]) => (
    <View style={styles.row} key={key}>
      <Text style={styles.label}>{key}</Text>
      <Text style={styles.value}>{":        " + value}</Text>
    </View>
  ))
}
          </View>
        </View>
      </Page>
    </Document>
  );
}
