// Libs
import { FC, useContext } from "react";

// Contexts
import PageContext from "../../contexts/page-context";

export const PageHeader: FC = () => {
  const { title } = useContext(PageContext);
  return (
    <header className="bg-primary-light shadow-md">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">{title}</h1>
      </div>
    </header>
  );
};

export default PageHeader;
