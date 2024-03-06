import { NextPageWithLayout } from "@/app/interface/home-page.interface";
import DashboardLayout from "@/app/layout/dashboard-layout";
import DashboardPage from "@/app/page-modules/dashboard";

const Dashboard: NextPageWithLayout = () => {
  return <DashboardPage />;
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};