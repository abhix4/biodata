"use client"
import { UserAtom } from "@/atoms/user";
import { ContactDetails } from "@/components/Contact-Details";
import { FamilyDetails } from "@/components/Family-Details";
import PDFClientViewer from "@/components/Pdf-Viewer";
import { PersonalDetails } from "@/components/Personal-Details";
import { Button } from "@/components/ui/button";
import { useAtom, useSetAtom } from "jotai";
import { FileText } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";


export default function Home() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    const setUserData = useSetAtom(UserAtom)
    const userData = useAtom(UserAtom)
    console.log(data)
  return (
    <div className="flex gap-4 p-4 max-h-screen">
     <div className="w-1/2 px-8 py-8 border border-black/15 rounded-lg overflow-y-scroll">
      <div className="flex flex-col gap-6">
      <PersonalDetails register={register}/>
      <FamilyDetails register={register}/>
      <ContactDetails register={register}/>
      </div>
      <Button onClick={handleSubmit((data) => {setData(JSON.stringify(data))
        setUserData({
          Name: data.Name,
          DateOfBirth: data.DateOfBirth,
          PlaceOfBirth: data.PlaceOfBirth,
          FatherName: data.fatherName,
          FatherOccupation: data.fatherOccupation,
          MotherName: data.motherName,
          MotherOccupation: data.motherOccupation,
          Siblings: data.siblings,
          Address: data.residentialAddress,
          ContactNumber: data.contactNumber,
        })
        toast.success("Data submitted successfully! You can now view the PDF.")
      })} className="mt-8 w-40 cursor-pointer bg-yellow-500 hover:bg-yellow-600" >Submit</Button>
     </div>
     <div className="w-1/2 px-8 py-8  border border-black/15 rounded-lg"> 
     {
       userData[0] && userData[0].Name ? <PDFClientViewer/> : <div className="flex gap-4  flex-col items-center justify-center h-full text-black/40"> 
       <FileText size={100} />
       please add content see the pdf</div>
     }
      
     </div>
    </div>
  );
}
