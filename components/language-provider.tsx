"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "es" | "en" | "pt"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("es")

  // Effect to set the HTML lang attribute
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

// Translations
const translations = {
  es: {
    // Navigation
    overview: "Resumen",
    teams: "Equipos",
    racers: "Pilotos",
    leagues: "Ligas",
    records: "Récords",
    about: "Acerca de",
    rules: "Reglas",
    contact: "Contacto",

    // Homepage
    tournament_title: "Torneo Mario Kart 64",
    tournament_subtitle: "Competición estilo Fórmula 1 con estadísticas de equipos y pilotos en múltiples ligas",
    team_most_wins: "Equipo con Más Victorias",
    racer_most_wins: "Piloto con Más Victorias",
    most_consecutive_wins: "Más Victorias Consecutivas",
    league_champions: "Campeones de Liga",
    total_victories: "victorias totales",
    individual_victories: "victorias individuales",
    races: "carreras",
    tied_with: "Empatados con",
    league_win_each: "victoria de liga cada uno",

    // Teams
    team_statistics: "Estadísticas de Equipos",
    comprehensive_team_stats: "Estadísticas completas para todos los equipos en el Torneo Mario Kart 64",
    managed_by: "Dirigido por",
    team_stats: "Estadísticas del Equipo",
    league_positions: "Posiciones en Liga",

    // Stats labels
    wins: "Victorias",
    points: "Puntos",
    position: "Pos",
    team: "Equipo",
    podiums: "Podios",
    status: "Estado",

    // Racers
    racer_statistics: "Estadísticas de Pilotos",
    individual_statistics: "Estadísticas individuales para todos los pilotos en el Torneo Mario Kart 64",
    stats: "Estadísticas",

    // Leagues
    league_standings: "Clasificación de Ligas",
    view_standings: "Ver la clasificación para cada liga en el Torneo Mario Kart 64",
    champion: "Campeón",
    total_races: "Total de Carreras",
    league_date: "Fecha de Liga",
    current_league_leader: "Líder actual de la liga",
    races_in_league: "Carreras en esta liga",

    // Records
    tournament_records: "Récords del Torneo",
    records_achievements: "Récords y logros en todas las clases de CC",
    most_wins_overall: "Mayor Cantidad de Victorias",
    most_podiums: "Mayor Cantidad de Podios",
    most_points: "Mayor Cantidad de Puntos",
    across_cc_classes: "En todas las clases de CC",
    across_all_tracks: "En todas las pistas",

    // Positions
    "1st": "1ro",
    "2nd": "2do",
    "3rd": "3ro",
    "4th": "4to",
    champion_label: "Campeón",
    runner_up: "Subcampeón",
    "3rd_place": "3er Lugar",
    "4th_place": "4to Lugar",

    // Language
    language: "Idioma",
    spanish: "Español",
    english: "Inglés",
    portuguese: "Portugués",

    // Team names
    team_fernando: "Equipo Fernando",
    team_benizio: "Equipo Benizio",
    team_jeremias: "Equipo Jeremías",
    team_genesis: "Equipo Génesis",
  },
  en: {
    // Navigation
    overview: "Overview",
    teams: "Teams",
    racers: "Racers",
    leagues: "Leagues",
    records: "Records",
    about: "About",
    rules: "Rules",
    contact: "Contact",

    // Homepage
    tournament_title: "Mario Kart 64 Tournament",
    tournament_subtitle: "Formula 1-style competition tracking team and racer statistics across multiple leagues",
    team_most_wins: "Team with Most Wins",
    racer_most_wins: "Racer with Most Wins",
    most_consecutive_wins: "Most Consecutive Wins",
    league_champions: "League Champions",
    total_victories: "total victories",
    individual_victories: "individual victories",
    races: "races",
    tied_with: "Tied with",
    league_win_each: "league win each",

    // Teams
    team_statistics: "Team Statistics",
    comprehensive_team_stats: "Comprehensive statistics for all teams in the Mario Kart 64 Tournament",
    managed_by: "Managed by",
    team_stats: "Team Stats",
    league_positions: "League Positions",

    // Stats labels
    wins: "Wins",
    points: "Points",
    position: "Pos",
    team: "Team",
    podiums: "Podiums",
    status: "Status",

    // Racers
    racer_statistics: "Racer Statistics",
    individual_statistics: "Individual statistics for all racers in the Mario Kart 64 Tournament",
    stats: "Stats",

    // Leagues
    league_standings: "League Standings",
    view_standings: "View the standings for each league in the Mario Kart 64 Tournament",
    champion: "Champion",
    total_races: "Total Races",
    league_date: "League Date",
    current_league_leader: "Current league leader",
    races_in_league: "Races in this league",

    // Records
    tournament_records: "Tournament Records",
    records_achievements: "Records and achievements across all CC classes",
    most_wins_overall: "Most Wins Overall",
    most_podiums: "Most Podiums",
    most_points: "Most Points",
    across_cc_classes: "Across all CC classes",
    across_all_tracks: "Across all tracks",

    // Positions
    "1st": "1st",
    "2nd": "2nd",
    "3rd": "3rd",
    "4th": "4th",
    champion_label: "Champion",
    runner_up: "Runner-up",
    "3rd_place": "3rd Place",
    "4th_place": "4th Place",

    // Language
    language: "Language",
    spanish: "Spanish",
    english: "English",
    portuguese: "Portuguese",

    // Team names
    team_fernando: "Team Fernando",
    team_benizio: "Team Benizio",
    team_jeremias: "Team Jeremías",
    team_genesis: "Team Génesis",
  },
  pt: {
    // Navigation
    overview: "Visão Geral",
    teams: "Equipes",
    racers: "Pilotos",
    leagues: "Ligas",
    records: "Recordes",
    about: "Sobre",
    rules: "Regras",
    contact: "Contato",

    // Homepage
    tournament_title: "Torneio Mario Kart 64",
    tournament_subtitle: "Competição estilo Fórmula 1 rastreando estatísticas de equipes e pilotos em múltiplas ligas",
    team_most_wins: "Equipe com Mais Vitórias",
    racer_most_wins: "Piloto com Mais Vitórias",
    most_consecutive_wins: "Mais Vitórias Consecutivas",
    league_champions: "Campeões da Liga",
    total_victories: "vitórias totais",
    individual_victories: "vitórias individuais",
    races: "corridas",
    tied_with: "Empatados com",
    league_win_each: "vitória da liga cada",

    // Teams
    team_statistics: "Estatísticas das Equipes",
    comprehensive_team_stats: "Estatísticas abrangentes para todas as equipes no Torneio Mario Kart 64",
    managed_by: "Gerenciado por",
    team_stats: "Estatísticas da Equipe",
    league_positions: "Posições na Liga",

    // Stats labels
    wins: "Vitórias",
    points: "Pontos",
    position: "Pos",
    team: "Equipe",
    podiums: "Pódios",
    status: "Status",

    // Racers
    racer_statistics: "Estatísticas dos Pilotos",
    individual_statistics: "Estatísticas individuais para todos os pilotos no Torneio Mario Kart 64",
    stats: "Estatísticas",

    // Leagues
    league_standings: "Classificação das Ligas",
    view_standings: "Ver a classificação para cada liga no Torneio Mario Kart 64",
    champion: "Campeão",
    total_races: "Total de Corridas",
    league_date: "Data da Liga",
    current_league_leader: "Líder atual da liga",
    races_in_league: "Corridas nesta liga",

    // Records
    tournament_records: "Recordes do Torneio",
    records_achievements: "Recordes e conquistas em todas as classes de CC",
    most_wins_overall: "Mais Vitórias Gerais",
    most_podiums: "Mais Pódios",
    most_points: "Mais Pontos",
    across_cc_classes: "Em todas as classes de CC",
    across_all_tracks: "Em todas as pistas",

    // Positions
    "1st": "1º",
    "2nd": "2º",
    "3rd": "3º",
    "4th": "4º",
    champion_label: "Campeão",
    runner_up: "Vice-campeão",
    "3rd_place": "3º Lugar",
    "4th_place": "4º Lugar",

    // Language
    language: "Idioma",
    spanish: "Espanhol",
    english: "Inglês",
    portuguese: "Português",

    // Team names
    team_fernando: "Equipe Fernando",
    team_benizio: "Equipe Benizio",
    team_jeremias: "Equipe Jeremías",
    team_genesis: "Equipe Génesis",
  },
}
