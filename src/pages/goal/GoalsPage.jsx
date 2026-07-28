import "./GoalsPage.css";
import { Goals } from "../../mocks/GoalsData";
import { SummaryCard } from "../../components/Summary/SummaryBar";
import { Header } from "../../components/Header/Header";
import { GoalsHeaderActions } from "../../components/Header/GoalsHeaderActions";
export function GoalsPage() {
  return (
    <>
      <Header
        title={"Цели"}
        subtitle={
          "Настройте дневные и недельные показатели — они появятся на дашборде"
        }
      >
        <GoalsHeaderActions></GoalsHeaderActions>
      </Header>
      <SummaryCard goals={Goals}></SummaryCard>
    </>
  );
}
