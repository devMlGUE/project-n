export const getRatingColor = (rating) => {
    let color = ''
    if (6 <= rating && rating < 6.5){
        color = '#ff5722';
    } else if (6.5 <= rating && rating < 7){
        color = '#ff9800';
    } else if (7 <= rating && rating < 7.5){
        color = '#f5e23b';
    } else if (7.5 <= rating && rating < 8){
        color = '#cddc39';
    } else if (8 <= rating && rating < 8.5){
        color = '#8bc34a';
    } else if (8.5 <= rating){
        color = '#4caf50';
    } else {
        color = 'black';
    }
    return color;
}