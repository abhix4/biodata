"use client"
import { UserAtom } from "@/atoms/user";
import { ContactDetails } from "@/components/Contact-Details";
import { FamilyDetails } from "@/components/Family-Details";
import HowItWorks from "@/components/HowItWorks";
import PDFClientViewer from "@/components/Pdf-Viewer";
import { PersonalDetails } from "@/components/Personal-Details";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useAtom, useSetAtom } from "jotai";
import { FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator"


export default function Home() {
    const { register, handleSubmit, unregister } = useForm();
    const [data, setData] = useState("");
    const setUserData = useSetAtom(UserAtom)
    const userData = useAtom(UserAtom)
    console.log(data)

    const [seenOnboarding, setSeenOnboarding] = useState(true)
    useEffect(() => {
        const onboarding = localStorage.getItem("seenHowItWorks")
        setSeenOnboarding(onboarding === "true")
    },[])


  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 h-screen relative">
     <div className="md:w-1/2  border border-black/15 rounded-lg overflow-y-scroll my-scroll-container relative">
       {/* <SidebarTrigger /> */}
      <div className="flex flex-col gap-6 px-6 py-8">
      <PersonalDetails register={register} unregister={unregister}/>
      <Separator/>
      <FamilyDetails register={register} unregister={unregister}/>
      <Separator/>
      <ContactDetails register={register} unregister={unregister}/>
      </div>
     <div className="sticky bottom-0 backdrop-blur-md bg-white/60 flex items-center justify-end h-20 w-full rounded-b-lg px-10">
       <Button onClick={handleSubmit((data) => {setData(JSON.stringify(data))
        setUserData({
          Name: data.Name,
          DateOfBirth: data.DateOfBirth,
          PlaceOfBirth: data.PlaceOfBirth,
          Rashi: data.Rashi,
          Nakshatra: data.Nakshatra,
          Complexion: data.Complexion,
          Height: data.Height,
          Education: data.Education,
          Job: data.Job,
          FatherName: data.fatherName,
          FatherOccupation: data.fatherOccupation,
          MotherName: data.motherName,
          MotherOccupation: data.motherOccupation,
          Siblings: data.siblings,
          Address: data.residentialAddress,
          ContactNumber: data.contactNumber,
          ...data // This will include any extra fields not listed above
        })
        
        console.log("jotai", userData)
        toast.success("Data submitted successfully! You can now view the PDF.")
      })} className=" w-40 cursor-pointer bg-yellow-500 hover:bg-yellow-600" >Submit</Button>
     </div>
     </div>
     <div className="md:w-1/2 px-8 py-4  border border-black/15 rounded-lg"> 
     {
       userData[0] && userData[0].Name ? <PDFClientViewer/> : <div className="flex gap-4  flex-col items-center justify-center h-full text-black/40"> 
       <FileText size={100} />
       Please add details see the pdf</div>
     }
      
     </div>
     {
      seenOnboarding ? null : <div className="w-full h-screen absolute top-0 left-0 bg-black/50 z-10 flex items-center justify-center">
      <HowItWorks setSeenOnboarding={setSeenOnboarding}/>
     </div>
     }
    </div>
    
  );
}
