"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"
import MainData from "./MainData"

export const description = "A multiple line chart"

const chartData = [

    { "day": "01 May", "mainLine": 5, "dottedLine": 18 },
    { "day": "02 May", "mainLine": 13, "dottedLine": 18 },
    { "day": "03 May", "mainLine": 21, "dottedLine": 11 },
    { "day": "04 May", "mainLine": 21, "dottedLine": 5 },
    { "day": "05 May", "mainLine": 21, "dottedLine": 5 },
    { "day": "06 May", "mainLine": 17, "dottedLine": 5 },
    { "day": "07 May", "mainLine": 15, "dottedLine": 5 },
    { "day": "08 May", "mainLine": 15, "dottedLine": 5 },
    { "day": "09 May", "mainLine": 15, "dottedLine": 5 },
    { "day": "10 May", "mainLine": 15, "dottedLine": 5 },
    { "day": "11 May", "mainLine": 15, "dottedLine": 5 },
    { "day": "12 May", "mainLine": 35, "dottedLine": 5 },
    { "day": "13 May", "mainLine": 35, "dottedLine": 5 },
    { "day": "14 May", "mainLine": 35, "dottedLine": 5 },
    { "day": "15 May", "mainLine": 48, "dottedLine": 5 },
    { "day": "16 May", "mainLine": 60, "dottedLine": 17 },
    { "day": "17 May", "mainLine": 71, "dottedLine": 30 },
    { "day": "18 May", "mainLine": 82, "dottedLine": 42 },
    { "day": "19 May", "mainLine": 93, "dottedLine": 42 },
    { "day": "20 May", "mainLine": 74, "dottedLine": 42 },
    { "day": "21 May", "mainLine": 56, "dottedLine": 55 },
    { "day": "22 May", "mainLine": 38, "dottedLine": 67 },
    { "day": "23 May", "mainLine": 38, "dottedLine": 79 },
    { "day": "24 May", "mainLine": 38, "dottedLine": 30 },
    { "day": "25 May", "mainLine": 27, "dottedLine": 35 },
    { "day": "26 May", "mainLine": 15, "dottedLine": 42 },
    { "day": "27 May", "mainLine": 15, "dottedLine": 49 },
    { "day": "28 May", "mainLine": 21, "dottedLine": 54 },
    { "day": "29 May", "mainLine": 21, "dottedLine": 48 },
    { "day": "30 May", "mainLine": 21, "dottedLine": 42 }

]

const chartConfig = {
    dottedLine: {
        label: "Non-tested",
        color: "var(--chart-2)",
    },
    mainLine: {
        label: "tested",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig

export default function MainChart() {
    return (
        <Card className="bg-transparent border-0">
            <MainData />
            <CardHeader>
                <CardTitle>
                    Total tests
                </CardTitle>
                <CardDescription>
                    Testing results received in all areas
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid horizontal={false} />
                        <XAxis
                            dataKey="day"
                            tickLine={false}
                            axisLine={false}
                            type="category"
                            tickMargin={8}
                            ticks={['01 May', '15 May', '30 May']}
                            interval={0}
                            minTickGap={0}
                            tick={(props) => {
                                const { x, y, payload } = props;
                                const isFirst = payload.value === '01 May';

                                return (
                                    <g transform={`translate(${x},${y})`}>
                                        <text
                                            x={0}
                                            y={0}
                                            dy={16}
                                            className="fill-muted-foreground text-xs"
                                            textAnchor={isFirst ? "start" : "end"}
                                        >
                                            {payload.value}
                                        </text>
                                    </g>
                                );
                            }}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <Line
                            dataKey="dottedLine"
                            type="linear"
                            stroke="var(--color-chart-2)"
                            strokeWidth={2}
                            dot={false}
                        />
                        <Line
                            dataKey="mainLine"
                            type="linear"
                            stroke="var(--color-primary)"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
