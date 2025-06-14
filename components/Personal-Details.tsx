"use client"

import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useState } from "react";
import { DynamicFields } from "./Dynamic-Input";
import { Trash2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export function PersonalDetails({register, unregister}: any) {

  const [additonalFields, setAdditionalFields] = useState(0)
  const [deleteIndex, setDeleteIndex] = useState<number []>([])

  function deleteField(index:number){
    setDeleteIndex((prev) => [...prev,index])
  }

  return (
    <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger >Personal Details</AccordionTrigger>
    <AccordionContent>
     <div>
          <form  className="flex flex-col gap-3">
      
      <div className="flex flex-col gap-2">
        <Label htmlFor="Name">Name</Label>
      <Input {...register("Name")} placeholder="Name" />
      </div>
      <div  className="flex flex-col gap-2">
        <Label htmlFor="DateOfBirth">Date of Birth</Label>
      <Input {...register("DateOfBirth")} placeholder="DD/MM/YYYY" />
      </div>
         <div  className="flex flex-col gap-2">
        <Label htmlFor="Rashi">Rashi</Label>
      <Input {...register("Rashi")} placeholder="Rashi" />
      </div>
         <div  className="flex flex-col gap-2">
        <Label htmlFor="Nakshatra">Nakshatra</Label>
      <Input {...register("Nakshatra")} placeholder="Nakshatra" />
      </div>
      <div  className="flex flex-col gap-2">
        <Label htmlFor="Complexion">Complexion</Label>
        <Input {...register("Complexion")} placeholder="Complexion" />
      </div>
       <div  className="flex flex-col gap-2">
        <Label htmlFor="Height">Height</Label>
        <Input {...register("Height")} placeholder="5ft 4inches" />
      </div>
         <div  className="flex flex-col gap-2">
        <Label htmlFor="Education">Education</Label>
        <Input {...register("Education")} placeholder="Education" />
      </div>
         <div  className="flex flex-col gap-2">
        <Label htmlFor="Job">Job/Occupation</Label>
        <Input {...register("Job")} placeholder="Job" />
      </div>
      
     <div  className="flex flex-col gap-2">
         <Label htmlFor="DateOfBirth">Place of Birth</Label>
      <Input {...register("PlaceOfBirth")} placeholder="Place of birth" />
     </div>
   {
      Array.from({length: additonalFields}).map((_, index) => (
        deleteIndex.includes(index) ? null :
       <AdditonalFields key={index} register={register} index={index} deleteField={deleteField} unregister={unregister}/>
      ))
     }
    </form>
                <Button className="mt-4 border border-dashed bg-black/10 text-black border-black/40  hover:bg-black/25" onClick={() => setAdditionalFields(additonalFields => additonalFields + 1)}>Add fields</Button>

    </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>
   
  );
}


function AdditonalFields({register, index, deleteField, unregister}:any){

  const [removeField, setRemoveField] = useState<boolean>(false)
  const handleDelete = () => {
      setRemoveField(true) 
      
      setTimeout(() => {
      deleteField(index)
      },200)
 
  }
  return (
  <div className="flex flex-row  items-center "  >
          <div className="w-9/10">
          <DynamicFields register={register} formType={"personal"} removeTheField={removeField} unregister={unregister}/>

          </div>
          <Trash2 size={20} className="cursor-pointer w-1/10 text-red-600" onClick={handleDelete} />
  </div>
  )
}