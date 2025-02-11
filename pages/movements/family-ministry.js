import ComingSoon from "@/components/global/ComingSoon";
import MiniJumbo from "@/components/global/MiniJumbo";

export default function FamilyMinistry() {
  return (
    <>
      <Head>
        <title>Seguidores de Jesus</title>
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
    </>
  );
}
