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
  { location: "philz", visits: 187, fill: "var(--color-philz)" },
  { location: "starbucks", visits: 200, fill: "var(--color-starbucks)" },
  { location: "firefox", visits: 190, fill: "var(--color-firefox)" },
];

const chartConfig = {
  visits: {
    label: "Visits",
  },
  philz: {
    label: "Philz",
    color: "hsl(var(--chart-1))",
  },
  starbucks: {
    label: "Starbucks",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Homeboy",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;
const ActiveChartVisits = () => {
  return (
    <Card className="rounded-md">
      <CardHeader>
        <CardTitle>Cafe Visits</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="location"
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
              dataKey="visits"
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
          Showing total visits for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
};

export default ActiveChartVisits;
