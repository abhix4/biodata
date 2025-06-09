import {atom} from 'jotai'

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
  Address: string;
  ContactNumber: string;
  [key: string]: string; // 🔥 allows dynamic fields like os, browser, etc.
};

export const UserAtom = atom<UserData>({
    Name:'',
    DateOfBirth:'',
    PlaceOfBirth:'',
    Rashi:'',
    Nakshatra:'',
    Complexion:'',
    Height:'',
    Education:'',
    Job:'',
    FatherName:'',
    FatherOccupation:'',
    MotherName:'',
    MotherOccupation:'',
    Siblings:'',
    Address:'',
    ContactNumber:'',
   
})