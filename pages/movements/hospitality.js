import ComingSoon from "@/components/global/ComingSoon";
import MiniJumbo from "@/components/global/MiniJumbo";


export default function Hospitality() {
    return (
      <>
        <MiniJumbo
          images={[
            "/images/jovenes/jovenes.jpg",
            "/images/jovenes/jovenes2.jpg",
            "/images/jovenes/jovenes3.jpg",
            "/images/jovenes/jovenes4.jpg",
            "/images/jovenes/jovenes5.jpg",
            "/images/jovenes/jovenes6.jpg",
          ]}
          title="Disciples of Jesus"
        />
        <ComingSoon name="Hospitality" />
      </>
    );
}