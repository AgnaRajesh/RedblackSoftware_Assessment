import {Page} from '@playwright/test';

export class BookingPage {
  constructor(public page: Page) {}

  private Hotels = `//li[@class='menu_Hotels']`
  private checkIn = `//input[@id="checkin"]`
 // private checkOut = `//input[@id="checkout"]`
 // private checkInDay = `(//span[text()='23'])[1]`
 // private checkOutDay = `(//span[text()='27'])[2]`
  private childBtn = `//button[@aria-label="Increase value from 0"]`
  private childAge1 = `//span[@data-testid="child_count"]`
  private Age1 = `//li[text()=05]`
  private childAge2 = `(//span[@data-testid="child_count"])[2]`
  private Age2 = `//li[text()=03]`
  private ApplyBtn =`//button[text()='APPLY']`
  private SearchBtn = `//button[text()='Search']`
  private Stars = `//div[@id='POPULAR']//ul//li//span[text()='5 Star']`
  private ratings = `//span[text()='Excellent: 4.2+']`
  private Hotel = `//span[text()='Hotel']`
  private Resort = `//span[text()='Resort']`
  private sort = `//span[text()='Lowest Price & Best Rated']`
  private selecthotel = `(//p[@id='hlistpg_hotel_name'])[1]`
  private Hotelrating = `(//span[@itemprop="ratingValue"])[2]`
  private hotelName = `//h1`
  private locationName = `(//div[@class='locCard pointer']//p)[1]`
  private PricePerDay = `//div[@class="latoBlack font28 blackText nowrap  makeFlex"]//div`

  async BookHotel(CheckIn: string, CheckOut:string){
    await this.page.locator(this.Hotels).click()
    await this.page.locator(this.checkIn).click()
    await this.page.locator(`(//span[text()='`+CheckIn+`'])[1]`).click()
    await this.page.locator(`(//span[text()='`+CheckOut+`'])[1]`).click()
    await this.page.locator(this.childBtn).click()
    await this.page.locator(this.childAge1).click()
    await this.page.locator(this.Age1).click()
    await this.page.locator(this.childBtn).click()
    await this.page.locator(this.childAge2).click()
    await this.page.locator(this.Age2).click()
    await this.page.locator(this.ApplyBtn).click()
    await this.page.locator(this.SearchBtn).click()
    await this.page.locator(this.Stars).click()
    await this.page.locator(this.ratings).click()
    await this.page.locator(this.Hotel).click()
    await this.page.locator(this.Resort).click()
    await this.page.locator(this.sort).click()
    const HotelName = await this.page.locator(this.selecthotel).inputValue()
    const hotelRating = await this.page.locator(this.Hotelrating).inputValue()
    await this.page.locator(this.selecthotel).click()
    const HotelLocation = await this.page.locator(this.locationName).inputValue()
    let hotelPrice = await this.page.locator(this.PricePerDay).inputValue()
    let TotalPrice = Number(hotelPrice)
    const url = this.page.url();
    return {HotelName,hotelRating,HotelLocation,hotelPrice,TotalPrice,url}
  }

}