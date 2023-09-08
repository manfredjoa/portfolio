import { Dialog } from "@material-tailwind/react";

export function ProjectsModal({ open, handleOpen }) {
  return (
    <div>
      <Dialog
        className="outline-none rounded-none"
        style={{ boxShadow: "5px 5px 10px black" }}
        open={open}
        handler={handleOpen}
        size="xl"
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
            Projects
          </h1>
        </div>

        <hr className="mx-4"></hr>

        <div
          className="flex flex-col justify-evenly gap-4 m-4 text-black"
          style={{
            fontFamily: "'Sudbury Book', sans-serif",
          }}
        >
          <div className="flex gap-8">
            <div className="flex flex-col w-1/4 gap-4">
              <a
                href="https://wineaboutit.netlify.app/"
                target="_blank"
                className="outline-none"
              >
                <h1 className="text-center text-lg hover:opacity-50">
                  Wine About It
                </h1>
                <img
                  src="https://res.cloudinary.com/doqgufzuq/image/upload/v1694204829/Portfolio/Projects/Wine%20About%20It.png"
                  alt="Wine About It"
                  className="cursor-pointer hover:opacity-50 object-contain"
                ></img>
              </a>
            </div>

            <div className="flex flex-col w-3/4 mr-4">
              <div className="flex justify-between">
                <a
                  href="https://github.com/manfredjoa/wine-about-it-client"
                  target="_blank"
                  className="cursor-pointer hover:opacity-50"
                >
                  GitHub Client Repository
                </a>
                <a
                  href="https://github.com/manfredjoa/wine-about-it-server"
                  target="_blank"
                  className="cursor-pointer hover:opacity-50"
                >
                  GitHub Server Repository
                </a>
                <a
                  href="https://wineaboutit.netlify.app/"
                  target="_blank"
                  className="cursor-pointer hover:opacity-50"
                >
                  Deployed App
                </a>
              </div>
            </div>
          </div>

          <hr></hr>

          <div className="flex gap-8">
            <div className="flex flex-col w-1/4 gap-4">
              <a
                href="https://youandmeme.netlify.app/"
                target="_blank"
                className="outline-none"
              >
                <h1 className="text-center text-lg hover:opacity-50">
                  You & Meme
                </h1>
                <img
                  src="https://res.cloudinary.com/doqgufzuq/image/upload/v1694205239/Portfolio/Projects/You%20and%20Meme.png"
                  alt="You and Meme"
                  className="cursor-pointer hover:opacity-50 object-contain"
                ></img>
              </a>
            </div>

            <div className="flex flex-col w-3/4 mr-4">
              <div className="flex justify-between">
                <a
                  href="https://github.com/manfredjoa/you-and-meme-client"
                  target="_blank"
                  className="cursor-pointer hover:opacity-50"
                >
                  GitHub Client Repository
                </a>
                <a
                  href="https://github.com/manfredjoa/you-and-meme-server"
                  target="_blank"
                  className="cursor-pointer hover:opacity-50"
                >
                  GitHub Server Repository
                </a>
                <a
                  href="https://youandmeme.netlify.app/"
                  target="_blank"
                  className="cursor-pointer hover:opacity-50"
                >
                  Deployed App
                </a>
              </div>
            </div>
          </div>

          <hr></hr>

          <div className="flex gap-8">
            <div className="flex flex-col w-1/4 gap-4">
              <a
                href="https://manfredjoa.github.io/hangman/"
                target="_blank"
                className="outline-none"
              >
                <h1 className="text-center text-lg hover:opacity-50">
                  Hangman
                </h1>
                <img
                  src="https://res.cloudinary.com/doqgufzuq/image/upload/v1694202753/Portfolio/Projects/Hangman.png"
                  alt="Hangman"
                  className="cursor-pointer hover:opacity-50 object-contain"
                ></img>
              </a>
            </div>

            <div className="flex flex-col w-3/4 mr-4">
              <div className="flex justify-between">
                <a
                  href="https://github.com/manfredjoa/hangman"
                  target="_blank"
                  className="cursor-pointer hover:opacity-50"
                >
                  GitHub Client Repository
                </a>
                <a
                  href="https://manfredjoa.github.io/hangman/"
                  target="_blank"
                  className="cursor-pointer hover:opacity-50"
                >
                  Deployed App
                </a>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
