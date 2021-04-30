'use stric'

const $untrimmedSVGCode = document.querySelector('.untrimmed .code')
const $untrimmedSVGContainer = document.querySelector('.untrimmed .svg-container')

const $trimmedSVGCode = document.querySelector('.trimmed .code')
const $trimmedSVGContainer = document.querySelector('.trimmed .svg-container')

$untrimmedSVGCode.addEventListener('input', (evt) => {
	renderUntrimmedSVG()
})

function validateSVGCode() {
	if ($untrimmedSVGCode.value.match(/^[\s]*<svg(.|\n)*<\/svg>[\s]*$/)) {
		$untrimmedSVGCode.style.borderColor = 'green'
		return true
	} else {
		$untrimmedSVGCode.style.borderColor = 'red'
		return false
	}
}

function renderUntrimmedSVG() {
	if (validateSVGCode()) {
		$untrimmedSVGContainer.innerHTML = $untrimmedSVGCode.value
		renderTrimmedSVG()
	}
}

function renderTrimmedSVG() {
	const $untrimmedSVG = $untrimmedSVGContainer.firstChild
	const $trimmedSVG = $untrimmedSVG.cloneNode(true)

	const bbox = $untrimmedSVG.getBBox()
	const viewBox = [bbox.x, bbox.y, bbox.width, bbox.height].join(' ')
	$trimmedSVG.setAttribute('viewBox', viewBox)
	$trimmedSVGContainer.innerHTML = $trimmedSVG.outerHTML
}
