import { useRouter } from "next/router";
import MiniJumbo from "@/components/global/MiniJumbo";


const sacraments = [
  {
    id: "baptism",
    name: "Baptism",
    description:
      "The first sacrament of initiation into the Christian faith, where one is cleansed of original sin and begins their spiritual journey as a follower of Christ.",
    image:
      "https://woforgmedia.wordonfire.org/wp-content/uploads/2023/04/15093850/baptisms.jpg",
  },
  {
    id: "first_communion",
    name: "First Communion",
    description:
      "The First Communion is a significant step in the Catholic faith, where children receive the Eucharist for the first time. It marks the beginning of their deeper connection with Christ.",
    image:
      "https://stjosephricelake.org/wp-content/uploads/2022/05/vnwrdpuwrb8-e1651406472282.jpg",
  },
  {
    id: "holy_matrimony",
    name: "Holy Matrimony",
    description:
      "A sacred ceremony where two individuals unite in holy matrimony, seeking God's blessings for a lifelong journey of love, faith, and commitment.",
    image:
      "https://www.scripturecatholic.com/wp-content/uploads/2019/11/Catholic-nuptial-mass-wedding-ceremony.jpg",
  },
  {
    id: "confirmation",
    name: "Confirmation",
    description:
      "A sacrament that strengthens and deepens the faith of a baptized Christian, receiving the gifts of the Holy Spirit and affirming their commitment to the Church.",
    image: "https://milarch.org/wp-content/uploads/2023/08/2914798-scaled.jpg",
  },

//   {
//     id: "quinceanera",
//     name: "Quinceañera",
//     description:
//       "A traditional coming-of-age celebration for young women turning 15. It represents their journey into adulthood and includes a special Mass to honor their faith and family values.",
//     image:
//       "https://d1h2anuecgxlkn.cloudfront.net/networks/5/blog/t_320_320/fTAXIpk3OxoGQAyDB2puQxweqpYU1HKvSg7Uh5pi.webp",
//   },
];

const SacramentsHomePage = () => {
  const router = useRouter();

  const handleSelect = (formType) => {
    router.push({
      pathname: `/sacraments/${formType.id}`,
    });
  };

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
        title="Sacraments"
      />

      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Select a Sacrament
        </h1>

        <div className="w-full max-w-6xl space-y-8 relative">
          {sacraments.map((sacrament, index) => (
            <div
              key={sacrament.id}
              className={`flex flex-col md:flex-row items-center bg-white my-9 overflow-hidden transform transition  ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Left Section - Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={sacrament.image}
                  alt={sacrament.name}
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Right Section - Text & Button */}
              <div className="w-full md:w-1/2 py-6 md:p-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {sacrament.name}
                </h2>
                <p className="text-gray-600 text-lg mt-2">
                  {sacrament.description}
                </p>
                <button
                  onClick={() => handleSelect(sacrament)}
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition "
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SacramentsHomePage;
