import { Dialog } from "@material-tailwind/react";

export function AboutModal({ open, handleOpen }) {
  return (
    <div>
      <Dialog
        className="outline-none rounded-none"
        style={{ boxShadow: "5px 5px 10px rgb(79, 68, 65)" }}
        open={open}
        handler={handleOpen}
        size="lg"
      >
        <div
          className="flex justify-center py-5"
          style={{ background: "rgb(79, 68, 65)" }}
        >
          <h1
            className="text-5xl"
            style={{
              fontFamily: "'Sudbury Book', sans-serif",
              color: "rgb(79, 68, 65)",
              WebkitTextStroke: "1px white",
              textShadow: "2px 2px 3px black",
            }}
          >
            About
          </h1>
        </div>

        <div className="flex items-center m-5">
          <img
            src="https://res.cloudinary.com/doqgufzuq/image/upload/v1694229908/Portfolio/Photos/Headshot.jpg"
            alt="Headshot"
            className="w-1/3 rounded-full"
          ></img>
        </div>
      </Dialog>
    </div>
  );
}
