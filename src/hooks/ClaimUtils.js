let claimNumber = ''; // Initialize with empty values
let claimName = '';

export const setClaimNumber = (value) => {
    claimNumber = value;
};

export const setClaimName = (value) => {
    claimName = value;
}

export const getClaimNumber = () => {
    return claimNumber;
};

export const getClaimName = () => {
    return claimName;
}