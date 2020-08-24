import { styled } from 'baseui';

export const Row = styled('div', {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: 'repeat(2, 1fr)',
    marginBottom:'10px'
});
