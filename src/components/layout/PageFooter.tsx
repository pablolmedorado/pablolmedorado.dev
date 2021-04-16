// Libs
import { FC } from "react";

export const PageFooter: FC = () => {
  return (
    <footer className="max-w-7xl mx-auto border-t border-gray-300 p-6 lg:px-8">
      <div className="flex flex-col md:flex-row text-primary-dark">
        <span className="flex-grow text-center md:text-left">
          Pablo Olmedo Dorado © 2020-{new Date().getFullYear()}
        </span>
        <span className="flex-grow text-center md:text-right">
          Made with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          with : Next.js / Tailwind CSS / Vercel.{" "}
          <a
            className="text-secondary-dark"
            href="https://github.com/pablolmedorado/pablolmedorado.dev"
            target="_blank"
            rel="noreferrer"
          >
            Source code
          </a>
        </span>
      </div>
    </footer>
  );
};

export default PageFooter;
