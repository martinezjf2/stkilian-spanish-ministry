import ComingSoon from "@/components/global/ComingSoon";
import MiniJumbo from "@/components/global/MiniJumbo";

export default function FamilyMinistry() {
  return (
    <>
      <MiniJumbo
        images={[
          "/images/familia/familia.jpg",
          "/images/familia/familia2.jpg",
          "/images/familia/familia3.jpg",
        ]}
      />
      <ComingSoon name="Family Ministry" />
    </>
  );
}
