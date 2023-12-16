import { useState } from "react";
import { Input } from "@nextui-org/react";
import { EyeSlashIcon } from "@heroicons/react/24/outline";

export default function LoginPage() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <>
      <form action="">
        <Input
          type="email"
          label="Email"
          defaultValue="example@gmail.com"
          className="max-w-xs"
        />
        <Input
      label="Password"
      variant="bordered"
      placeholder="Enter your password"
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <EyeSlashIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeSlashIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className="max-w-xs"
    />
      </form>
    </>
  );
}
