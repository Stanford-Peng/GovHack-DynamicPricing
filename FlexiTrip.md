# FlexiTrip

## Problems we identified
 * Current Pricing Model for Transport is pretty much Static , this does not provide better outcome for three pillars of transport system access, mobility, and connectivity.
 * The Data from the Monthly Passenger Boarding tells that some of the Routes are under utilised, It might relate to the Static Nature of the Pricing
 * Post Covid , The Pattern of commuters getting onboard on the Public transport has drastically changed. 
 * 
## How FlexiTrip solves these problems
 
 FlexiTrip provides ability for Commuters and Government to have Dynamic Pricing Model in place for public transport.
 
 The Dynamic Pricing Model helps Governments set the Pricing based on the Historical 

### Overall SubSytem View

![SubSystem View](https://user-images.githubusercontent.com/2278604/185772677-b544d4c1-3e91-471a-9b33-e1b5dcfb265c.png)

 ### Spot Pricing Model

![Spot Pricing Model](https://user-images.githubusercontent.com/2278604/185772665-903e8647-cf30-40b5-8b7e-79afc8207efa.png)

## FlexiTrip Mobile App ( Users )
*
*
*
*

## FlexiTrip Desktop / Mobile App ( Admins )
*
*
*
*
## FlexiTrip APIs

### DynamicPriceCalculator
 This API calculates the Dynamic Price for the User Journey.
 
 The User App  makes this API call to fetch the Estimated Cost of the Route before Journey.
    /v1/DynamicPrice/{journeyID}/estimate
    
    API Response - The List of Routes and Their Estimated Cost to populate the view on User Modi
    
 At the End Of the Journey Mobile App would call 
   /v1/DynamicPrice/{journeyID}/receipt
   
### Real Time Occupancy
### Dynamic 

## Government Benefits 

## User Benefits 

## Future Considerations
