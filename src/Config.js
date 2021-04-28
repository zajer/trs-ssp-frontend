var Config = {
    server: "http://127.0.0.1",
	port: "5000",
	addr_scenarios: function() { return this.server+":"+this.port+"/scenarios/"},
}

module.exports = Config