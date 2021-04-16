import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default interface Organization {
  name: string;
  country: string;
  logo: string;
  icon?: IconProp;
  website: string;
}
