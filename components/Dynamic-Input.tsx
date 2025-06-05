"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";


export function PersonalDetails() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  console.log(data)

  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))} className="flex flex-col gap-2">
      <Label htmlFor="Name">Name</Label>
      <Input {...register("Name")} placeholder="Name" />
    </form>
  );
}
