export const UID = (id = 0) => {
    return {
        next: () => id++
    };
};