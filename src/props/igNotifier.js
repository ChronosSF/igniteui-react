$.ig.react.propTypes.shapes.igNotifierHeaderTemplate = {
	closeButton: React.PropTypes.bool,
	title: React.PropTypes.string
}

$.ig.react.propTypes.igNotifier = {
	id: React.PropTypes.string.isRequired,
	state: React.PropTypes.oneOf([
		"success",
		"info",
		"warning",
		"error"
	]),
	notifyLevel: React.PropTypes.oneOf([
		"success",
		"info",
		"warning",
		"error"
	]),
	appendTo: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.object
	]),
	mode: React.PropTypes.oneOf([
		"auto",
		"popover",
		"inline"
	]),
	allowCSSOnTarget: React.PropTypes.bool,
	showIcon: React.PropTypes.bool,
	contentTemplate: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.func
	]),
	headerTemplate: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igNotifierHeaderTemplate
	),
	showOn: React.PropTypes.oneOf([
		"mouseenter",
		"click",
		"focus",
		"manual"
	]),
	closeOnBlur: React.PropTypes.bool,
	animationDuration: React.PropTypes.number,
	animationSlideDistance: React.PropTypes.number,
	direction: React.PropTypes.oneOf([
		"auto",
		"left",
		"right",
		"top",
		"bottom"
	]),
	directionPriority: React.PropTypes.array,
	position: React.PropTypes.oneOf([
		"auto",
		"balanced",
		"start",
		"end"
	]),
	width: React.PropTypes.oneOfType([
		React.PropTypes.number,
		React.PropTypes.string
	]),
	height: React.PropTypes.oneOfType([
		React.PropTypes.number,
		React.PropTypes.string
	]),
	minWidth: React.PropTypes.oneOfType([
		React.PropTypes.number,
		React.PropTypes.string
	]),
	maxWidth: React.PropTypes.oneOfType([
		React.PropTypes.number,
		React.PropTypes.string
	]),
	maxHeight: React.PropTypes.oneOfType([
		React.PropTypes.number,
		React.PropTypes.string
	]),
	containment: React.PropTypes.object
}
