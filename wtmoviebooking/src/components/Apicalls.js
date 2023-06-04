import axios from 'axios';
const config= {
    url: {
        API_BASE_URL: 'http://localhost:8081',
        API_BASE_URL1: 'http://localhost:8082',
        API_BASE_URL2: 'http://localhost:8083',
        API_BASE_URL3: 'https://apipro1.ocr.space/parse',
        API_BASE_URL4: 'http://localhost:8084'
    }
}

export const Apicalls ={
    Theatres,
    Movies,
    CheckMovie,
    GetMid,
    GetUser,
    PutUser,
    GetSeat,
    PostUser,
    Verify,
    GetLoyalty,
    ReduceCoins,
    UpdateCoins
}
function GetLoyalty(ldetail){
  return instance4.get('api/loyalty/'+ldetail.id,{
    //   params: mdetail1,
      headers: { 'Content-type': 'application/json' }
    });
 }
 function ReduceCoins(ldetail1){
  return instance4.get('api/loyalty/'+ldetail1.id +'/reduceCoins',{
    //   params: mdetail1,
      headers: { 'Content-type': 'application/json' }
    });
 }
 function UpdateCoins(ldetail2){
  return instance4.get('api/loyalty/'+ldetail2.id +'/updateCoins',{
    //   params: mdetail1,
      headers: { 'Content-type': 'application/json' }
    });
 }
function Theatres(tdetail){
    return instance1.post('api/theatres',tdetail,{
        headers: { 'Content-type': 'application/json'}
    })
}
function PostUser(udetail1){
  return instance2.post('api/users',udetail1,{
      headers: { 'Content-type': 'application/json'}
  })
}

 function GetSeat(udetail){
  return instance2.get('api/users/'+udetail.theatreId+'/'+udetail.movieId+'/'+udetail.datetime,{
    //   params: mdetail1,
      headers: { 'Content-type': 'application/json' }
    });
 }

  function GetUser(udetail){
  return instance2.get('api/users/'+udetail.id, {
    //   params: mdetail1,
      headers: { 'Content-type': 'application/json' }
    });

}
function PutUser(udetail){
  return instance2.put('api/users/'+udetail.id,udetail,{
    headers: { 'Content-type': 'application/json'}
})
}
function Verify(vdetail){
  return instance3.post('/image',vdetail,{
    headers: {
      'apikey': 'OCRK8565898A',
      'Content-Type': 'multipart/form-data',
    }})
}
function Movies(mdetail){
    return instance.post('api/Movies',mdetail,{
        headers: { 'Content-type': 'application/json'}
    })
}
function CheckMovie(mdetail1) {
    return instance.get('api/Movies/m/'+mdetail1.movieName, {
    //   params: mdetail1,
      headers: { 'Content-type': 'application/json' }
    });
  }
  function GetMid(mdetail2) {
    return instance.get('api/Movies/m/'+mdetail2.movieName, {
    //   params: mdetail1,
      headers: { 'Content-type': 'application/json' }
    });
  }
  function CheckTheatre(tdetail1) {
    return instance.get('api/theatres/'+tdetail1.Name, {
    //   params: mdetail1,
      headers: { 'Content-type': 'application/json' }
    });
  }
  
const instance = axios.create({
    baseURL: config.url.API_BASE_URL2
})
const instance1 = axios.create({
    baseURL: config.url.API_BASE_URL1
})
const instance2 = axios.create({
  baseURL: config.url.API_BASE_URL
})
const instance3 = axios.create({
  baseURL: config.url.API_BASE_URL3
})
const instance4 = axios.create({
  baseURL: config.url.API_BASE_URL4
})
