"use client";

import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";


export function DynamicFields({ register, formType, removeTheField, unregister }: any) {
  const [label, setLabel] = useState("");
  const [confirmed, setConfirmed] = useState<string | null>(null);

  const handleConfirm = () => {
    if (!label.trim()) return;
    setConfirmed(`${formType}-${label}`);
  };

  useEffect(() => {
    console.log("hit", removeTheField)

  if( removeTheField && confirmed){
    console.log("hit", removeTheField)
    unregister(`${confirmed}`, { keepValue: false });

    setConfirmed(null)
    setLabel("");
    return;
  }

  },[removeTheField])


  return (
    <div className="flex flex-col gap-1 mt-4">
      {!confirmed ? (
        <>
          <Input
            placeholder="Enter field label"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
          <Button className="mt-2 border border-dashed bg-black/10 text-black border-black/40  hover:bg-black/25" onClick={handleConfirm}>{!confirmed ? 'Add label': 'Add value'}</Button>
        </>
      ) : (
        <>
          <label className="text-sm font-medium">{label}</label>
          <Input {...register(confirmed)} placeholder={`Enter value for ${label}`} />
        </>
      )}
    </div>
  );
}
