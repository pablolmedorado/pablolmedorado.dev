import { FC, ReactNode } from "react";

import { formatISODate, formatISODatesDistance } from "../utils/dates";

type Props = {
  timeRange: {
    start: string;
    end?: string;
  };
  timeFormat: string;
  text?: string;
  isFirst?: boolean;
  isLast?: boolean;
  children?: ReactNode;
};

export const TimelineItem: FC<Props> = ({ timeRange, timeFormat, text, isFirst, isLast, children }) => {
  return (
    <li className="grid md:grid-cols-8 xl:grid-cols-9 gap-4 items-start relative p-3 sm:p-5 xl:p-6 rounded-md hover:bg-gray-100 overflow-hidden">
      <span className="md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center mb-1 md:mb-0">
        <svg viewBox="0 0 12 12" className="w-3 h-3 mr-6 overflow-visible">
          <circle cx="6" cy="6" r="6" fill="currentColor" className="text-primary-dark"></circle>
          <circle
            cx="6"
            cy="6"
            r="11"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary"
          ></circle>
          {!isFirst && (
            <path d="M 6 -6 V -45" fill="none" strokeWidth="2" stroke="currentColor" className="text-gray-300"></path>
          )}
          {!isLast && (
            <path d="M 6 18 V 1000" fill="none" strokeWidth="2" stroke="currentColor" className="text-gray-300"></path>
          )}
        </svg>
        <div className="flex flex-row md:flex-col space-x-1 md:space-x-0">
          <span className="flex-grow-0">
            {`${formatISODate(timeRange.start, timeFormat)} - ${
              timeRange.end ? formatISODate(timeRange.end, timeFormat) : "actualmente"
            }`}
          </span>
          <span className="flex-grow-0 text-gray-500">({formatISODatesDistance(timeRange.start, timeRange.end)})</span>
        </div>
      </span>
      <div className="md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0">{children ? children : text}</div>
    </li>
  );
};

export default TimelineItem;
