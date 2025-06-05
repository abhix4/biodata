"use client"

import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";


export function ContactDetails({register}: any) {


  return (
    <form  className="flex flex-col gap-3">
        <h1  className="font-medium text-md mb-1">Contact Details</h1>
      <div className="flex flex-col gap-2">
        <Label htmlFor="contactNumber">Contact Number</Label>
      <Input {...register("contactNumber")} placeholder="Enter contact number" />
      </div>
     <div className="flex flex-col gap-2">
         <Label htmlFor="residentialAddress">Residential Address</Label>
      <Input {...register("residentialAddress")} placeholder="Enter residential address" />
     </div>
   
      {/* <Button className="mt-4">Add fields</Button> */}
    </form>
  );
}
