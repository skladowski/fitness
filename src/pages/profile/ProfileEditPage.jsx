import "./ProfileEditPage.css";
import { Header } from "../../components/Header/Header";
import { PhysicalMetricsEditForm } from "../../components/PhysicalMetricsEditForm/PhysicalMetricsEditForm";
import { PersonalInfoEditForm } from "../../components/PersonalInfoEditForm/PersonalInfoEditForm";
import { ProfileEditHeaderActions } from "../../components/Header/ProfileEditHeaderActions";
export function ProfileEditPage() {
  return (
    <div>
      <Header
        title={"Редактирование профиля"}
        subtitle={"Изменения вступят в силу сразу после сохранения"}
      >
        <ProfileEditHeaderActions />
      </Header>
      <div className="content">
        <div className="page-grid">
          <PersonalInfoEditForm />
          <PhysicalMetricsEditForm />
        </div>
      </div>
    </div>
  );
}
