"use client"

import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { DynamicFields } from "./Dynamic-Input";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export function ContactDetails({register, unregister}: any) {

  const [additonalFields, setAdditionalFields] = useState(0)
  const [deleteIndex, setDeleteIndex] = useState<number []>([])
  const [removeField, setRemoveField] = useState<boolean>(false)

  function deleteField(index:number){
    setDeleteIndex((prev) => [...prev,index])
    setRemoveField(true)
  }

  return (  
    <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Contact Details</AccordionTrigger>
    <AccordionContent>
      <div>
    <form  className="flex flex-col gap-3">
 
      <div className="flex flex-col gap-2">
        <Label htmlFor="contactNumber">Contact Number</Label>
      <Input {...register("contactNumber")} placeholder="Enter contact number" />
      </div>
     <div className="flex flex-col gap-2">
         <Label htmlFor="residentialAddress">Residential Address</Label>
      <Input {...register("residentialAddress")} placeholder="Enter residential address" />
     </div>
   
      {/* <Button className="mt-4">Add fields</Button> */}
      {
      Array.from({length: additonalFields}).map((_, index) => (
        deleteIndex.includes(index) ? null :
       <AdditonalFields key={index} register={register} index={index} deleteField={deleteField} unregister={unregister}/>
      ))
     }
    </form>
        <Button className="mt-4 border border-dashed bg-black/10 text-black border-black/40 hover:bg-black/25" onClick={() => setAdditionalFields(additonalFields => additonalFields + 1)}>Add fields</Button>
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
          <DynamicFields register={register} formType={"contact"} removeTheField={removeField} unregister={unregister}/>

          </div>
          <Trash2 size={20} className="cursor-pointer w-1/10 text-red-600" onClick={handleDelete} />
  </div>
  )
}