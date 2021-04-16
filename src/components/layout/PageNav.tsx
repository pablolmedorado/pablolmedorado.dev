// Libs
import { FC, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const pages = [
  { key: "about", label: "Sobre mí", href: "/" },
  { key: "experience", label: "Experiencia laboral", href: "/experience" },
  { key: "education", label: "Educación", href: "/education" },
  { key: "accomplishments", label: "Cursos/certificados", href: "/accomplishments" },
  { key: "skills", label: "Habilidades", href: "/skills" },
];

export const PageNav: FC = () => {
  const router = useRouter();

  const [showMenu, setShowMenu] = useState<boolean>(false);
  function toggleMenu(): void {
    setShowMenu(!showMenu);
  }

  return (
    <nav className="bg-gray-800 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex flex-shrink-0">
              <FontAwesomeIcon className="text-4xl text-green-500" icon="code" fixedWidth />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {pages.map((page) => (
                  <Link key={page.key} href={page.href}>
                    <a
                      className={`${
                        router.pathname === page.href
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      } px-3 py-2 rounded-md text-sm`}
                    >
                      {page.label}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${showMenu ? "" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {pages.map((page) => (
            <Link key={page.key} href={page.href}>
              <a
                className={`${
                  router.pathname === page.href
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                } block px-3 py-2 rounded-md text-base`}
              >
                {page.label}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default PageNav;
