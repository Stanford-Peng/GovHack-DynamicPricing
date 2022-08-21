# FlexiTrip
*FlexiTrip* is a system which monitors the occupancy rate and real time location of public transport in ACT to provde the real-time dynamic pricing to each user.

*FlexiTrip* believes that a dynamic pricing on public transport will balance the traffic of the whole transport system and let user make a informed decision to choose between time and cost while planning their commute. 

The tiered pricing based on near real time service occupancy  will help  commuters decide their journey in a informed way , which would also benefit governments to outline the Pricing Models flexibly based on the Global 

## Problems We identified
 * Current Pricing Model for Transport is pretty much static , this does not provide better outcome for three pillars of transport system access, mobility, and connectivity.
 * The Data from the Monthly Passenger Boarding tells that some of the Routes are under utilised, It might relate to the Static Nature of the Pricing
 * Post Covid , The Pattern of commuters getting onboard on the Public transport has drastically changed. 
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
![adminviewgif](https://user-images.githubusercontent.com/48232605/185774696-fe30a7b5-08eb-4cce-b92e-180345e58aec.gif)


## Example
**Let's say user A** is trying to go from point P1 to point P2. When user input these two points into the mobile app, the mobile app will talk to the dynamic pricing decision engine and the engine will do:
- 1) Fetch routes from Google API
- 2) Get the nearest stops around the user with the occupancy rate collected from event processor
- 3) Use both current occupancy rate from step 2) and historical occupancy rate from the government Open Data set to estimate the price per kilometer(PPK) for the distance between every two step
- 4) Calculate the total price for each route
- 5) Send the routes with occupancy rate and price back to mobile app

It is very likely that there are two possible routes:
- 1) A route with higher estimated price due to the higher occupancy rate though possibly shorter distance and less time

- 2) A route with lower estimated price due to the lower occupancy rate though possibly longer distance and time

Of course there might be a lot of other routes with slightly different price and distance.

**Once user** choose one of the route and start the journy, he will use the app to touch on the bus/station reader. When touching on, below information will be collected and sent to the event processor:
- 1) User ID
- 2) Vehicle ID that the user has taken
- 3) A plus one flag onto the occupancy 
- 4) Station/Stop ID

Along the journey, other passengers might get off and touch off using the FlexiTrip app. When touching off, below information will be sent to the event processor:
- 1) User ID
- 2) Vehicle ID that the user has taken
- 3) A minus one flag onto the occupancy 
- 4) Station/Stop ID

When near the final stop of the user A, the app will detec the current location of the user and remind user to get off and touch off in various ways. When user A touch off, the app will talk to the dynamic pricing engine and does the following:
- 1) Calculate the actual cost along the journey with the actual occupancy rate between the adjacent stops
- 2) Deduct the money from the payment method user sets up
- 3) Notify the user with the total price and calculation metrics(PPK every twp stops)

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
[
    {
       id : "11",
       route : "ID",
       startTime : "19:00 pm",
       endTime : "20:00 pm",
       estimatedPrice : "3.00",
       
    },
    
    {
       id : "12",
       route : "ID",
       startTime : "19:00 pm",
       endTime : "20:00 pm",
       estimatedPrice : "4.00",
       
    }
]
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

## Benefits 
By using the proposed solution, users which are price sensitive and not in hurry are gonna take the less occupied route or vehicle with possibly higher distance, longer wait time and cheaper price whereas users in hurry might take the more occupied lines. Eventually, users' dynamic choices will balance the number of passengers on all the routes and give users better experience when taking the public transport.

## Future Considerations
