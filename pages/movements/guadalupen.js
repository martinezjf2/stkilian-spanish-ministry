import ComingSoon from "@/components/global/ComingSoon";
import MiniJumbo from "@/components/global/MiniJumbo";
import Head from "next/head";



export default function Guadalupen() {
    return (
      <>
        <Head>
          <title>Seguidores de Jesus - Netlify</title>
        </Head>
        <MiniJumbo
          images={[
            "/images/guadalupanos/guada.jpg",
            "/images/guadalupanos/guada2.jpg",
          ]}
          title="Guadalupen Ministry"
        />
        <ComingSoon name="Guadalupen" />
      </>
    );
}