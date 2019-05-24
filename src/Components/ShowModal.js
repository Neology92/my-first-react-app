import React, { Fragment, useRef } from 'react';
import styled from 'styled-components';
import { Button, Card } from 'Elements';
import { Toggle, useOnClickOutside } from 'Utils';

const ShowModal = ({ className }) => {
	return (
		<div className={className}>
			<Toggle>
				{({ on, toggle }) => (
					<Fragment>
						{!on && (
							<Button onClick={toggle}>ShowModal</Button>
						)}
						{on && <LocalCard toggle={toggle} />}
					</Fragment>
				)}
			</Toggle>
		</div>
	);
};

export default styled(ShowModal)`
	height: 100px;
	margin-top: 100px;
`;

const LocalCard = ({ toggle }) => {
	const ref = useRef();

	useOnClickOutside(ref, toggle);

	return <Card ref={ref}>Click outside</Card>;
};
