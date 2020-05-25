# IT SPA

Aplikacja Single Page Application dla ośrodka SPA dedykowanego programistom.

Aplikacja umożliwia: 

- Wybór daty przyjazdu i wyjazdu oraz pokoju
- Dodawanie pokoju do koszyka
- Przeglądanie dostępnych zabiegów
- Dodawanie wybranych zabiegów do koszyka
- Rejestrację użytkownika 
- Logowanie użytkownika 
- Podsumowanie składanego zamówienia

## Pokoje

Baza pokoi w ośrodku IT SPA znajduje się w pliku `database.json`.
Pokoje wyświetlają się poprzez meni "Rooms".

## Zabiegi 

Baza zabiegów ośrodka IT SPA znajduje się w pliku `database.json`.
Zabiegi wyświetlają się poprzez meni "Treatments".

## Booking

Komponent koszyka wyświetla podsumowanie zamówienia.
Komponent koszyka po najechaniu myszką będzie wyświetlał dodane pokoje i zabiegi bez możliwości redaguwania i po kliknięciu full koszyk z możliwością redagowania. Koszyk umożliwia nanoszenie poprawek do zamówienia (można zmienić ilość pokoi albo zabiegów, usunąć zabieg czy pokój).
Żeby koszyk przetrwał przeładowanie strony, wykorzystane localStorage. Obiekt localStorage przechowuje dane bez daty ważności. Dane nie zostaną usunięte po zamknięciu przeglądarki i będą dostępne następnego dnia, tygodnia lub roku.


## Wybór daty przyjazdu i odjazdu

Komponent dateselector pozwala użytkownikowi wybrać daty przyjazdu i odjazdu, sprawdza dostępność pokoi. Filtrowane pokoje można dodać do koszyka. 

## Rejestracja

Komponent rejestracji użytkownika korzysta z JSON Server Auth (https://www.npmjs.com/package/json-server-auth). 
Rejestracja polega na zapisaniu danych użytkownika (e-mail i hasła) w pliku `users.json`.

## Logowanie

Komponent logowania użytkownika polega na porównaniu podanych przez użytkownika danych (e-mail i hasła) z tymi w pliku `users.json`.

## Wykorzystane technologie

- HTML, Bootstrap
- CSS, Sass
- JavaScript, jQuery

## Odpalanie projektu

Wersja developerska:

```bash
npm run dev
```
Bazy danych:

```bash
npm run db
```
```bash
npm run users
```

Wersja produkcyjna:

```bash
npm run prod
```


