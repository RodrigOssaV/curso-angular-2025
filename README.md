# Dashboard App 2025

> An interactive web application featuring multiple mini-projects:  
> - **Rock, Paper, Scissors Game** with characters from the **Rick and Morty** universe.  
> - **PokéLab** to explore Pokémon with detailed stats using the **PokéAPI**.  
> - **City Weather Now** to check the current weather for any location using the **OpenWeatherMap API**.  
> All features are combined in a responsive and intuitive dashboard.

---

## Production Demo

[**Dashboard**](https://rick-morty-juego.vercel.app/)  
*(Available online on Vercel)*

[**Rock, Paper, Scissors Game - Battle Royale**](https://rick-morty-juego.vercel.app/) <!-- battle-royal/game -->  
*(Available online on Vercel)*

[**City Weather Now**](https://rick-morty-juego.vercel.app/) <!-- weather/city-weather-now -->  
*(Available online on Vercel)*

[**Where Trainers Begin - PokéLab**](https://rick-morty-juego.vercel.app/) <!-- pokemon/pokedex -->  
*(Available online on Vercel)*

---

## How to Play

- **Rock, Paper, Scissors**: Choose your character from Rick and Morty, then select rock, paper, or scissors to play against the computer.  
- **PokéLab**: Browse Pokémon and view detailed stats, types, and abilities.  
- **Weather**: Enter your city to get the current weather information.  

---

## Project Structure

- `src/app` - Angular components, modules, and services
- `src/app/home` - Main page Dashboard App 2025
- `src/app/pokemon` - Components, modules, and services
- `src/app/rps-game` - Components, modules, and services
- `src/app/weather` - Components, modules, and services
- `src/assets` - Images, icons, and other static assets
- `src/environments` - Environment configuration for development and production
- `README.md` - Project documentation

---

## Development

Developed by **Rodrigo Ossa Villalobos**.  
The project uses the [Rick and Morty API](https://rickandmortyapi.com/api) to fetch series characters.  
It uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch city weather data.  
It uses the [PokéAPI](https://pokeapi.co/docs/v2#pokemon) to fetch Pokémon data.

---

## 🧩 Technologies

| Technology | Version | Description |
|------------|---------|-------------|
| **Angular** | 15.2.11 | Frontend framework |
| **Node.js** | 20.14.0 | Development environment |
| **API** | `https://rickandmortyapi.com/api` | Rick & Morty data source |
| **API** | `https://openweathermap.org/api` | Weather data by city |
| **API** | `https://pokeapi.co/docs/v2#pokemon` | Pokémon data source |
| **Web Version** | 0.3.XX | Current software version |

---
<!-- TODO  Screenshots pages-->
<!-- ## Screenshots

![Battle Royale Game Start](https://github.com/RodrigOssaV/curso-angular-2025/blob/64fef29f0089f02026b7c634afaec09fee5ad8b1/src/assets/gameplay/inicio-gameplay.jpg) -->

---

## Features

- Character selection from the Rick and Morty API.  
- Classic Rock, Paper, Scissors game with animations.  
- Get the weather for your specific location using the OpenWeatherMap API.  
- Access detailed information about Pokémon from the PokéAPI.  
- Dynamic tracking of winners and game results.  
- Intuitive and responsive interface.

---

## Local Installation

```bash
# Clone this repository
git clone https://github.com/RodrigOssaV/curso-angular-2025.git

# Navigate into the project folder
cd curso-angular-2025

# Install dependencies
npm install

# Start development server
ng serve
