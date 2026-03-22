import { test, expect } from '@playwright/test';
import { BookingPage } from '../pages/BookingPage';

test('Hotel booking', async ({ page }) => {
    const booking = new BookingPage(page);
    await page.goto('https://www.makemytrip.com/');
    await page.waitForTimeout(13000);
    
/////////////////////////// DATE ////////////////////////////////////////
    function getCurrentDate(days:number) {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        return `${dd}`;
    }
/////////////////////////////////////////////////////////////////////////
const TodayDate = getCurrentDate(1);
const FutureDate = getCurrentDate(5);
const Values = await booking.BookHotel(TodayDate,FutureDate);
console.log("Hotel/Resort Name: ", Values.HotelName)
console.log("Hotel Location: ", Values.HotelLocation)
console.log("Hotel Rating: ", Values.hotelRating)
console.log("Price/night: ", Values.hotelPrice)
console.log("Total price to stay: ", Values.TotalPrice)
console.log("Hotel URL: ", Values.url)
});