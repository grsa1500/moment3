# Moment 2 
## NodeJs och automatisering med Gulp

#### Vad är syftet med automatisering/Gulp? (vad automatiserings-processens syfte är)

Gulp underlättar arbetet på flera sätt. Gulp gör att man kan separera på arbetsfiler och det som sedan publiceras på ett enkelt sätt. Detta gör att man t.ex. kan ha många separata CSS-filer medan man jobbar men det som publiceras är bara en. Man kan även lägga in många kommentarer som kan underlätta i arbetet men med hjälp av minifiering tas detta bort i den slutgiltiga versionen. Andra fördelar är att man kan skriva koden med SASS, och Gulp kan konvertera det till vanlig CSS. Andra användbara funktioner är att man kan komprimera bilder direkt med Gulp och då inte behöva tänka på det. Allt detta är väldigt bekvämt när man jobbar med stora projekt med mycket att hålla koll på.

#### Vilka paket har du använt och varför?

* gulp-concat - Används för att kombinera flera filer till en. T.ex. flera JavaScript filer till en fil som publiceras.

* gulp-uglify-es - Minimerar JavaScript-filer. Tar bort allt onödigt innehåll som mellanrum, radbrytningar och kommentarer.

* gulp-clean-css - Samma som uglify-es fast för CSS.

* browser-sync - Används för att ha livereload, vilket innebär att sidan ändras automatiskt i webbläsarfönstret i realtid medan man jobbar på koden. 

#### Beskriv systemet du har skapat.

För att starta systemet skrivs kommandot `gulp` i terminalen. Efter detta så körs det i bakgrunden tills man stoppar det själv, eller stänger av. 

##### Funktioner:

* copyHTML - Tar alla HTML-filer som finns i mappen src och lägger över dessa i mappen pub. 

* jsTask - Kombinerar alla JavaScript-filer som ligger i mappen src till en fil och lägger denna fil i mappen js i pub. JavaScript-koden minimeras även.

* cssTask - Samma sak som jsTask fast CSS filer som läggs i mappen css. 

* watchTask - Denna funktion lyssnar efter när en fil sparas och uppdaterar då filerna och sparar dessa. 

* browserSync - I alla funktionerna ovan används browserSync vilket innebär att vid ändringar av valfri fil så uppdateras webbläsaren.

#### Ta även med om du lagt till något extra.

Jag la inte till något extra men ska kika på komprimering av bilder och andra funktioner.