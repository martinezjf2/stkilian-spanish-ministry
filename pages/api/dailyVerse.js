import puppeteer from "puppeteer";

export default async function handler(req, res) {
  try {
    const browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"], // Prevents potential permission issues
    });

    const page = await browser.newPage();

    // Set a real User-Agent to avoid blocking
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
    );

    // Navigate to the page and wait for full rendering
    await page.goto("https://www.verseoftheday.com/en", {
      waitUntil: "networkidle2",
    });

    // Extract the verse text using Puppeteer
    const verse = await page.evaluate(() => {
      const element = document.querySelector(".logo-text"); // Ensure this selector is correct
      return element ? element.innerText.trim() : "Verse not found";
    });

    await browser.close();

    console.log("Scraped Verse:", verse);

    res.status(200).json({ verse });
  } catch (error) {
    console.error("Scraping Error:", error);
    res.status(500).json({ verse: "Error fetching verse" });
  }
}
