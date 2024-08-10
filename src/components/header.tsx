"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import { FiArrowRight } from "react-icons/fi";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";

function Header() {

  const { toast } = useToast();

  const [theme, setTheme] = React.useState("");
  const [input, setInput] = React.useState("");

  const handleInputChange = (e : any) => {
    setInput(e.target.value);
  };

  return (
    <div className="w-3/4 py-52 font-sans">
      <div className="flex justify-center items-center flex-col">
        <div className="text-6xl font-bold">
          The AI cowriter for your next big hit !
        </div>
        <span className="pt-8 text-5xl font-semibold text-purple-600">
          <Typewriter
            options={{
              strings: [
                "Storytelling",
                "Podcast Script",
                "Dialogue Writing",
                "Character Creation",
                "Headline Generation",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </span>
        <span className="pt-20 text-xl">
          <Dialog>
            <DialogTrigger asChild>
              <span className="border-2 flex items-center py-2 px-4 rounded-lg border-b-8 border-r-8 hover:border-b-2 hover:border-r-2 hover:cursor-pointer">
                Get Started <FiArrowRight className="ml-1" />
              </span>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] min-w-max bg-black text-white font-poppins">
              <DialogHeader className="font-sans">
                <DialogTitle>Select what you want to cowrite</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="min-w-full flex justify-between items-center">
                <span>Select from the dropdown</span>
                <Select onValueChange={setTheme}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a theme" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectGroup>
                      <SelectItem value="Plot Generation">Plot Generation</SelectItem>
                      <SelectItem value="Podcast Script Generation">Podcast Script</SelectItem>
                      <SelectItem value="Character Creation">Character Creation</SelectItem>
                      <SelectItem value="Give a context or paste a news article link">Headline Generation</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Input type="email" placeholder={theme ? theme : "I want to do..."} value={input} onChange={handleInputChange}/>
              {input.trim().length > 0 && (
                <Link href="/generate/">
                <Button type="submit" className="bg-purple-600 hover:bg-purple-500 w-full mt-2">Generate</Button>
                </Link>
              )}
              {input.trim().length === 0 && (
                <Button type="submit" className="bg-purple-600 hover:bg-purple-500 w-full mt-2" onClick={() => {
                  console.log("Entered");
                  toast({
                    title: "Scheduled: Catch up ",
                    description: "Friday, February 10, 2023 at 5:57 PM",
                    action: (
                      <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                    ),
                  })
                }}>Generate</Button>
              )}
              <DialogFooter></DialogFooter>
            </DialogContent>
          </Dialog>
        </span>
      </div>
    </div>
  );
}

export default Header;
