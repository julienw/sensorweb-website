const { injectGlobal } = require<any>('styled-components');

injectGlobal`
@font-face {
	font-family: 'Rubik';
	src: url('${require<string>('../assets/fonts/Rubik-Regular.ttf')}') format('truetype');
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: 'Rubik';
	src: url('${require<string>('../assets/fonts/Rubik-Light.ttf')}') format('truetype');
	font-weight: 300;
	font-style: normal;
}

@font-face {
	font-family: 'Rubik';
	src: url('${require<string>('../assets/fonts/Rubik-LightItalic.ttf')}') format('truetype');
	font-weight: 300;
	font-style: italic;
}

@font-face {
	font-family: 'Rubik';
	src: url('${require<string>('../assets/fonts/Rubik-Medium.ttf')}') format('truetype');
	font-weight: 500;
	font-style: normal;
}

@font-face {
	font-family: 'Rubik';
	src: url('${require<string>('../assets/fonts/Rubik-MediumItalic.ttf')}') format('truetype');
	font-weight: 500;
	font-style: italic;
}

@font-face {
	font-family: 'Rubik';
	src: url('${require<string>('../assets/fonts/Rubik-Bold.ttf')}') format('truetype');
	font-weight: 700;
	font-style: normal;
}

@font-face {
	font-family: 'Rubik';
	src: url('${require<string>('../assets/fonts/Rubik-BoldItalic.ttf')}') format('truetype');
	font-weight: 700;
	font-style: italic;
}

@font-face {
	font-family: 'Rubik';
	src: url('${require<string>('../assets/fonts/Rubik-Black.ttf')}') format('truetype');
	font-weight: 900;
	font-style: normal;
}

@font-face {
	font-family: 'Rubik';
	src: ${require<string>('../assets/fonts/Rubik-BlackItalic.ttf')}') format('truetype');
	font-weight: 900;
	font-style: italic;
}
`