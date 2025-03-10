import puppeteer from "puppeteer";

interface ScrapedData {
  imageUrl?: string;
  price?: string;
  error?: string;
}

const scrapeProductDetails = async (url: string): Promise<ScrapedData> => {
  let browser;

  try {
    browser = await puppeteer.launch({
      headless: true, // Changed from "new" to true for better stability
      args: ["--no-sandbox", "--disable-setuid-sandbox"], // Required in serverless environments
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined // Ensures Chrome path is defined
    });

    const page = await browser.newPage();

    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
        "(KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
    );

    await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });

    const imageUrl = await page.evaluate(() => {
      return (
        document.querySelector('img[alt="Product Image"]')?.getAttribute("src") ||
        document.querySelector('meta[property="og:image"]')?.getAttribute("content") ||
        document.querySelector("img")?.getAttribute("src")
      );
    });

    const price = await page.evaluate(() => {
      return (
        document.querySelector('[class*="price"]')?.textContent?.trim() ||
        document.querySelector('meta[property="product:price:amount"]')?.getAttribute("content") ||
        document.querySelector('[class*="discounted-price"]')?.textContent?.trim()
      );
    });

    if (!imageUrl || !price) {
      throw new Error("Could not fetch image or price");
    }

    return { imageUrl, price };
  } catch (error) {
    console.error("Scraping error:", error);
    return { error: "Scraping failed. Check URL or site changes." };
  } finally {
    if (browser) await browser.close();
  }
};

export default scrapeProductDetails;
