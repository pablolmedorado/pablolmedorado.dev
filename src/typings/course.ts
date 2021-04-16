import Organization from "./organization";

export default interface Course {
  title: string;
  organization?: Organization;
  date?: string;
  duration?: number; // In hours
  online: boolean;
  description?: string;
}
