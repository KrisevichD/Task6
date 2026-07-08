import { getDashboardDataOptions } from "@/app/api/queries";
import Title from "@/components/common/Title";
import { useQuery } from "@tanstack/react-query";
import DrugApprovalChart from "./DrugApprovalChart";
import MainChart from "./MainChart";
import NumberOfPeopleChart from "./NumberOfPeopleChart";
import TestedDrugsChart from "./TestedDrugsChart";
import TestingProcessChart from "./TestingProcessChart";


const Dashboard = () => {
    const { data, isLoading } = useQuery(getDashboardDataOptions());

    if (isLoading) return <>loading...</>

    return (
        <div>
            <Title
                title="Testing Dashboard"
                subtitle="Uncover insights into your testing processes."
            />
            {
                data
                &&
                <div className="lg:grid lg:grid-cols-2 gap-6 flex flex-col">
                    <MainChart />
                    <div className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-6">
                        <TestedDrugsChart data={data.totalTestedDrugs} />
                        <DrugApprovalChart data={data.drugApprovalRates} />
                        <TestingProcessChart data={data.testingProcess} />
                        <NumberOfPeopleChart data={data.numberOfPeopleTested} />
                    </div>
                </div>
            }
        </div>
    );
}

export default Dashboard;
