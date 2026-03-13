import type { ReportCallback } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportCallback): void => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getINP, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getINP(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
