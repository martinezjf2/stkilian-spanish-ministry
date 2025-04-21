import ComingSoon from "@/components/global/ComingSoon";
import MiniJumbo from "@/components/global/MiniJumbo";
import SocialMediaInvite from "@/components/global/SocialMediaInvite";
import Head from "next/head";

export default function FamilyMinistry() {
  return (
    <>
      <Head>
        <title>Seguidores de Jesus - Netlify</title>
      </Head>
      <MiniJumbo
        images={[
          "/images/familia/familia.jpg",
          "/images/familia/familia2.jpg",
          "/images/familia/familia3.jpg",
        ]}
        title="Family Ministry"
      />
      <ComingSoon name="Family Ministry" />
      <SocialMediaInvite
        groupName="Family Ministry"
        facebook=""
        instagram=""
        youtube=""
        twitter=""
      />
    </>
  );
}
