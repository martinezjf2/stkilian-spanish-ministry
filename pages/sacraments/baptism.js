import ComingSoon from "@/components/global/ComingSoon";
import MiniJumbo from "@/components/global/MiniJumbo";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Baptisms() {
  const router = useRouter();
  const { sacramentID, name, description, image } = router.query;

  const handleSelect = (formType) => {
    router.push(`/form?type=${formType}&name=${name}`);
  };

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
        title="Baptism"
      />
      <ComingSoon name={name} />
      <button
        onClick={() => handleSelect(sacramentID)}
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition "
      >
        Register
      </button>
    </>
  );
}
