const client = require('prom-client');
let gateway = new client.Pushgateway('http://ab4af2835e68411e8a73a064fb26ff25-1814932884.us-west-2.elb.amazonaws.com:9091/');
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ timeout: 1000 });
collectDefaultMetrics({ prefix: 'cronmetrics' });
const registry = new client.Registry();
gateway.pushAdd({ jobName: 'cronthreads-monitor', groupings: { key: 'finish' } }, function( err,resp,body) {
    console.log(err,body,"4")
});
