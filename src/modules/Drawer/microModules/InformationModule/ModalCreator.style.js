import { styled } from 'baseui';

export const Row = styled('div', {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: 'repeat(2, 1fr)',
    marginBottom:'10px'
});

export const Form = styled('div', {
    display: 'flex',
    flexDirection:'column',
    marginTop: '20px',
    borderTop: '0.5px solid #757575'
});

export const FormSectionCenter = styled('div', {
    marginTop:'10px',
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: 'repeat(3, 1fr)',
});

export const RadioSection = styled('div', {
    display: 'flex',
    flexDirection:'column',
});
