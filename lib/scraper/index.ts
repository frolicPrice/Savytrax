import axios from 'axios';
import * as cheerio from 'cheerio';
import { extractCurrency, extractDescription, extractPrice } from '../utils';


export async function scrapeAmazonProduct(url:string) {
    if(!url) return;

    //BrightData proxy configuration
    const username = String(process.env.BRIGHT_DATA_USERNAME);
    const password = String(process.env.BRIGHT_DATA_PASSWORD);
    const port=33335;
    const session_id= (1000000 * Math.random()) |  0;
    const options = {
        auth: {
            username: `${username}-session-${session_id}`,
            password,

        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false,

    }

    try{
        //Fetch the product page
        const response = await axios.get(url, options);
        const $ = cheerio.load(response.data);

        //Extct the product title

        const title = $('#productTitle').text().trim();
        const currentPrice = extractPrice(
            $('.priceToPay span.a-price-whole'),
            $('a.size.base.a-color-price'),
            $('.a-button-selected .a-color-base'),
           // $('.a-price.a-text-price')

        );
        
        const originalPrice = extractPrice(
            $('#priceblock_ourprice'),
            $('.a-price.a-text-price span.a-offscreen'),
            $('#listPrice'),
            $('#priceblock_dealprice'),
            $('.a-size-base.a-color-price')

        );
        
        const isOutOfStock = $('#availability span').text().toLowerCase() === 'currently unavailable';

        const images = 
          $('#imgBlkFront').attr('data-a-dynamic-image') ||
          $('#landingImage').attr('data-a-dynamic-image') ||
          '{}'

        const imageUrls = Object.keys(JSON.parse(images));

        const currency = extractCurrency($('.a-price-symbol'))
        
        const discountRate = $('.savingsPercentage').text().replace(/[-%]/g, "");

        const description = extractDescription($)

        //console.log({title, currentPrice, originalPrice, isOutOfStock, imageUrls, currency, discountRate})

       //construc data object with scraped information
       const data = {
        url,
        currency : currency || '$',
        image: imageUrls[0],
        title,
        currentPrice: Number(currentPrice),
        originalPrice: Number(originalPrice),
        priceHistory: [],
        discountRate : Number(discountRate),
        category: 'category',
        reviewsCount: 100,
        stars: 4.5,
        isOutOfStock: isOutOfStock,
        description,
        lowestPrice: Number(currentPrice),
        highestPrice: Number(originalPrice),
        averagePrice: Number(currentPrice) || Number(originalPrice), 

       }

       //console.log(data);
       return data;
    } catch (error:any){
        throw new Error(`Failed to scrape product: ${error.message}`)
    }
}