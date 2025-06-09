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


export function FamilyDetails({register, unregister}: any) {

 const [additonalFields, setAdditionalFields] = useState(0)

   const [deleteIndex, setDeleteIndex] = useState<number []>([])
  const [removeField, setRemoveField] = useState<boolean>(false)

  function deleteField(index:number){
    setDeleteIndex((prev) => [...prev,index])
    setRemoveField(true)
  }

  const unregisterField =():void =>{}
  return (
    <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Family Details</AccordionTrigger>
    <AccordionContent>
    <div>
    <form  className="flex flex-col gap-3">
      
      <div className="flex flex-col gap-2">
          <Label htmlFor="fatherName">Father's Name</Label>
      <Input {...register("fatherName")} placeholder="Father's Name" />
      </div>
      <div className="flex flex-col gap-2">
         <Label htmlFor="fatherOccupation">Father's occupation</Label>
      <Input {...register("fatherOccupation")} placeholder="Father's Occupation" />
      </div>
     <div className="flex flex-col gap-2">
           <Label htmlFor="motherName">Mother's name</Label>
      <Input {...register("motherName")} placeholder="Mother's Name" />
     </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="motherOccupation">Mother's occupation</Label>
      <Input {...register("motherOccupation")} placeholder="Mother's Occupation" />
      </div>
     <div className="flex flex-col gap-2">
           <Label htmlFor="siblings">Siblings</Label>
      <Input {...register("siblings")} placeholder="Number of siblings" />
     </div>
      {/* <Button className="mt-4">Add fields</Button> */}
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