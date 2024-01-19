/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck es una arreglo de string
 * @returns {String} ultima carta del deck
 */
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0) throw new Error('No hay cartas en del deck');

    const carta = deck.pop();
    return carta;
}