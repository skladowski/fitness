import "./ProfilePage.css";
import { Header } from "../../components/Header/Header";
import { ProfileHeaderActions } from "../../components/Header/ProfileHeaderActions";
import { PersonalMetricsCard } from "../../components/PersonalMetricsCard/PersonalMetricsCard";
import { PhysicalMetricsCard } from "../../components/PhysicalMetricsCard/PhysicalMetricsCard";
import { ProfileHero } from "../../components/ProfileHero/ProfileHero";
import { useContext } from "react";
import { profileContext } from "../../context/ProfileContext";
export function ProfilePage() {
  const { profile } = useContext(profileContext);
  return (
    <div>
      <Header title={"Профиль"} subtitle={"Вторник, 27 мая 2026 · Неделя 22"}>
        <ProfileHeaderActions />
      </Header>

      <div className="content">
        <ProfileHero profile={profile} />
        <div className="page-grid">
          <PersonalMetricsCard personalInfo={profile.personalInfo} />
          <PhysicalMetricsCard profile={profile} />
        </div>
      </div>
    </div>
  );
}
