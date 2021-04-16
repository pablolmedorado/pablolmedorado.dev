// Libs
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

// Models
import Profile from "../typings/profile";

// Components
import Contact from "../components/sections/Contact";
import DefaultLayout from "../layouts/Default";
import PersonalInfo from "../components/sections/PersonalInfo";
import SectionCard from "../components/SectionCard";
import SocialMediaPresence from "../components/sections/SocialMedia";
import TwitterTimeline from "../components/TwitterTimeline";

// Contexts
import { buildContextData, PageContext } from "../contexts/page-context";

type Props = {
  profile: Profile;
};

const IndexPage: NextPage<Props> = ({ profile }) => {
  const router = useRouter();
  const { lang, t } = useTranslation("index");
  const contextData = buildContextData(router, lang, t);

  return (
    <PageContext.Provider value={contextData}>
      <DefaultLayout>
        <div className="flex flex-col lg:flex-row lg:space-x-4">
          <div className="flex-grow">
            <PersonalInfo {...profile} />
            <SocialMediaPresence {...profile} />
            <Contact {...profile} />
          </div>
          {profile.twitterUsername && (
            <SectionCard
              title="Twitter"
              className="flex-shrink-0 w-full lg:w-1/3 print:hidden"
              style={{ height: "36.5rem" }}
            >
              <TwitterTimeline username={profile.twitterUsername} height={500} />
            </SectionCard>
          )}
        </div>
      </DefaultLayout>
    </PageContext.Provider>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const data: Profile = await require(`../../public/api/${locale}/profile.json`);
  return {
    props: {
      profile: data,
    },
  };
};

export default IndexPage;
