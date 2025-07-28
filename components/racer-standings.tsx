"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trophy, Medal } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export default function RacerStandings() {
  const { t } = useLanguage()

  return (
    <div className="rounded-md border overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">{t("position")}</TableHead>
            <TableHead>{t("racers")}</TableHead>
            <TableHead className="text-center">{t("wins")}</TableHead>
            <TableHead className="text-center">{t("points")}</TableHead>
            <TableHead className="text-center">50cc L1</TableHead>
            <TableHead className="text-center">100cc</TableHead>
            <TableHead className="text-center">150cc</TableHead>
            <TableHead className="text-center">50cc L4</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {racerStandings.map((racer, index) => (
            <TableRow key={racer.id} className="hover:bg-muted/50">
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-background">
                    <Image
                      src={`/placeholder.svg?height=32&width=32`}
                      alt={racer.name}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">{racer.name}</div>
                    <div className="text-xs text-muted-foreground">{t(racer.teamKey)}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Trophy className="h-4 w-4 text-yellow-500" />
                  {racer.wins}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Medal className="h-4 w-4 text-blue-500" />
                  {racer.points}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <Badge
                  variant={racer.cc50L1 <= 3 ? "default" : "outline"}
                  className={
                    racer.cc50L1 === 1
                      ? "bg-yellow-500 hover:bg-yellow-500"
                      : racer.cc50L1 === 2
                        ? "bg-gray-400 hover:bg-gray-400 text-black"
                        : racer.cc50L1 === 3
                          ? "bg-amber-700 hover:bg-amber-700"
                          : "bg-black hover:bg-black text-muted-foreground"
                  }
                >
                  {t(racer.cc50L1 === 1 ? "1st" : racer.cc50L1 === 2 ? "2nd" : racer.cc50L1 === 3 ? "3rd" : "4th")}
                </Badge>
              </TableCell>
              <TableCell className="text-center">
                <Badge
                  variant={racer.cc100 <= 3 ? "default" : "outline"}
                  className={
                    racer.cc100 === 1
                      ? "bg-yellow-500 hover:bg-yellow-500"
                      : racer.cc100 === 2
                        ? "bg-gray-400 hover:bg-gray-400 text-black"
                        : racer.cc100 === 3
                          ? "bg-amber-700 hover:bg-amber-700"
                          : "bg-black hover:bg-black text-muted-foreground"
                  }
                >
                  {t(racer.cc100 === 1 ? "1st" : racer.cc100 === 2 ? "2nd" : racer.cc100 === 3 ? "3rd" : "4th")}
                </Badge>
              </TableCell>
              <TableCell className="text-center">
                <Badge
                  variant={racer.cc150 <= 3 ? "default" : "outline"}
                  className={
                    racer.cc150 === 1
                      ? "bg-yellow-500 hover:bg-yellow-500"
                      : racer.cc150 === 2
                        ? "bg-gray-400 hover:bg-gray-400 text-black"
                        : racer.cc150 === 3
                          ? "bg-amber-700 hover:bg-amber-700"
                          : "bg-black hover:bg-black text-muted-foreground"
                  }
                >
                  {t(racer.cc150 === 1 ? "1st" : racer.cc150 === 2 ? "2nd" : racer.cc150 === 3 ? "3rd" : "4th")}
                </Badge>
              </TableCell>
              <TableCell className="text-center">
                <Badge
                  variant={racer.cc50L4 <= 3 ? "default" : "outline"}
                  className={
                    racer.cc50L4 === 1
                      ? "bg-yellow-500 hover:bg-yellow-500"
                      : racer.cc50L4 === 2
                        ? "bg-gray-400 hover:bg-gray-400 text-black"
                        : racer.cc50L4 === 3
                          ? "bg-amber-700 hover:bg-amber-700"
                          : "bg-black hover:bg-black text-muted-foreground"
                  }
                >
                  {t(racer.cc50L4 === 1 ? "1st" : racer.cc50L4 === 2 ? "2nd" : racer.cc50L4 === 3 ? "3rd" : "4th")}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

const racerStandings = [
  {
    id: "peach",
    name: "Peach",
    teamKey: "team_fernando",
    wins: 31, // 9 + 10 + 6 + 6 = 31 total wins
    points: 144, // 27 + 49 + 34 + 34 = 144 total points
    cc50L1: 1, // 1st in 50cc Liga 1
    cc100: 1, // 1st in 100cc
    cc150: 2, // 2nd in 150cc
    cc50L4: 1, // 1st in 50cc Liga 4
  },
  {
    id: "yoshi",
    name: "Yoshi",
    teamKey: "team_benizio",
    wins: 24, // 1 + 6 + 9 + 8 = 24 total wins
    points: 116, // 7 + 37 + 39 + 33 = 116 total points
    cc50L1: 4, // 4th in 50cc Liga 1
    cc100: 3, // 3rd in 100cc
    cc150: 1, // 1st in 150cc
    cc50L4: 2, // 2nd in 50cc Liga 4
  },
  {
    id: "luigi",
    name: "Luigi",
    teamKey: "team_jeremias",
    wins: 8, // 0 + 5 + 1 + 2 = 8 total wins
    points: 101, // 19 + 40 + 19 + 23 = 101 total points
    cc50L1: 2, // 2nd in 50cc Liga 1
    cc100: 2, // 2nd in 100cc
    cc150: 3, // 3rd in 150cc
    cc50L4: 3, // 3rd in 50cc Liga 4
  },
  {
    id: "dk",
    name: "D.K.",
    teamKey: "team_genesis",
    wins: 1, // 1 + 0 + 0 + 0 = 1 total win
    points: 13, // 13 + 0 + 0 + 0 = 13 total points (only participated in 50cc L1)
    cc50L1: 3, // 3rd in 50cc Liga 1
    cc100: 0, // Did not participate
    cc150: 0, // Did not participate
    cc50L4: 0, // Did not participate
  },
  {
    id: "mario",
    name: "Mario",
    teamKey: "team_genesis",
    wins: 0, // 0 + 0 + 0 + 0 = 0 total wins
    points: 10, // 0 + 0 + 4 + 6 = 10 total points
    cc50L1: 0, // Did not participate
    cc100: 0, // Did not participate
    cc150: 4, // 4th in 150cc
    cc50L4: 4, // 4th in 50cc Liga 4
  },
  {
    id: "bowser",
    name: "Bowser",
    teamKey: "team_fernando",
    wins: 0, // No individual wins
    points: 0, // No individual points
    cc50L1: 0, // Did not participate individually
    cc100: 0, // Did not participate individually
    cc150: 0, // Did not participate individually
    cc50L4: 0, // Did not participate individually
  },
  {
    id: "wario",
    name: "Wario",
    teamKey: "team_benizio",
    wins: 0, // No individual wins
    points: 0, // No individual points
    cc50L1: 0, // Did not participate individually
    cc100: 0, // Did not participate individually
    cc150: 0, // Did not participate individually
    cc50L4: 0, // Did not participate individually
  },
  {
    id: "toad",
    name: "Toad",
    teamKey: "team_jeremias",
    wins: 0, // No individual wins
    points: 0, // No individual points
    cc50L1: 0, // Did not participate individually
    cc100: 0, // Did not participate individually
    cc150: 0, // Did not participate individually
    cc50L4: 0, // Did not participate individually
  },
]
