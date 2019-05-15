const size = {
	small: 400,
	med: 960,
	large: 1140,
};

export const above = Object.keys(size).reduce((acc, label) => {
	acc[label] = props => `
        @media (min-width: ${size[label]}px) {
            ${props}
        }
    `;
	return acc;
}, {});

export const below = Object.keys(size).reduce((acc, label) => {
	acc[label] = props => `
        @media (max-width: ${size[label]}px) {
            ${props}
        }
    `;
	return acc;
}, {});
