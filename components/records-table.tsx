"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trophy, Medal, Star } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export default function RecordsTable() {
  const { t } = useLanguage()

  return (
    <Tabs defaultValue="overall">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="overall">General</TabsTrigger>
        <TabsTrigger value="50cc">50cc</TabsTrigger>
        <TabsTrigger value="100cc">100cc</TabsTrigger>
        <TabsTrigger value="150cc">150cc</TabsTrigger>
      </TabsList>
      <TabsContent value="overall" className="pt-4">
        <OverallRecords />
      </TabsContent>
      <TabsContent value="50cc" className="pt-4">
        <RecordsByCc cc="50cc" />
      </TabsContent>
      <TabsContent value="100cc" className="pt-4">
        <RecordsByCc cc="100cc" />
      </TabsContent>
      <TabsContent value="150cc" className="pt-4">
        <RecordsByCc cc="150cc" />
      </TabsContent>
    </Tabs>
  )
}

function OverallRecords() {
  const { t } = useLanguage()

  return (
    <div className="rounded-md border overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{t("team")}</TableHead>
            <TableHead>{t("racers")}</TableHead>
            <TableHead className="text-center">{t("wins")}</TableHead>
            <TableHead className="text-center">{t("points")}</TableHead>
            <TableHead className="text-center">{t("podiums")}</TableHead>
            <TableHead className="text-center">Ligas Ganadas</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {overallRecords.map((record) => (
            <TableRow key={record.teamKey} className="hover:bg-muted/50">
              <TableCell className="font-medium">{t(record.teamKey)}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-background z-10">
                      <Image
                        src={`/placeholder.svg?height=32&width=32`}
                        alt={record.racers[0]}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-background">
                      <Image
                        src={`/placeholder.svg?height=32&width=32`}
                        alt={record.racers[1]}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <span>{record.racers.join(" & ")}</span>
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Trophy className="h-4 w-4 text-yellow-500" />
                  {record.wins}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Star className="h-4 w-4 text-green-500" />
                  {record.points}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Medal className="h-4 w-4 text-blue-500" />
                  {record.podiums}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Trophy className="h-4 w-4 text-purple-500" />
                  {record.leagueWins}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

function RecordsByCc({ cc }: { cc: string }) {
  const { t } = useLanguage()

  // Get the appropriate records based on CC class
  const records = cc === "50cc" ? ccRecords.cc50 : cc === "100cc" ? ccRecords.cc100 : ccRecords.cc150

  return (
    <div className="rounded-md border overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{t("team")}</TableHead>
            <TableHead>{t("racers")}</TableHead>
            <TableHead className="text-center">{t("wins")}</TableHead>
            <TableHead className="text-center">{t("points")}</TableHead>
            <TableHead className="text-center">{t("podiums")}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map((record) => (
            <TableRow key={record.teamKey} className="hover:bg-muted/50">
              <TableCell className="font-medium">{t(record.teamKey)}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-background z-10">
                      <Image
                        src={`/placeholder.svg?height=32&width=32`}
                        alt={record.racers[0]}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-background">
                      <Image
                        src={`/placeholder.svg?height=32&width=32`}
                        alt={record.racers[1]}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <span>{record.racers.join(" & ")}</span>
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Trophy className="h-4 w-4 text-yellow-500" />
                  {record.wins}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Star className="h-4 w-4 text-green-500" />
                  {record.points}
                </div>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center gap-1">
                  <Medal className="h-4 w-4 text-blue-500" />
                  {record.podiums}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

// Overall records across all leagues
const overallRecords = [
  {
    teamKey: "team_fernando",
    racers: ["Peach", "Bowser"],
    wins: 31, // 9 + 10 + 6 + 6
    points: 144, // 27 + 49 + 34 + 34
    podiums: 58, // 9 + 18 + 15 + 16
    leagueWins: 3, // Won 50cc L1, 100cc, 50cc L4
  },
  {
    teamKey: "team_benizio",
    racers: ["Yoshi", "Wario"],
    wins: 24, // 1 + 6 + 9 + 8
    points: 116, // 7 + 37 + 39 + 33
    podiums: 42, // 2 + 10 + 16 + 14
    leagueWins: 1, // Won 150cc
  },
  {
    teamKey: "team_jeremias",
    racers: ["Luigi", "Toad"],
    wins: 8, // 0 + 5 + 1 + 2
    points: 101, // 19 + 40 + 19 + 23
    podiums: 50, // 8 + 14 + 13 + 15
    leagueWins: 0,
  },
  {
    teamKey: "team_genesis",
    racers: ["Mario", "D.K."],
    wins: 1, // 1 + 0 + 0 + 0
    points: 23, // 13 + 0 + 4 + 6
    podiums: 10, // 3 + 0 + 4 + 3
    leagueWins: 0,
  },
]

// Records by CC class (combining both 50cc leagues for 50cc stats)
const ccRecords = {
  cc50: [
    {
      teamKey: "team_fernando",
      racers: ["Peach", "Bowser"],
      wins: 15, // 9 (L1) + 6 (L4)
      points: 61, // 27 (L1) + 34 (L4)
      podiums: 25, // 9 (L1) + 16 (L4)
    },
    {
      teamKey: "team_benizio",
      racers: ["Yoshi", "Wario"],
      wins: 9, // 1 (L1) + 8 (L4)
      points: 40, // 7 (L1) + 33 (L4)
      podiums: 16, // 2 (L1) + 14 (L4)
    },
    {
      teamKey: "team_jeremias",
      racers: ["Luigi", "Toad"],
      wins: 2, // 0 (L1) + 2 (L4)
      points: 42, // 19 (L1) + 23 (L4)
      podiums: 23, // 8 (L1) + 15 (L4)
    },
    {
      teamKey: "team_genesis",
      racers: ["Mario", "D.K."],
      wins: 1, // 1 (L1) + 0 (L4)
      points: 19, // 13 (L1) + 6 (L4)
      podiums: 6, // 3 (L1) + 3 (L4)
    },
  ],
  cc100: [
    {
      teamKey: "team_fernando",
      racers: ["Peach", "Bowser"],
      wins: 10,
      points: 49,
      podiums: 18,
    },
    {
      teamKey: "team_jeremias",
      racers: ["Luigi", "Toad"],
      wins: 5,
      points: 40,
      podiums: 14,
    },
    {
      teamKey: "team_benizio",
      racers: ["Yoshi", "Wario"],
      wins: 6,
      points: 37,
      podiums: 10,
    },
    {
      teamKey: "team_genesis",
      racers: ["Mario", "D.K."],
      wins: 0,
      points: 0,
      podiums: 0,
    },
  ],
  cc150: [
    {
      teamKey: "team_benizio",
      racers: ["Yoshi", "Wario"],
      wins: 9,
      points: 39,
      podiums: 16,
    },
    {
      teamKey: "team_fernando",
      racers: ["Peach", "Bowser"],
      wins: 6,
      points: 34,
      podiums: 15,
    },
    {
      teamKey: "team_jeremias",
      racers: ["Luigi", "Toad"],
      wins: 1,
      points: 19,
      podiums: 13,
    },
    {
      teamKey: "team_genesis",
      racers: ["Mario", "D.K."],
      wins: 0,
      points: 4,
      podiums: 4,
    },
  ],
}
