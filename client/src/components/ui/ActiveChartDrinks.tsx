"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { drink: "philtered-soul", cups: 187, fill: "var(--color-philtered-soul)" },
  { drink: "americano", cups: 200, fill: "var(--color-americano)" },
  { drink: "pike-place", cups: 190, fill: "var(--color-pike-place)" },
];

const chartConfig = {
  cups: {
    label: "Cups",
  },
  "philtered-soul": {
    label: "Philtered Soul",
    color: "hsl(var(--chart-1))",
  },
  americano: {
    label: "Americano",
    color: "hsl(var(--chart-2))",
  },
  "pike-place": {
    label: "Pike Place",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;
const ActiveChartDrinks = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Popular Drinks</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="drink"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="cups"
              strokeWidth={2}
              radius={8}
              activeIndex={0}
              activeBar={({ ...props }) => {
                return (
                  <Rectangle
                    {...props}
                    fillOpacity={0.8}
                    stroke={props.payload.fill}
                    strokeDasharray={4}
                    strokeDashoffset={4}
                  />
                );
              }}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total cups for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
};

export default ActiveChartDrinks;
