import Organization from "./organization";

export default interface Education {
  title: string;
  school: Organization;
  startMonth: string;
  endMonth?: string;
  description?: string;
  tags?: string[];
}
