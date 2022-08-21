# FlexiTrip
*FlexiTrip* is a system which monitors the occupancy rate and real time location of public transport in ACT to provde the real-time dynamic pricing to each user.

*FlexiTrip* believes that a dynamic pricing on public transport will balance the traffic of the whole transport system and let user make a informed decision to choose between time and cost while planning their commute. 

The tiered pricing based on near real time service occupancy  will help  commuters decide their journey in a informed way , which would also benefit governments to outline the Pricing Models flexibly based on the Global 

## Problems We identified
 * Current Pricing Model for Transport is pretty much Static , this does not provide better outcome for three pillars of transport system access, mobility, and connectivity.
 * The Data from the Monthly Passenger Boarding tells that some of the Routes are under utilised, It might relate to the Static Nature of the Pricing
 * Post Covid , The Pattern of commuters getting onboard on the Public transport has drastically changed. 
 * 
## How FlexiTrip solves these problems
 
 FlexiTrip provides ability for Commuters and Government to have Dynamic Pricing Model in place for public transport.
 
 The Dynamic Pricing Model helps Governments set the Pricing based on the Historical Data as well as Near Real Time Occupancy Data . It also helps Government to update the Pricing Model during the Promotional Events.

### Overall SubSytem View

![SubSystem View](https://user-images.githubusercontent.com/2278604/185772677-b544d4c1-3e91-471a-9b33-e1b5dcfb265c.png)

 ### Spot Pricing Model

![Spot Pricing Model](https://user-images.githubusercontent.com/2278604/185772665-903e8647-cf30-40b5-8b7e-79afc8207efa.png)

## FlexiTrip Mobile App ( User )
The *FlexiTrip* user application is a mobile app which can present users with all possible routes as well as the estimated price based on occupancy rate and distance from one location to the other. Each possible routes will pass differents stops with a changing occupancy rate
It will provide the below functionalites:
- Touch on/off when boarding the public vehicle
- Display the nearby stops/stations with an average occupancy rate
- Display routes with estimated price and how crowded they are
- Touch off and off board reminder
- Final price calculation based on the actual occupancy rate and  distance along the route

## FlexiTrip Web App ( Admin )
The *FlexiTrip* admin user application is a web applciation which allows admin user to modify the price per kilomemter and occupancy rate threshold for each zone and line.

## FlexiTrip APIs

### DynamicPriceCalculator
 This API calculates the Dynamic Price for the User Journey.
 
 The User App  makes this API call to fetch the Estimated Cost of the Route before Journey.
    /v1/DynamicPrice/{journeyID}/estimate
    


**URL** : `/v1/DynamicPrice/{journeyID}/estimate`

**Method** : `GET`


#### Success Response

**Code** : `200 OK`

**Content example**

```json
{
    {
       id : "11",
       route : "ID",
       startTime : "19:00 pm",
       endTime : "20:00 pm",
       estimatedPrice : "3.00",
       
    }
    
    {
       id : "12",
       route : "ID",
       startTime : "19:00 pm",
       endTime : "20:00 pm",
       estimatedPrice : "4.00",
       
    }
}
```
   
    
 At the End Of the Journey Mobile App would call 
   /v1/DynamicPrice/{journeyID}/receipt
   
This API calculates the Dynamic Price for the User Journey.

**URL** : `/v1/DynamicPrice/{journeyID}/price`

**Method** : `GET`


#### Success Response

**Code** : `200 OK`

**Content example**

```json
{
    {
       id : "11",
       route : "ID",
       startTime : "19:00 pm",
       endTime : "20:00 pm",
       cost : "3.00",
       
    }
}
```
### Real Time Occupancy
This API will provide the Admin View 

### Dynamic Pricing Config
 This API allows the Admin Client of FlexiTrip to View / Update the Dynamic Pricing Configuration. This API can also be used to apply timeboxed promotiions during the events to attract commuters to travel with Public Transport . e.g. Sporting Event Promotion - FlexiRateReduce by 20%
  PUT /v1/DynamicPrice/Config -- Update the Dynamic Pricing Model.
  GET /v1/DynamicPrice/Config -- View the Dynamic Pricing Model.

## Government Benefits 

## User Benefits 

## Future Considerations
