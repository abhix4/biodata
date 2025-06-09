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


            <View style={styles.row}>
              <Text style={styles.label}>Rashi</Text>
              <Text style={styles.value}>{":        " +userData.Rashi}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Nakshatra</Text>
              <Text style={styles.value}>{":        " +userData.Nakshatra}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Complexion</Text>
              <Text style={styles.value}>{":        " +userData.Complexion}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Height</Text>
              <Text style={styles.value}>{":        " +userData.Height}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Education</Text>
              <Text style={styles.value}>{":        " +userData.Education}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Job / Occupation</Text>
              <Text style={styles.value}>{":        " +userData.Job}</Text>
            </View>


            <View style={styles.row}>
              <Text style={styles.label}>Place of birth</Text>
              <Text style={styles.value}>{":        " +userData.PlaceOfBirth.charAt(0).toUpperCase() + userData.PlaceOfBirth.slice(1)}</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.heading}>Family Details</Text>
            <View style={styles.row}>
              <Text style={styles.label}>Father's name</Text>
              <Text style={styles.value}>{":        " +userData.FatherName.charAt(0).toUpperCase() + userData.FatherName.slice(1)}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Father's occupation</Text>
              <Text style={styles.value}>{":        " +userData.FatherOccupation.charAt(0).toUpperCase() + userData.FatherOccupation.slice(1)}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Mother's name</Text>
              <Text style={styles.value}>{":        " +userData.MotherName.charAt(0).toUpperCase() + userData.MotherName.slice(1)}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Mother's occupation</Text>
              <Text style={styles.value}>{":        " +userData.MotherOccupation.charAt(0).toUpperCase() + userData.MotherOccupation.slice(1)}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Siblings</Text>
              <Text style={styles.value}>{":        " +userData.Siblings}</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.heading}>Contact Details</Text>
            <View style={styles.row}>
              <Text style={styles.label}>Contact number</Text>
              <Text style={styles.value}>{":        " +userData.ContactNumber}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Residential address</Text>
              <Text style={styles.value}>{":        " +userData.Address.charAt(0).toUpperCase() + userData.Address.slice(1)}</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
