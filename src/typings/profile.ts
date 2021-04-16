export default interface Profile {
  firstName: string;
  lastName: string;
  birthdate: string;
  birthplace: {
    name: string;
    country: string;
  };
  jobTitle: string;
  profilePicture: string;
  about?: string;
  email?: string;
  linkedinUsername?: string;
  twitterUsername?: string;
  githubUsername?: string;
  stackoverflowUsername?: string;
  telegramUsername?: string;
}
