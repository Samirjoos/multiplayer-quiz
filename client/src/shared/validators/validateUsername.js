/**
 * Überprüft, ob ein Benutzername gültig ist.
 * @param {string} username - Der zu überprüfende Benutzername.
 * @return {boolean} - Gibt 'true' zurück, wenn der Benutzername gültig ist, sonst 'false'.
 */
export const validateUsername = (username) => {
    // Benutzername muss zwischen 3 und 10 Zeichen lang sein und darf Buchstaben,
    // Zahlen, Bindestriche und Unterstriche enthalten
    const regex = /^[a-zA-Z0-9-_]{3,10}$/;
    return regex.test(username);
};

export const usernameValidationMessage = "Username must be 3-10 chars long and can contain letters, numbers, dashes, and underscores.";
