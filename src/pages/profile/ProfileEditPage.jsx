import "./ProfileEditPage.css";
import { Header } from "../../components/Header/Header";
import { PhysicalMetricsEditForm } from "../../components/PhysicalMetricsEditForm/PhysicalMetricsEditForm";
import { PersonalInfoEditForm } from "../../components/PersonalInfoEditForm/PersonalInfoEditForm";
import { ProfileEditHeaderActions } from "../../components/Header/ProfileEditHeaderActions";
import { useContext, useState } from "react";
import { profileContext } from "../../context/ProfileContext";
export function ProfileEditPage() {
  const { profile, setProfile } = useContext(profileContext);
  const [draftProfile, setDraftProfile] = useState(profile);
  function handlePersonalInfoChange(type, newValue) {
    setDraftProfile({
      ...draftProfile,
      personalInfo: {
        ...draftProfile.personalInfo,
        [type]: newValue,
      },
    });
  }
  function handleBodyMetricsChange(type, newValue) {
    setDraftProfile({
      ...draftProfile,
      bodyMetrics: {
        ...draftProfile.bodyMetrics,
        [type]: newValue,
      },
    });
  }

  function handleSave() {
    setProfile(draftProfile);
    localStorage.setItem("profile", JSON.stringify(draftProfile));
  }

  function handleReset() {
    setDraftProfile(profile);
  }

  return (
    <div>
      <Header
        title={"Редактирование профиля"}
        subtitle={"Изменения вступят в силу сразу после сохранения"}
      >
        <ProfileEditHeaderActions
          handleReset={handleReset}
          handleSave={handleSave}
        />
      </Header>
      <div className="content">
        <div className="page-grid">
          <PersonalInfoEditForm
            personalInfo={draftProfile.personalInfo}
            onChange={handlePersonalInfoChange}
          />
          <PhysicalMetricsEditForm
            bodyMetrics={draftProfile.bodyMetrics}
            onChange={handleBodyMetricsChange}
            personalInfo={draftProfile.personalInfo}
          />
        </div>
      </div>
    </div>
  );
}
