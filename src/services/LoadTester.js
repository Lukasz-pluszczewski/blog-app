import _ from 'lodash';

const LoadTester = {
  test: (urls = [], times = 100, name = 'load test') => {
    const allTestStart = performance.now();
    const results = urls.map(url => {
      const testStart = performance.now();
      const requests = [];
      _.times(times).forEach(() => requests.push(fetch(url.url, { method: url.method, body: url.body }).then(response => response.text())));
      return Promise.all(requests).then(() => ({ url: `${url.method} ${url.url}`, time: performance.now() - testStart }));
    });
    Promise.all(results).then(results => {
      const allTestsTime = performance.now() - allTestStart;
      console.log('Iterations', times);
      console.table([
        { url: 'All tests time', 'time [ms]': allTestsTime, 'time [s]': allTestsTime / 1000 },
        ...results.map(result => ({
          url: result.url,
          'time [ms]': result.time,
          'time [s]': result.time / 1000,
        })),
      ]);
    });
  },
};

export const getTest = () => {
  const urls = [
    { url: 'http://localhost:3000', method: 'GET' },
  ];
  LoadTester.test(urls, 1000, 'Get test');
};

export const complexTest = () => {
  const urls = [
    { url: 'http://localhost:3000', method: 'GET' },
    { url: 'http://localhost:3000/posts/525aede2-9ee9-434d-98f4-473c3e204d4e', method: 'GET' },
    { url: 'http://localhost:3000/posts/3fb195f2-fd58-4214-9c17-b19a604a541f', method: 'GET' },
    { url: 'http://localhost:3000/posts/b48b6c27-0960-424f-914e-c2b1d2a7f69d', method: 'GET' },
  ];
  LoadTester.test(urls, 1000, 'Get test');
};

export default LoadTester;
