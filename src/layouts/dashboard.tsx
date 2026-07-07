import Title from "@/components/common/Title";
import DrugApprovalChart from "./dashboard/DrugApprovalChart";
import MainChart from "./dashboard/MainChart";
import NumberOfPeopleChart from "./dashboard/NumberOfPeopleChart";
import TestedDrugsChart from "./dashboard/TestedDrugsChart";
import TestingProcessChart from "./dashboard/TestingProcessChart";


const Dashboard = () => {
    return (
        <div>
            <Title
                title="Testing Dashboard"
                subtitle="Uncover insights into your testing processes."
            />
            <div className="grid grid-cols-2">
                <MainChart />
                <div className="grid grid-cols-2 grid-rows-2">
                    <TestedDrugsChart />
                    <DrugApprovalChart />
                    <TestingProcessChart />
                    <NumberOfPeopleChart />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
