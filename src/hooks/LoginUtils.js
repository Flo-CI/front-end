let policyNumber = ''; // Initialize with empty values
let passwordValue = '';

export const setPolicyNumber = (value) => {
    policyNumber = value;
};

export const setPasswordValue = (value) => {
    passwordValue = value;
};

export const getPolicyNumber = () => {
    return policyNumber;
};

export const getPasswordValue = () => {
    return passwordValue;
};