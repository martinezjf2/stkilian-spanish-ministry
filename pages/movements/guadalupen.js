import ComingSoon from "@/components/global/ComingSoon";
import MiniJumbo from "@/components/global/MiniJumbo";


export default function Guadalupen() {
    return (
      <>
        <Head>
          <title>Seguidores de Jesus</title>
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