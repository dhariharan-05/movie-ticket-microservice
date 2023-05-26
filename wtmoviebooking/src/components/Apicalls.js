import axios from 'axios';
const config= {
    url: {
        API_BASE_URL: 'http://localhost:8081',
        API_BASE_URL1: 'http://localhost:8082',
        API_BASE_URL2: 'http://localhost:8083'
    }
}

export const Apicalls ={
    Theatres,
    Movies,
    CheckMovie,
    GetMid,
    GetUser,
    PutUser
}
function Theatres(tdetail){
    return instance1.post('api/theatres',tdetail,{
        headers: { 'Content-type': 'application/json'}
    })
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
