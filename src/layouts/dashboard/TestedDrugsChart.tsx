import { Bar, BarChart } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    type ChartConfig
} from "@/components/ui/chart"

export const description = "A stacked bar chart with a legend"
export const iframeHeight = "600px"
export const containerClassName =
    "[&>div]:w-full [&>div]:max-w-md flex items-center justify-center min-h-svh"

const chartData = [
    { date: "2024-07-15", running: 50, swimming: 100 },
    { date: "2024-07-16", running: 60, swimming: 100 },
    { date: "2024-07-17", running: 10, swimming: 100 },
    { date: "2024-07-18", running: 50, swimming: 100 },
    { date: "2024-07-19", running: 80, swimming: 100 },
    { date: "2024-07-20", running: 20, swimming: 100 },
]

const chartConfig = {
    running: {
        label: "Running",
        color: "var(--chart-1)",
    },
    swimming: {
        label: "Swimming",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig

export default function TestedDrugsChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Tooltip - Line Indicator</CardTitle>
                <CardDescription>Tooltip with line indicator.</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
                <ChartContainer config={chartConfig} className="w-25.5 h-18.75">
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                    >
                        <Bar
                            dataKey="running"
                            stackId="a"
                            fill="var(--color-running)"
                            radius={4}
                            background={true}
                            barSize={4}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

