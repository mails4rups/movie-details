import { HttpHeaders } from '@angular/common/http';


const PRODUCTIONURL = {"siteUrl":"https://hostingfordevelopment.000webhostapp.com/movie-details/","apiEndPoint":"https://api.themoviedb.org/3"};
const DEVELOPMENTURL = {"siteUrl":"http://localhost:4200","apiEndPoint":"https://api.themoviedb.org/3"};

let mode = "prod" /* dev : Development ; prod : Production*/

if(mode == "dev"){
    var webservice = DEVELOPMENTURL.apiEndPoint;
    var addr = DEVELOPMENTURL.siteUrl;
}else{
    var webservice = PRODUCTIONURL.apiEndPoint;
    var addr = PRODUCTIONURL.siteUrl;
}
export const WEBSERVICE = webservice;
export const ADDR = addr;

/*** API KEY FOR MOVIE DATABASE ***/
export const MOVIEDBAPIKEY = '3d111a092546707b1a684978730fdae1';

/*** INITIALIZING PROJECT NAME ALIAS TO STORE DATA IN LOCAL STORAGE ***/
export const PROJECTNAMEALIAS = 'movie_details_';

