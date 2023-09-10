import { Dialog } from "@material-tailwind/react";

export function ProjectsModal({ open, handleOpen }) {
  return (
    <div>
      <Dialog
        className="outline-none rounded-none overflow-y-auto"
        style={{
          boxShadow: "5px 5px 10px rgb(209, 128, 167)",
          maxHeight: "95vh",
        }}
        open={open}
        handler={handleOpen}
        size="xl"
      >
        <div
          className="flex items-center py-5"
          style={{
            background: "rgb(209, 128, 167)",
            fontFamily: "'Sudbury Book', sans-serif",
          }}
        >
          <h1
            className="md:hidden absolute cursor-pointer pl-5 text-white"
            onClick={handleOpen}
          >
            Back
          </h1>
          <h1
            className="text-5xl mx-auto"
            style={{
              fontFamily: "'Sudbury Book', sans-serif",
              color: "rgb(209, 128, 167)",
              WebkitTextStroke: "1px white",
              textShadow: "2px 2px 3px black",
            }}
          >
            Projects
          </h1>
        </div>

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
                <h1 className="text-center text-xl hover:opacity-50">
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
              <div
                className="flex justify-between text-sm mobile:text-xs"
                style={{ color: "rgb(209, 128, 167)" }}
              >
                <a
                  href="https://wineaboutit.netlify.app/"
                  target="_blank"
                  className="text-center cursor-pointer hover:opacity-50"
                >
                  Deployed App
                </a>
                <a
                  href="https://github.com/manfredjoa/wine-about-it-client"
                  target="_blank"
                  className="text-center cursor-pointer hover:opacity-50"
                >
                  GitHub Client Repository
                </a>
                <a
                  href="https://github.com/manfredjoa/wine-about-it-server"
                  target="_blank"
                  className="text-center cursor-pointer hover:opacity-50"
                >
                  GitHub Server Repository
                </a>
              </div>
              <p className="flex grow items-center text-sm mt-2">
                Created during week 9 of 12 of the General Assembly Software
                Engineering Immersive, Wine About It is a group project in which
                I collaborated with 3 other developers and served as client and
                server Code Owner to deploy a MERN (MongoDB, Express, React,
                Node) stack ecommerce application. The application features
                image carousels on the home page, and allows users to create an
                account, filter wines alphabetically, by type of wine, or by
                price (ascending and descending), save wines to their favorites,
                add wines to their shopping cart, and checkout. Order history
                details are available once orders have been placed. Post-MVP
                features include a search bar, food and wine pairings, and
                account details CRUD functionality.
              </p>
            </div>
          </div>

          <hr
            style={{ backgroundColor: "rgb(209, 128, 167)", height: "2px" }}
          ></hr>

          <div className="flex gap-8">
            <div className="flex flex-col w-1/4 gap-4">
              <a
                href="https://youandmeme.netlify.app/"
                target="_blank"
                className="outline-none"
              >
                <h1 className="text-center text-xl hover:opacity-50">
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
              <div
                className="flex justify-between text-sm"
                style={{ color: "rgb(209, 128, 167)" }}
              >
                <a
                  href="https://youandmeme.netlify.app/"
                  target="_blank"
                  className="text-center cursor-pointer hover:opacity-50"
                >
                  Deployed App
                </a>
                <a
                  href="https://github.com/manfredjoa/you-and-meme-client"
                  target="_blank"
                  className="text-center cursor-pointer hover:opacity-50"
                >
                  GitHub Client Repository
                </a>
                <a
                  href="https://github.com/manfredjoa/you-and-meme-server"
                  target="_blank"
                  className="text-center cursor-pointer hover:opacity-50"
                >
                  GitHub Server Repository
                </a>
              </div>
              <p className="flex grow items-center text-sm mt-2">
                Created during week 12 of 12 of the General Assembly Software
                Engineering Immersive, You & Meme is a group project in which I
                collaborated with 5 other developers and served as team leader
                to deploy a DR (Django, React) stack social media application.
                The application allows users to create an account with an
                avatar, post custom memes with a provided selection of
                templates, like/unlike posts, comment on posts, delete your own
                posts/comments, and edit your account details. Multiple views
                include the home page, detail pages, and profile pages. Post-MVP
                features include a username search bar, friends, DMs, a page
                displaying your liked memes, and filters to sort posts outside
                of the default most recent.
              </p>
            </div>
          </div>

          <hr
            style={{ backgroundColor: "rgb(209, 128, 167)", height: "2px" }}
          ></hr>

          <div className="flex gap-8">
            <div className="flex flex-col w-1/4 gap-4">
              <a
                href="https://manfredjoa.github.io/hangman/"
                target="_blank"
                className="outline-none"
              >
                <h1 className="text-center text-xl hover:opacity-50">
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
              <div
                className="flex text-sm justify-between"
                style={{ color: "rgb(209, 128, 167)" }}
              >
                <a
                  href="https://manfredjoa.github.io/hangman/"
                  target="_blank"
                  className="text-center cursor-pointer hover:opacity-50"
                >
                  Deployed App
                </a>
                <a
                  href="https://github.com/manfredjoa/hangman"
                  target="_blank"
                  className="text-center cursor-pointer hover:opacity-50"
                >
                  GitHub Client Repository
                </a>
                <a className="invisible">GitHub Server Repository</a>
              </div>
              <p className="flex grow items-center text-sm mt-2">
                Created during week 4 of 12 of the General Assembly Software
                Engineering Immersive, Hangman is an individual project in which
                I coded game logic utilizing HTML, CSS, JavaScript, Canvas, and
                DOM manipulation to design a front-end game. The application
                allows users to either type or select the letter they would like
                to guess. Every incorrect guess is a limb added to the hangman,
                and every correct guess is a letter revealed in the word. Words
                are randomly selected and the game can be reset by clicking the
                "New Game" button or by clicking "Play Again" when the game is
                either lost or won. Post-MVP features include a lives display
                and an input field to create custom words for others to guess.
              </p>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
