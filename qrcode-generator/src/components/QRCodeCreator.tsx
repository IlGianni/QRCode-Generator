"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import QRCode from "qrcode";
import { useToast } from "./ui/use-toast"; // Ensure this path is correct

const QRCodeCreator = () => {
  const [input, setInput] = useState<string>("");
  const [src, setSrc] = useState<string | undefined>();
  const { toast } = useToast(); // Ensure useToast is properly implemented

  const generate = () => {
    if (input && input.trim() !== "") {
      QRCode.toDataURL(input)
        .then((url) => {
          setSrc(url);
          toast({
            title: "QR Code Generated",
            description: "Your QR code has been successfully generated.",
          });
        })
        .catch((error) => {
          toast({
            title: "Error",
            description: `An error occurred: ${error.message}`,
            variant: "destructive",
          });
          setSrc("");
        });
    } else {
      toast({
        title: "Input Required",
        description: "Please enter some text to generate a QR code.",
        variant: "destructive",
      });
      setSrc("");
    }
  };

  return (
    <div className="mt-12 flex flex-col gap-2">
      <div className="flex gap-2">
        <Input
          value={input}
          onChange={({ target }) => setInput(target.value)}
          className="bg-white min-w-64"
          placeholder="Enter text here..."
        />
        <Button onClick={generate}>Generate</Button>
      </div>
      {src && <img src={src} alt="Generated QR Code" />}
    </div>
  );
};

export default QRCodeCreator;
