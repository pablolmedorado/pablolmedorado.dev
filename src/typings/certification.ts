import Organization from "./organization";

export default interface Certification {
  title: string;
  organization: Organization;
  issueDate: string;
  expirationDate?: string;
  description?: string;
  id?: string;
  url?: string;
}
