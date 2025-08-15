Dziennik godzinowy – instrukcja instalacji na iPhonie (pełny ekran, offline)

Pliki:
- index.html – aplikacja
- manifest.webmanifest – definicja PWA
- service-worker.js – obsługa offline
- /icons/icon-192.png i icon-512.png – ikony

Jak to uruchomić BEZ GitHuba:

Opcja A: Netlify Drop (na stały adres www)
1) Otwórz na komputerze stronę:
   https://app.netlify.com/drop
2) Przeciągnij CAŁY folder „dziennik_pwa” (ten z plikami) w okno Netlify.
3) Netlify da Ci adres (np. https://twoj-dziennik.netlify.app/). Zachowaj go.

Opcja B: Glitch (również łatwo, przeglądarka + upload)
1) Wejdź na: https://glitch.com -> New Project -> Import from ZIP
2) Wgraj plik dziennik_pwa.zip (z tego pakietu).

Instalacja na iPhonie (pełny ekran, bez Safari):
1) Otwórz **raz** podany adres w Safari.
2) Dotknij przycisku „Udostępnij” (prostokąt ze strzałką).
3) Wybierz „Dodaj do ekranu początkowego”.
4) Otwórz aplikację z ikony – działa offline i w pełnym ekranie.

Uwaga:
- Dane zapisują się lokalnie w przeglądarce (localStorage). Nie są wysyłane do chmury.
- Użyj „Backup JSON”, żeby zrobić kopię, oraz „Przywróć JSON”, by ją wczytać.
- „Eksport CSV” wyśle wszystkie dni do pliku CSV.
- Aktualizacja aplikacji: jeżeli zmienisz pliki na serwerze, iPhone zaktualizuje PWA przy kolejnym otwarciu lub po przeciągnięciu w dół na ekranie startowym aplikacji.

Zakres godzin: 08:00 – 23:00, pola: Aktywność, Nastrój (0–10), Przyjemność (0–10), Satysfakcja (0–19), Komentarz. Wybór daty na górze.