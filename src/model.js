export const sum = (values = [], initial = 0) => {
    return values.reduce((sum, current) => {
        return sum + current;
    }, initial);
};