import ComingSoon from "@/components/global/ComingSoon";
import MiniJumbo from "@/components/global/MiniJumbo";


export default function Guadalupen() {
    return (
      <>
        <MiniJumbo
          images={[
            "/images/guadalupanos/guada.jpg",
            "/images/guadalupanos/guada2.jpg",
          ]}
        />
        <ComingSoon name="Guadalupen" />
      </>
    );
}