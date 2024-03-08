1. Counter
   Läs koden ovan. Skriv sedan från minnet en Counter-komponent som fungerar likadant. Minns du inte hur du ska skriva så gå tillbaka och läs. Ingen copy-paste.

Counter-komponenten ska ha en p-tagg (eller annan tagg) för att visa siffran vi räknar upp/ner. Två knappar för att räkna upp och ner. All logik i reducer-funktionen och vi använder enbart userReducer istf useState.

När du fått Countern att fungera så lägger vi till följande:
En till knapp Reset som nollställer räknaren till 0.
En knapp Add 10 som lägger till 10
En knapp Remove 10 som tar bort 10
En till knapp Halve som halverar räknarens siffra (avrundat uppåt)
En till knapp Double som dubblerar räknarens siffra (avrundat uppåt)

UTMANING:
Lägg till ett inputfält där man ska kunna skriva en siffra och lägg till en knapp Add som lägger till siffran till count. Hint: payload
Bygg en robust komponent där vi inte har några röda squiggly lines eller får error.

2. Sträng 🏴‍☠️
   Vi ska nu skapa en komponent Stringer som fungerar lite liknande som Counter fast vi ska lagra en sträng i state istf en siffra. Vi ska ha en knapp Add R som lägger till ett “R” till strängen så strängen blir en bokstav längre. Add lägger till ett R som sista bokstav. Ha en tagg där du visar upp state.

Ingen copy-paste! Läs din kod och skriv från minnet.

När du fått Stringer att fungera så lägger vi till följande:
En reset-knapp som återställer state-strängen till en tom sträng
En Add XYZ som lägger till strängen “XYZ” sist i state-strängen

UTMANING:
Lägg till ett textfält där man ska kunna skriva en bokstav och lägg till en knapp Add som lägger till en bokstav från input till strängen. Man ska bara kunna skriva en bokstav i textfältet.
Lägg till en Remove-knapp som tar bort sista bokstaven i strängen
Bygg en robust komponent där vi inte har några röda squiggly lines eller får error.
