## Övning: Skapa en Nedräkningstimer med React

### Mål
I denna övning kommer du att skapa en nedräkningstimer i React. Timern ska starta från ett givet antal sekunder och räkna ner varje sekund. Du kommer att använda React-hooks som `useEffect` och `useRef` för att hantera timer-logiken.

### Steg för Steg

1. **Skapa en React-komponent:**
   Skapa en ny komponent som heter `CountdownTimer`. Denna komponent ska visa hur många sekunder som är kvar på timern.

2. **Lägg till state:**
   Använd `useState` för att skapa två tillstånd:
   - `timeLeft`: för att hålla reda på antalet sekunder som är kvar.
   - `isActive`: för att hålla reda på om timern är aktiv eller inte.

3. **Använd `useRef`:**
   Skapa en referens med `useRef` för att hålla referensen till timern. Denna referens behövs för att kunna starta och stoppa timern.

4. **Implementera `useEffect`:**
   Använd `useEffect` för att starta timern när `isActive` är `true`, och uppdatera `timeLeft` varje sekund. När `timeLeft` når 0, ska timern stoppas automatiskt.

5. **Lägg till knappar:**
   Lägg till tre knappar:
   - **Starta:** Startar timern.
   - **Pausa:** Pausar timern.
   - **Återställ:** Återställer timern till 60 sekunder.

### Exempelkod
Här är en grundläggande struktur för komponenten:

```jsx
import React, { useState, useEffect, useRef } from 'react';

function CountdownTimer() {

    return (
        <div>
            <h1>Nedräkningstimer</h1>
            <h2>{timeLeft} sekunder kvar</h2>
            <button>Starta</button>
            <button>Pausa</button>
            <button>Återställ</button>
        </div>
    );
}

export default CountdownTimer;
```

### Utmaningar
Försök att utöka funktionaliteten med följande:
1. **Anpassad starttid:** Lägg till en inmatningsruta där användaren kan ange en anpassad starttid för timern.
2. **Meddelande vid slutet:** Visa ett meddelande, t.ex. "Tidens slut!", när timern når 0.

### Syfte
Den här övningen hjälper dig att förstå hur `useEffect` kan användas för att hantera sid-effekter som en timer, och hur `useRef` kan användas för att behålla en referens till ett intervall eller timeout.
