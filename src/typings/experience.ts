import Organization from "./organization";

export default interface Experience {
  jobTitle: string;
  type: string;
  company: Organization;
  startMonth: string;
  endMonth?: string;
  description?: string;
  tags?: string[];
}
