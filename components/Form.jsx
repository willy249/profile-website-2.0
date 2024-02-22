"use client";

// npm package
import { Button } from "./ui/button"; // shadcn-ui
import { Input } from "./ui/input"; // shadcn-ui
import { Textarea } from "./ui/textarea"; // shadcn-ui
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react"; // lucide-react

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
      {/* input */}
      <div className="relative flex items-center">
        <Input type="text" id="name" placeholder="Name" />
        <User className=" absolute right-6" size={20} />
      </div>
      {/* email */}
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email" />
        <MailIcon className=" absolute right-6" size={20} />
      </div>
      {/* textarea */}
      <div className="relative flex items-center">
        <Textarea id="message" placeholder="Type Your Message Here." />
        <MessageSquare className=" absolute top-4 right-6" size={20} />
      </div>
      <Button className="flex items-center gap-x-1 max-w-[166px]">
        Let's Talk <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
