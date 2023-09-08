import { useState, useEffect, createElement } from "react";
import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export function Modal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    // handleOpen();
    setOpen(true);
  }, []);

  return (
    <div>
      <Dialog
        className="outline-none rounded-none"
        open={open}
        handler={handleOpen}
      >
        <DialogHeader
          className="flex justify-center"
          style={{ fontFamily: "'Sudbury Book', sans-serif" }}
        >
          Contact
        </DialogHeader>
        <DialogBody className="flex justify-center items-center gap-5">
          {createElement(EnvelopeIcon, {
            className: "h-20 w-20 text-black cursor-pointer hover:opacity-50",
            strokeWidth: 1.5,
          })}

          <img
            src="https://res.cloudinary.com/doqgufzuq/image/upload/v1694193000/Portfolio/Icons/LinkedIn.png"
            alt="LinkedIn Icon"
            className="h-20 w-20 cursor-pointer hover:opacity-50"
          ></img>

          <img
            src="https://res.cloudinary.com/doqgufzuq/image/upload/v1694193244/Portfolio/Icons/GitHub.png"
            alt="GitHub Icon"
            className="h-20 w-20 cursor-pointer hover:opacity-50"
          ></img>
        </DialogBody>
      </Dialog>
    </div>
  );
}
