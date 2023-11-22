export const validatePasswordConf = (password, passwordConf) => {
    return password === passwordConf;
};

export const passwordConfValidationMessage = "Passwords do not match.";