// Visualization module
(function () {
  var $section = $('#siteVisual1');
  $section.find('.panzoom').panzoom({
    $zoomIn: $section.find(".zoomIn"),
    $zoomOut: $section.find(".zoomOut"),
//    $zoomRange: $section.find(".zoom-range"),
    $reset: $section.find(".zoomReset"),
    startTransform: 'scale(1.1)',
    increment: 0.1,
    minScale: 1,
    contain: 'automatic'
  }).panzoom('zoom');
})();

(function () {
  var $section = $('#siteVisual2');
  $section.find('.panzoom').panzoom({
    $zoomIn: $section.find(".zoomIn"),
    $zoomOut: $section.find(".zoomOut"),
//    $zoomRange: $section.find(".zoom-range"),
    $reset: $section.find(".zoomReset"),
    startTransform: 'scale(1.1)',
    increment: 0.1,
    minScale: 1,
    contain: 'automatic'
  }).panzoom('zoom');
})();

(function () {
  var $section = $('#siteVisual3');
  $section.find('.panzoom').panzoom({
    $zoomIn: $section.find(".zoomIn"),
    $zoomOut: $section.find(".zoomOut"),
//    $zoomRange: $section.find(".zoom-range"),
    $reset: $section.find(".zoomReset"),
    startTransform: 'scale(1.1)',
    increment: 0.1,
    minScale: 1,
    contain: 'automatic'
  }).panzoom('zoom');
})();