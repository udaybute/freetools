// /frontend/src/reportWebVitals.js

import { onCLS, onFCP, onFID, onLCP, onTTFB } from 'web-vitals';

const reportWebVitals = (metric) => {
  console.log(metric);
};

// You can send the metrics to an analytics endpoint or log it to the console
onCLS(reportWebVitals);
onFCP(reportWebVitals);
onFID(reportWebVitals);
onLCP(reportWebVitals);
onTTFB(reportWebVitals);

export default reportWebVitals;
