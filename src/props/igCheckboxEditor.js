$.ig.react.propTypes.igCheckboxEditor = {
	id: React.PropTypes.string.isRequired,
	checked: React.PropTypes.bool,
	size: React.PropTypes.oneOf([
		"verysmall",
		"small",
		"normal",
		"large"
	]),
	iconClass: React.PropTypes.string,
	tabIndex: React.PropTypes.number,
	readOnly: React.PropTypes.bool,
	width: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	height: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	value: React.PropTypes.string,
	inputName: React.PropTypes.string,
	disabled: React.PropTypes.bool,
	validatorOptions: React.PropTypes.object
}
