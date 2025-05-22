"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Trophy, Medal, Star } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export default function RecordsTable() {
  const { t } = useLanguage()

  return (
    <Tabs defaultValue="50cc">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="50cc">50cc</TabsTrigger>
        <TabsTrigger value="100cc">100cc</TabsTrigger>
        <TabsTrigger value="150cc">150cc</TabsTrigger>
      </TabsList>
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

// Records by CC class
const ccRecords = {
  cc50: [
    {
      teamKey: "team_fernando",
      racers: ["Peach", "Bowser"],
      wins: 9,
      points: 27,
      podiums: 9,
    },
    {
      teamKey: "team_jeremias",
      racers: ["Luigi", "Toad"],
      wins: 0,
      points: 19,
      podiums: 11,
    },
    {
      teamKey: "team_genesis",
      racers: ["Mario", "D.K."],
      wins: 1,
      points: 13,
      podiums: 9,
    },
    {
      teamKey: "team_benizio",
      racers: ["Yoshi", "Wario"],
      wins: 1,
      points: 7,
      podiums: 4,
    },
  ],
  cc100: [
    {
      teamKey: "team_fernando",
      racers: ["Peach", "Bowser"],
      wins: 10,
      points: 49,
      podiums: 21,
    },
    {
      teamKey: "team_jeremias",
      racers: ["Luigi", "Toad"],
      wins: 5,
      points: 40,
      podiums: 21,
    },
    {
      teamKey: "team_benizio",
      racers: ["Yoshi", "Wario"],
      wins: 6,
      points: 37,
      podiums: 21,
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
