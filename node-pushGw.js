const client = require('prom-client');
let gateway = new client.Pushgateway('http://pushgw_url:9091/');
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ timeout: 1000 });
collectDefaultMetrics({ prefix: 'cronmetrics' });
const registry = new client.Registry();
gateway.pushAdd({ jobName: 'cronthreads-monitor', groupings: { key: 'finish' } }, function( err,resp,body) {
    console.log(err,body,"4")
});
