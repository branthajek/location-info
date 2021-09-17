import { GOOGLE_API_KEY } from './api-keys';
import './search-location';
// import './select-location';

(document.getElementById('google-map')! as HTMLScriptElement).src=`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}`;