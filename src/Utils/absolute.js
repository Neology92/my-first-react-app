export default ({ x = 'left', y = 'top' } = {}) => {
	let xPos, yPos;

	switch (x) {
		case 'left':
			xPos = 'left: 0;';
			break;

		case 'right':
			xPos = 'right: 0;';
			break;

		case 'center':
			xPos = `left: 50%; 
                    transform: translateX(-50%);`;
			break;

		default:
			xPos = 'left: 0;';
			break;
	}

	switch (y) {
		case 'top':
			yPos = 'top: 0;';
			break;

		case 'down':
			yPos = 'down: 0;';
			break;

		case 'center':
			yPos = `top: 50%; 
                    transform: translateY(-50%);`;
			break;

		default:
			yPos = 'top: 0;';
			break;
	}

	return `
    position: absolute;
    ${xPos}
    ${yPos}
    `;
};
