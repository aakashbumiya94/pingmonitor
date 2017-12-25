var Monitor = require('ping-monitor'),
    should = require('should'), 
    website = {website: 'http://devapi.optionscan.net', timeout: 0.2},
    config;


describe('Monitor', function() {
    describe('#Monitor', function() {
        it('should be start monitoring http://devapi.optionscan.net', function(done) {
            var monitor = new Monitor(website);
            
            monitor.timeout.should.be.eql(0.2 * (60 * 1000));
            monitor.website.should.be.eql('http://devapi.optionscan.net');
            
            monitor.stop();
            
            done();
        });
    });    
});