import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { flexDirection: "column", padding: 20 },
  title: { fontSize: 20, marginBottom: 10, fontWeight: "bold" },
  text: { fontSize: 14, wordBreak: "break-word", marginBottom: 5 },
  section: { marginBottom: 10 },
});

const MyPDF = ({
  type,
  name,
  email,
  dob,
  eventDate,
  sponsorName,
  spouseName,
}) => {
  console.log("📄 Debug: MyPDF.js is rendering...");

  return (
    <Document>
      {/* ✅ Registration Page */}
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>
            {type.replace("_", " ").toUpperCase()} Registration Form
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>Name: {name}</Text>
          <Text style={styles.text}>Email: {email}</Text>
          <Text style={styles.text}>Date of Birth: {dob}</Text>
          <Text style={styles.text}>Event Date: {eventDate}</Text>
          {sponsorName && (
            <Text style={styles.text}>Sponsor Name: {sponsorName}</Text>
          )}
          {spouseName && (
            <Text style={styles.text}>Spouse Name: {spouseName}</Text>
          )}
        </View>
      </Page>
    </Document>
  );
};

export default MyPDF;

// Make sure to add an if statement if the type is a wedding, make sure to take these documents
// Same to all other sacraments