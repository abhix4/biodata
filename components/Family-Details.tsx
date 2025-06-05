"use client"

import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";


export function FamilyDetails({register}: any) {


  return (
    <form  className="flex flex-col gap-3">
      <h1 className="font-medium text-md mb-1">Family Details</h1>
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
    </form>
  );
}
