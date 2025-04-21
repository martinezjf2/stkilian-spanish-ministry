import { useState } from "react";
import { useRouter } from "next/router";
import MiniJumbo from "@/components/global/MiniJumbo";

export async function getServerSideProps(context) {
  const { query } = context;

  if (!query.type) {
    // Redirect users who access this page without a query
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: {} };
}

const FormPage = () => {
  const router = useRouter();
  const { type, name } = router.query;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    eventDate: "",
    spouseName: type === "holy_matrimony" ? "" : undefined,
    sponsorName: ["holy_matrimony", "confirmation", "baptism"].includes(type)
      ? ""
      : undefined,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("📢 Submitting form...");
    console.log("🚀 Form Data:", formData);

    router.push({
      pathname: "/pdf",
      query: {
        ...formData,
        type,
      },
    });

    console.log("✅ Router push executed.");
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
        title={`${name} Registation`}
      />

      <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
        <h2 className="text-lg font-semibold">
          {type ? name : "Sacrament"}{" "}
          Registration Form
        </h2>
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="block w-full p-2 border rounded mt-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full p-2 border rounded mt-2"
            required
          />
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            value={formData.dob}
            onChange={handleChange}
            className="block w-full p-2 border rounded mt-2"
            required
          />
          <input
            type="date"
            name="eventDate"
            placeholder="Event Date"
            value={formData.eventDate}
            onChange={handleChange}
            className="block w-full p-2 border rounded mt-2"
            required
          />

          {type === "holy_matrimony" && (
            <input
              type="text"
              name="spouseName"
              placeholder="Spouse's Name"
              value={formData.spouseName}
              onChange={handleChange}
              className="block w-full p-2 border rounded mt-2"
              required
            />
          )}

          {["holy_matrimony", "confirmation", "baptism"].includes(type) && (
            <input
              type="text"
              name="sponsorName"
              placeholder="Sponsor's Name"
              value={formData.sponsorName}
              onChange={handleChange}
              className="block w-full p-2 border rounded mt-2"
              required
            />
          )}

          <button
            type="submit"
            className="w-full mt-4 bg-blue-500 text-white p-2 rounded"
          >
            Generate PDF
          </button>
        </form>
      </div>
    </>
  );
};

export default FormPage;
