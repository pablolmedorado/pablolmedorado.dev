import { FC, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  username: string;
  theme?: "light" | "dark";
  locale?: string;
  height?: number;
  width?: number;
  className?: string;
};

export const TwitterTimeline: FC<Props> = (props) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <article className={props.className}>
      <div className="twitter-embed">
        <a
          className="twitter-timeline"
          data-height={props.height || 500}
          data-width={props.width || "100%"}
          data-theme={props.theme || "light"}
          data-lang={props.locale || "en"}
          data-dnt="true"
          href={`https://twitter.com/${props.username}`}
        >
          <div className="flex flex-row space-x-4 items-center rounded border-twitter border-2 border-l-8 text-twitter p-4">
            <FontAwesomeIcon icon="exclamation-circle" className="flex-grow-0" />
            <span>
              <p className="mb-1">No ha sido posible cargar el widget de Twitter.</p>
              <p>
                Quizás tengas activada la <b>protección contra rastreo</b>. Debes deshabilitarla en esta página para
                poder visualizarlo.
              </p>
            </span>
          </div>
        </a>
      </div>
    </article>
  );
};

export default TwitterTimeline;
