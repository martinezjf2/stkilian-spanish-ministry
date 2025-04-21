import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// ✅ Dynamically import PDFViewer and MyPDF to avoid SSR issues
const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  { ssr: false }
);
const MyPDF = dynamic(() => import("../components/MyPDF"), { ssr: false });

const PDFPage = () => {
  const router = useRouter();
  const [pdfData, setPdfData] = useState(null);
  const [isClient, setIsClient] = useState(false); // ✅ Prevents hydration issues

  useEffect(() => {
    setIsClient(true); // ✅ Ensure client-side rendering
  }, []);

  useEffect(() => {
    if (!router.isReady) return;

    console.log("🚀 Debug: PDF Page Loaded");

    const { type, name, email, dob, eventDate, sponsorName, spouseName } = router.query;

    setPdfData({
      type: type || "N/A",
      name: name || "N/A",
      email: email || "N/A",
      dob: dob || "N/A",
      eventDate: eventDate || "N/A",
      sponsorName: sponsorName || "",
      spouseName: spouseName || "",
    });

    console.log("✅ Final Parsed PDF Data:", {
      type,
      name,
      email,
      dob,
      eventDate,
      sponsorName,
      spouseName,
    });
  }, [router.isReady, router.query]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Your Registration PDF</h1>

      {/* ✅ Only render PDFViewer when data is ready */}
      {isClient && pdfData ? (
        <div className="w-full flex justify-center">
          <PDFViewer width="600" height="800">
            <MyPDF {...pdfData} />
          </PDFViewer>
        </div>
      ) : (
        <p>Loading PDF...</p>
      )}
    </div>
  );
};

export default PDFPage;


// Have a button here that will give the user an option to send the data to someone through email