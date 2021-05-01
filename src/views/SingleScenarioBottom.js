var m = require("mithril")

module.exports = {
    view: function() {
        return [
			m(".pure-button", "Back to scenario selection"),
			m(".pure-button", "Back to selected scenario overview "),
			m(".pure-button", "Previous state"),
			m(".pure-button", "Next state")
		]
    }
}