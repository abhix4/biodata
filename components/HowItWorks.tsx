
import { Github } from "lucide-react";
import { Button } from "./ui/button";

export default function HowItWorks({setSeenOnboarding}: {setSeenOnboarding: React.Dispatch<React.SetStateAction<boolean>>}){
 

   
    return (
        
        <div className="w-[400px] p-8 rounded-2xl shadow-lg bg-white flex flex-col gap-3 items-center justify-center">
            <h1>Hey There  👋!</h1>
            <h2 className="text-center text-sm">Create a beautiful marriage biodata in minutes.<br></br> Just follow these simple steps:</h2>
            <ul className="text-sm flex flex-col gap-2">
                <li>1. 📝 Fill in Your Details</li>
                <li>2. 📄 Generate Your PDF</li>
                <li>3. 💾 Download or Print</li>
            </ul>
            <p className="text-sm">Thats it. Cheers !!</p>
            <Button className="bg-yellow-500 hover:bg-yellow-600 cursor-pointer text-sm" onClick={() => {
                setSeenOnboarding(true)
                localStorage.setItem("seenHowItWorks", "true")
            }} >Lets Go</Button>
            <a className="flex gap-2 items-center justify-center" href="https://github.com/abhix4/biodata">
                <p className="text-xs">If you liked the work please give a star on </p>
                <Github size={12}  />
            </a>
        </div>
    )

  
}