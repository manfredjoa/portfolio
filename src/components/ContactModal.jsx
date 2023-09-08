import { createElement } from "react";
import { Dialog } from "@material-tailwind/react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export function ContactModal({ open, handleOpen }) {
  return (
    <div>
      <Dialog
        className="outline-none rounded-none"
        style={{ boxShadow: "5px 5px 10px black" }}
        open={open}
        handler={handleOpen}
        size="sm"
      >
        <div className="flex justify-center my-5">
          <h1
            className="text-5xl text-white"
            style={{
              fontFamily: "'Sudbury Book', sans-serif",
              WebkitTextStroke: "1px black",
              textShadow: "2px 2px 3px black",
            }}
          >
            Contact
          </h1>
        </div>

        <div className="flex justify-evenly items-center mb-5">
          {createElement(EnvelopeIcon, {
            className: "h-20 w-20 text-black cursor-pointer hover:opacity-50",
            strokeWidth: 1.5,
            onClick: () => window.open("mailto:joamanfred@gmail.com"),
          })}

          <a
            href="https://www.linkedin.com/in/manfredjoa/"
            target="_blank"
            className="outline-none"
          >
            <img
              src="https://res.cloudinary.com/doqgufzuq/image/upload/v1694193000/Portfolio/Icons/LinkedIn.png"
              alt="LinkedIn Icon"
              className="h-20 w-20 cursor-pointer hover:opacity-50"
            ></img>
          </a>

          <a
            href="https://github.com/manfredjoa"
            target="_blank"
            className="outline-none"
          >
            <img
              src="https://res.cloudinary.com/doqgufzuq/image/upload/v1694193244/Portfolio/Icons/GitHub.png"
              alt="GitHub Icon"
              className="h-20 w-20 cursor-pointer hover:opacity-50"
            ></img>
          </a>
        </div>
      </Dialog>
    </div>
  );
}
