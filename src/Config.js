var Config = {
    server: "http://127.0.0.1",
	port: "5000",
	addr_all: function() { return this.server+":"+this.port+"/all/"},
	addr_single_overview: function(name) { return this.server+":"+this.port+"/single/"+name},
	addr_single_timeline: function(name,hash="") { return this.server+":"+this.port+"/single/"+name+"/timeline"+"?hash="+hash},
	addr_single_moment: function(name,moment) { return this.server+":"+this.port+"/single/"+name+"/"+moment},
}

module.exports = Config