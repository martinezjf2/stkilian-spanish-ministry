import ComingSoon from "@/components/global/ComingSoon";
import MiniJumbo from "@/components/global/MiniJumbo";
import SocialMediaInvite from "@/components/global/SocialMediaInvite";
import Head from "next/head";



export default function YouthMinistry() {
    return (
      <>
        <Head>
          <title>Seguidores de Jesus - Netlify</title>
        </Head>
        <MiniJumbo
          images={[
            "/images/jovenes/jovenes.jpg",
            "/images/jovenes/jovenes2.jpg",
            "/images/jovenes/jovenes3.jpg",
            "/images/jovenes/jovenes4.jpg",
            "/images/jovenes/jovenes5.jpg",
            "/images/jovenes/jovenes6.jpg",
          ]}
          title="Angels of God"
        />
        <ComingSoon name="Youth Ministry" />
        <SocialMediaInvite
          groupName="Youth Ministry"
          facebook="https://www.facebook.com"
          instagram="https://www.facebook.com"
          youtube="https://www.facebook.com"
          twitter="https://www.facebook.com"
        />
      </>
    );
}