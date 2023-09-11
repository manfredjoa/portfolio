import { createElement } from "react";
import { Dialog } from "@material-tailwind/react";

export function ContactModal({ open, handleOpen }) {
  return (
    <div>
      <Dialog
        className="outline-none rounded-none"
        style={{ boxShadow: "5px 5px 10px rgb(232, 160, 84)" }}
        open={open}
        handler={handleOpen}
        size="sm"
      >
        <div
          className="flex justify-center py-5"
          style={{ background: "rgb(232, 160, 84)" }}
        >
          <h1
            className="text-5xl"
            style={{
              fontFamily: "'Sudbury Book', sans-serif",
              color: "rgb(232, 160, 84)",
              WebkitTextStroke: "1px white",
              textShadow: "2px 2px 3px black",
            }}
          >
            Contact
          </h1>
        </div>

        <div className="flex justify-evenly items-center my-5">
          <img
            src="https://res.cloudinary.com/doqgufzuq/image/upload/v1694390527/Portfolio/Icons/Gmail.png"
            alt="Gmail Icon"
            className="h-20 w-20 cursor-pointer hover:opacity-50"
            onClick={() => window.open("mailto:joamanfred@gmail.com")}
          ></img>

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
