export default ({x = 'left' ,y = 'top'}) => {
    
    let xPos, yPos;

    switch (x)
    {
        case 'left':
            xPos = 'left: 0;';
            break;

        case 'right':
            xPos = 'right: 0;';
            break;

        case 'center':
            xPos = 'left: 50%; translateX(-50%);';
            break;
    }

    switch (y)
    {
        case 'top':
            yPos = 'top: 0;';
            break;

        case 'down':
            yPos = 'down: 0;';
            break;

        case 'center':
            yPos = 'top: 50%; translateY(-50%);';
            break;
    }

    console.log(`
    position: absolute;
    ${xPos}
    ${yPos}
    `);

    return(`
    position: absolute;
    ${xPos}
    ${yPos}
    `);
}