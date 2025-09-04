// Video Analytics live streaming
var VCAClosePlayer = `
<svg class="VCAMediaPlayerBtn closex"  viewBox="0 0 30.35 30.35">
<path d="M16.45,15.17,21.92,7.6a.35.35,0,0,0-.17-.52l-1.1-.51a.54.54,0,0,0-.64.14l-4.84,6.7-4.83-6.7a.55.55,0,0,0-.65-.14L8.6,7.08a.34.34,0,0,0-.17.52l5.47,7.57L8.43,22.75a.34.34,0,0,0,.17.52l1.09.5a.53.53,0,0,0,.65-.14l4.83-6.69L20,23.63a.52.52,0,0,0,.64.14l1.1-.5a.35.35,0,0,0,.17-.52Z"/>
</svg>
`;
$(".VCAClosePlayer").append(VCAClosePlayer);

var VCAFullScreenPlayer = `
<svg class="VCAMediaPlayerBtn fullscreen"viewBox="0 0 30.35 30.35">
<path d="M17,12.44a1.71,1.71,0,0,1-1.55.85c-3.2,0-6.4,0-9.6,0-.58,0-.58,0-.58.57q0,4.43,0,8.85c0,.43.12.56.53.56,3.77,0,7.53,0,11.29,0,.16,0,.31,0,.51,0v-.55c0-2.29,0-4.59,0-6.88a1.67,1.67,0,0,1,.84-1.46c0,.2,0,.33,0,.47q0,4.28,0,8.55c0,.68-.09.77-.74.77H5.21c-.67,0-.76-.1-.76-.8V13.12c0-.57.11-.7.63-.7H16.75Z"/>
<path d="M12.73,11.21h-.81c0-.15,0-.29,0-.43V6.94c0-.63.06-.69.66-.69H25.23c.61,0,.67.06.67.68V17.2c0,.6-.12.72-.71.72H20.31l-.41,0a2.79,2.79,0,0,0,0-.32c-.06-.39.09-.53.49-.52,1.37,0,2.74,0,4.11,0,.18,0,.37,0,.59,0v-.47q0-4.47,0-8.94c0-.43-.12-.54-.53-.54H13.24c-.39,0-.53.1-.52.51,0,1.05,0,2.09,0,3.13Z"/>
<path d="M18.72,11.39l-1.8-1.94h4.89l-.25,5c-.55-.59-1-1.08-1.49-1.61-.25-.28-.4-.3-.68,0-1.71,1.69-3.44,3.36-5.16,5l-.35.32-1-1.07Z"/>
</svg>
`;
$(".VCAFullScreenPlayer").append(VCAFullScreenPlayer);

var VCAFullPlayPlayer = `
<svg class="VCAMediaPlayerBtn play" viewBox="0 0 30.35 30.35">
<path d="M10.32,26.13V4.22l13.26,11Z"/>
</svg>
`;
$(".VCAFullPlayPlayer").append(VCAFullPlayPlayer);

var VCAFullPausePlayer = `
<svg class="VCAMediaPlayerBtn pause" viewBox="0 0 30.35 30.35">
<rect x="7.22" y="7.22" width="15.9" height="15.9"/>
</svg>
`;
$(".VCAFullPausePlayer").append(VCAFullPausePlayer);

var VCAFullSnapPlayer = `
<svg class="VCAMediaPlayerBtn snap" viewBox="0 0 30.35 30.35">
<polygon points="4.47 5.6 4.47 13.35 5.6 13.35 5.6 6.73 13.35 6.73 13.35 5.6 5.6 5.6 4.47 5.6" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 0.815546631813049px" />
<polygon points="24.75 5.6 17 5.6 17 6.73 24.75 6.73 24.75 13.35 25.88 13.35 25.88 5.6 24.75 5.6" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 0.815546631813049px" />
<polygon points="24.75 23.62 17 23.62 17 24.75 24.75 24.75 25.88 24.75 25.88 17 24.75 17 24.75 23.62" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 0.815546631813049px" />
<polygon points="5.6 17 4.47 17 4.47 24.75 5.6 24.75 13.35 24.75 13.35 23.62 5.6 23.62 5.6 17" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 0.815546631813049px" />
</svg>
`;
$(".VCAFullSnapPlayer").append(VCAFullSnapPlayer);