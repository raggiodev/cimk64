"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trophy, Medal, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

interface LeagueTableProps {
  league: string
}

export default function LeagueTable({ league }: LeagueTableProps) {
  const { t } = useLanguage()

  // Determine which data to use based on the league
  const data = league.includes("Liga 1 (50cc)")
    ? league50ccL1Data
    : league.includes("Liga 4 (50cc)")
      ? league50ccL4Data
      : league.includes("Liga 2 (100cc)")
        ? league100ccL2Data
        : league.includes("Liga 5 (100cc)")
          ? league100ccL5Data
          : league150ccData

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{league}</h3>
      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">{t("position")}</TableHead>
              <TableHead>{t("team")}</TableHead>
              <TableHead className="text-center">{t("races")}</TableHead>
              <TableHead className="text-center">{t("wins")}</TableHead>
              <TableHead className="text-center">{t("podiums")}</TableHead>
              <TableHead className="text-center">{t("points")}</TableHead>
              <TableHead className="text-center">{t("status")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((team, index) => (
              <TableRow key={team.id} className="hover:bg-muted/50">
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-background z-10">
                        <Image
                          src={`/placeholder.svg?height=32&width=32`}
                          alt={team.racers[0]}
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </div>
                      <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-background">
                        <Image
                          src={`/placeholder.svg?height=32&width=32`}
                          alt={team.racers[1]}
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">{team.owner}</div>
                      <div className="text-xs text-muted-foreground">{t(team.nameKey)}</div>
                      <div className="text-xs text-muted-foreground">{team.racers.join(" & ")}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center">{team.races}</TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Trophy className="h-4 w-4 text-yellow-500" />
                    {team.wins}
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Medal className="h-4 w-4 text-blue-500" />
                    {team.podiums}
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Star className="h-4 w-4 text-green-500" />
                    {team.points}
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <Badge
                    variant={index === 0 ? "default" : "outline"}
                    className={
                      index === 0
                        ? "bg-yellow-500 hover:bg-yellow-500"
                        : index === 1
                          ? "bg-gray-400 hover:bg-gray-400 text-black"
                          : index === 2
                            ? "bg-amber-700 hover:bg-amber-700"
                            : "bg-black hover:bg-black text-muted-foreground"
                    }
                  >
                    {t(
                      index === 0
                        ? "champion_label"
                        : index === 1
                          ? "runner_up"
                          : index === 2
                            ? "3rd_place"
                            : "4th_place",
                    )}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

// Liga 1 - 50cc data (original)
const league50ccL1Data = [
  {
    id: "fernando",
    nameKey: "team_fernando",
    owner: "Fernando",
    racers: ["Peach", "Bowser"],
    races: 11,
    wins: 9,
    podiums: 9,
    points: 27,
  },
  {
    id: "jeremias",
    nameKey: "team_jeremias",
    owner: "Jeremías",
    racers: ["Luigi", "Toad"],
    races: 11,
    wins: 0,
    podiums: 8,
    points: 19,
  },
  {
    id: "genesis",
    nameKey: "team_genesis",
    owner: "Génesis",
    racers: ["Mario", "D.K."],
    races: 11,
    wins: 1,
    podiums: 3,
    points: 13,
  },
  {
    id: "benizio",
    nameKey: "team_benizio",
    owner: "Benizio",
    racers: ["Yoshi", "Wario"],
    races: 11,
    wins: 1,
    podiums: 2,
    points: 7,
  },
]

// Liga 4 - 50cc data (new)
const league50ccL4Data = [
  {
    id: "fernando",
    nameKey: "team_fernando",
    owner: "Fernando",
    racers: ["Peach", "Bowser"],
    races: 16,
    wins: 6,
    podiums: 16, // 6 first + 6 second + 4 third = 16 podiums
    points: 34, // (6×3) + (6×2) + (4×1) = 18 + 12 + 4 = 34 points
  },
  {
    id: "benizio",
    nameKey: "team_benizio",
    owner: "Benizio",
    racers: ["Yoshi", "Wario"],
    races: 16,
    wins: 8,
    podiums: 14, // 8 first + 3 second + 3 third = 14 podiums
    points: 33, // (8×3) + (3×2) + (3×1) = 24 + 6 + 3 = 33 points
  },
  {
    id: "jeremias",
    nameKey: "team_jeremias",
    owner: "Jeremías",
    racers: ["Luigi", "Toad"],
    races: 16,
    wins: 2,
    podiums: 15, // 2 first + 4 second + 9 third = 15 podiums
    points: 23, // (2×3) + (4×2) + (9×1) = 6 + 8 + 9 = 23 points
  },
  {
    id: "genesis",
    nameKey: "team_genesis",
    owner: "Génesis",
    racers: ["Mario", "D.K."],
    races: 16,
    wins: 0,
    podiums: 3, // 0 first + 3 second + 0 third = 3 podiums
    points: 6, // (0×3) + (3×2) + (0×1) = 0 + 6 + 0 = 6 points
  },
]

// Liga 2 - 100cc data (new)
const league100ccL2Data = [
  {
    id: "fernando",
    nameKey: "team_fernando",
    owner: "Fernando",
    racers: ["Peach", "Bowser"],
    races: 21,
    wins: 10,
    podiums: 18,
    points: 49,
  },
  {
    id: "jeremias",
    nameKey: "team_jeremias",
    owner: "Jeremías",
    racers: ["Luigi", "Toad"],
    races: 21,
    wins: 5,
    podiums: 14,
    points: 40,
  },
  {
    id: "benizio",
    nameKey: "team_benizio",
    owner: "Benizio",
    racers: ["Yoshi", "Wario"],
    races: 21,
    wins: 6,
    podiums: 10,
    points: 37,
  },
  {
    id: "genesis",
    nameKey: "team_genesis",
    owner: "Génesis",
    racers: ["Mario", "D.K."],
    races: 0,
    wins: 0,
    podiums: 0,
    points: 0,
  },
]

// Liga 5 - 100cc data (second 100cc competition)
const league100ccL5Data = [
  {
    id: "benizio",
    nameKey: "team_benizio",
    owner: "Benizio",
    racers: ["Yoshi", "Wario"],
    races: 16,
    wins: 8,
    podiums: 16, // 8 first + 6 second + 2 third = 16
    points: 38, // (8*3) + (6*2) + (2*1) = 24 + 12 + 2 = 38
  },
  {
    id: "fernando",
    nameKey: "team_fernando",
    owner: "Fernando",
    racers: ["Peach", "Bowser"],
    races: 16,
    wins: 7,
    podiums: 16, // 7 first + 6 second + 3 third = 16
    points: 36, // (7*3) + (6*2) + (3*1) = 21 + 12 + 3 = 36
  },
  {
    id: "jeremias",
    nameKey: "team_jeremias",
    owner: "Jeremías",
    racers: ["Luigi", "Toad"],
    races: 16,
    wins: 1,
    podiums: 16, // 1 first + 4 second + 11 third = 16
    points: 22, // (1*3) + (4*2) + (11*1) = 3 + 8 + 11 = 22
  },
  {
    id: "genesis",
    nameKey: "team_genesis",
    owner: "Génesis",
    racers: ["Mario", "D.K."],
    races: 16,
    wins: 0,
    podiums: 0, // 0 first + 0 second + 0 third = 0
    points: 0, // (0*3) + (0*2) + (0*1) = 0
  },
]

const league150ccData = [
  {
    id: "benizio",
    nameKey: "team_benizio",
    owner: "Benizio",
    racers: ["Yoshi", "Wario"],
    races: 16,
    wins: 9,
    podiums: 16,
    points: 39,
  },
  {
    id: "fernando",
    nameKey: "team_fernando",
    owner: "Fernando",
    racers: ["Peach", "Bowser"],
    races: 16,
    wins: 6,
    podiums: 15,
    points: 34,
  },
  {
    id: "jeremias",
    nameKey: "team_jeremias",
    owner: "Jeremías",
    racers: ["Luigi", "Toad"],
    races: 16,
    wins: 1,
    podiums: 13,
    points: 19,
  },
  {
    id: "genesis",
    nameKey: "team_genesis",
    owner: "Génesis",
    racers: ["Mario", "D.K."],
    races: 16,
    wins: 0,
    podiums: 4,
    points: 4,
  },
]
