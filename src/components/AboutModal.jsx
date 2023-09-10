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

        <div className="flex m-5">
          <div className="flex w-full">
            <div className="flex w-1/3 items-center mr-10">
              <img
                src="https://res.cloudinary.com/doqgufzuq/image/upload/v1694229908/Portfolio/Photos/Headshot.jpg"
                alt="Headshot"
                className="rounded-full"
                style={{ boxShadow: "5px 5px 10px rgb(79, 68, 65)" }}
              ></img>
            </div>
            <div className="w-2/3 mr-5">
              <p
                className="h-full flex items-center text-black mobile:text-sm"
                style={{ fontFamily: "'Sudbury Book', sans-serif" }}
              >
                Hi there! I'm Manfred, a Survivor superfan, Chess enthusiast,
                and full-stack software engineer based in New York. If you
                haven't noticed by now, I love color, design, and things flying
                around the screen! As a recent graduate of the Software
                Engineering Immersive at General Assembly, I'm excited for my
                journey of growth into the tech industry and cannot wait to
                bring my skills and passion for creativity and development into
                this space. I'm currently looking for a full-time role as a
                full-stack software engineer, so please feel free to reach out
                by email or through LinkedIn!
              </p>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
