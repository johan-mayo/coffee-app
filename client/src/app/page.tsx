import AreaChartInteractive from "@/components/ui/AreaChartInteractive";
import ModeToggle from "@/components/theme-toggle-button";
import ActiveChartVisits from "@/components/ui/ActiveChartVisits";
import ActiveChartDrinks from "@/components/ui/ActiveChartDrinks";
import RadialChart from "@/components/ui/RadialChart";

const Home: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-center p-5 ">
        <div className="md:flex md:space-x-5 md:space-y-0 space-y-2 text-center justify-center">
          <h1 className="text-2xl font-bold">Coffee App</h1>
          <ModeToggle />
        </div>
      </div>

      <div className="flex items-center justify-center border-y-2 border-y-slate-100">
        <div className="grid gap-2 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 p-10">
          <div className="w-full lg:w-96 h-auto flex items-center justify-center order-1 lg:order-1 xl:order-1">
            <ActiveChartVisits />
          </div>
          <div className="w-full lg:w-96 h-auto flex items-center justify-center order-2 lg:order-3 lg:col-span-3 lg:justify-self-center xl:order-2 xl:col-auto xl:justify-self-center">
            <RadialChart />
          </div>
          <div className="w-full lg:w-96 h-auto flex items-center justify-center order-3 lg:order-2 xl:order-3">
            <ActiveChartDrinks />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-10 space-x-10">
        <div className="w-full">
          <AreaChartInteractive />
        </div>
      </div>
    </div>
  );
};

export default Home;
