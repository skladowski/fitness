import { PersonalInfo } from "../../components/PersonalInfo/PersonalInfo";
import { Header } from "../../components/Header/Header";
import { ProfileHeaderActions } from "../../components/Header/ProfileHeaderActions";
import { PhysicalMetricsCard } from "../../components/PhysicalInfo/PhysicalMetricsCard";
export function ProfilePage() {
  return (
    <div>
      <Header title={"Редактирование Профиля"}>
        <ProfileHeaderActions />
      </Header>
      <div className="content">
        <div className="page-grid">
          <PersonalInfo></PersonalInfo>
          <PhysicalMetricsCard></PhysicalMetricsCard>
        </div>
      </div>
    </div>
  );
}
