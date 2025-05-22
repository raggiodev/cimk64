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
  const data = league.includes("50cc") ? league50ccData : league.includes("100cc") ? league100ccData : league150ccData

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
                      <div className="font-medium">{t(team.nameKey)}</div>
                      <div className="text-xs text-muted-foreground">{team.owner}</div>
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

// Sample data for each league
const league50ccData = [
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

const league100ccData = [
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

const league150ccData = [
  {
    id: "benizio",
    nameKey: "team_benizio",
    owner: "Benizio",
    racers: ["Yoshi", "Wario"],
    races: 16,
    wins: 9,
    podiums: 14,
    points: 39,
  },
  {
    id: "fernando",
    nameKey: "team_fernando",
    owner: "Fernando",
    racers: ["Peach", "Bowser"],
    races: 16,
    wins: 6,
    podiums: 13,
    points: 34,
  },
  {
    id: "jeremias",
    nameKey: "team_jeremias",
    owner: "Jeremías",
    racers: ["Luigi", "Toad"],
    races: 16,
    wins: 1,
    podiums: 5,
    points: 19,
  },
  {
    id: "genesis",
    nameKey: "team_genesis",
    owner: "Génesis",
    racers: ["Mario", "D.K."],
    races: 16,
    wins: 0,
    podiums: 0,
    points: 4,
  },
]
