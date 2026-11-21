let zdjecia = null

/**
 * Pobiera listę zdjęć z pliku JSON.
 * @returns {Promise<Array>} - Lista zdjęć.
 * @throws {Error} - Błąd serwera, jeśli dane nie są poprawne.
 */
export async function pobierzZdjecia() {
  if (zdjecia) return zdjecia
  const odpowiedz = await fetch('/photos.json')
  if (!odpowiedz.ok) throw new Error('Błąd serwera: ' +
    odpowiedz.status)
  zdjecia = await odpowiedz.json()
  return zdjecia
}

/**
 * Pobiera zdjęcie o podanym ID.
 * @param {number} id - ID zdjęcia.
 * @returns {Object | null} - Obiekt zdjęcia lub null, jeśli nie znaleziono.
 */
export async function pobierzZdjecie(id) {
  const lista = await pobierzZdjecia()
  return lista.find(z => z.id === Number(id)) ?? null
}

/**
 * Usuwa zdjęcie o podanym ID.
 * @param {number} id - ID zdjęcia.
 * @returns {Array} - Aktualizowana lista zdjęć.
 */
export function usunZdjecie(id) {
  zdjecia = zdjecia.filter(z => z.id !== id)
  return zdjecia
}

/**
 * Przełącza status ulubionego dla zdjęcia o podanym ID.
 * @param {number} id - ID zdjęcia.
 * @returns {Array} - Aktualizowana lista zdjęć.
 */
export function przelaczUlubione(id) {
  zdjecia = zdjecia.map(z => (z.id === id ? {
    ...z, favorite:
      !z.favorite
  } : z))
  return zdjecia
}

/**
 * Dodaje nowe zdjęcie do listy zdjęć.
 * @param {Object} nowe - Obiekt nowego zdjęcia.
 * @returns {Array} - Aktualizowana lista zdjęć.
 */
export function dodajZdjecie(nowe) {
  const noweId = Math.max(...zdjecia.map(z => z.id)) + 1
  zdjecia = [...zdjecia, { ...nowe, id: noweId, favorite: false }]
  return zdjecia
}