/**
 * Überprüft, ob eine E-Mail-Adresse gültig ist.
 * @param {string} email - Die zu überprüfende E-Mail-Adresse.
 * @return {boolean} - Gibt 'true' zurück, wenn die E-Mail-Adresse gültig ist, sonst 'false'.
 */
export const validateEmail = (email) => {
    // Strikterer regulärer Ausdruck für E-Mail-Validierung
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

export const emailValidationMessage = "Please enter a valid email address.";
