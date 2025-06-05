"use client"

import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";


export function PersonalDetails({register}: any) {


  return (
    <form  className="flex flex-col gap-3">
        <h1 className="font-medium text-md mb-1">Personal Details</h1>
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
      {/* <Button className="mt-4">Add fields</Button> */}
    </form>
  );
}
