import "./ProfilePage.css";
import { Header } from "../../components/Header/Header";
import { ProfileHeaderActions } from "../../components/Header/ProfileHeaderActions";
import { PersonalMetricsCard } from "../../components/PersonalMetricsCard/PersonalMetricsCard";
import { PhysicalMetricsCard } from "../../components/PhysicalMetricsCard/PhysicalMetricsCard";
import { ProfileHero } from "../../components/ProfileHero/ProfileHero";
export function ProfilePage() {
  return (
    <div>
      <Header title={"Профиль"} subtitle={"Вторник, 27 мая 2026 · Неделя 22"}>
        <ProfileHeaderActions />
      </Header>

      <div className="content">
        <ProfileHero />
        <div className="page-grid">
          <PersonalMetricsCard />
          <PhysicalMetricsCard />
        </div>
      </div>
    </div>
  );
}
