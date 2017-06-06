
export function fetchDirecions(lat,lng,olat,olng){
  const DirectionsService = new google.maps.DirectionsService();

  return new Promise((resolve,reject)=> {
    DirectionsService.route({
       origin: new google.maps.LatLng(lat,lng),
       destination: new google.maps.LatLng(olat, olng),
       travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
       if (status === google.maps.DirectionsStatus.OK) {
        resolve(result);
        console.log("directionsResponse:",result)
       } else {
         console.error(`error fetching directions.`);
         reject();
       }
     });  
  })
    // .then((result) => {
    //   return ({
    //     type:FEATCH_DIRECTIONS,
    //     payload:result
    //   });
    // })
    // .catch((reason)=>{
    //   console.log("Error Fetch");
    //   return reason;
    // });
}