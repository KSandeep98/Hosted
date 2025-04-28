import { useState, useEffect } from "react";
import { Typography } from "@mui/material";

const words = ["Innovate", "Elevate", "Educate"];

export default function TypingEffect() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
 

  useEffect(() => {
    const currentWord = words[wordIndex];

    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText((prev) => prev.substring(0, prev.length - 1));
      }, 50); // delete faster
    } else {
      timeout = setTimeout(() => {
        setText((prev) => currentWord.substring(0, prev.length + 1));
      }, 150); // type slower
    }

    if (!isDeleting && text === currentWord) {
      // Wait before start deleting
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text === "") {
      // After deleting, move to next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <Typography
      variant="h4"
      className="font-extrabold text-4xl text-center italic text-blue-700"
    >
      {text}
      {/* <span className="border-r-2 border-blue-600 animate-blink ml-1"></span> */}
    </Typography>
  );
}
