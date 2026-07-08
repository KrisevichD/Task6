import { Line, LineChart, XAxis } from "recharts"

import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import {
    ChartContainer,
    type ChartConfig
} from "@/components/ui/chart"
import type { IDrugApprovalRates } from "@/types/dashboard"

const chartConfig = {
    day: {
        label: "day",
        color: "sky-100",
    },
} satisfies ChartConfig

interface DrugApprovalChartProps {
    data: IDrugApprovalRates
}

export default function DrugApprovalChart({ data }: DrugApprovalChartProps) {
    const firstTick = data.data[0].day;
    const lastTick = data.data[data.data.length - 1].day;
    return (
        <Card className="flex flex-col gap-0 justify-between">
            <CardHeader>
                <CardTitle className="flex justify-between gap-1">
                    {data.title}
                    <Badge variant={'percentage'}>{data.changePercentage}%</Badge>
                    <div>{data.totalValue.toString().replace(/(?!^)(?=\d{3}$)/g, ',')}</div>
                </CardTitle>
                <CardDescription>{data.period}</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
                <ChartContainer config={chartConfig} className="w-full">
                    <LineChart
                        accessibilityLayer
                        data={data.data}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <XAxis
                            dataKey="day"
                            tickLine={false}
                            axisLine={true}
                            ticks={[firstTick, lastTick]}
                            tickMargin={8}
                            interval={0}
                            minTickGap={0}
                            tick={(props) => {
                                const { x, y, payload } = props;
                                const isFirst = payload.value === firstTick;

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
                        <Line
                            dataKey="previousValue"
                            strokeWidth={2}
                            type={'linear'}
                            dot={false}
                            stroke="var(--color-chart-bg)"
                        />
                        <Line
                            dataKey="value"
                            strokeWidth={2}
                            type={'linear'}
                            dot={false}
                            stroke="var(--color-primary)"
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

