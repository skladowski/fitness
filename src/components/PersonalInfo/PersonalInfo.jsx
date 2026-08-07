import "./PersonalInfo.css";
export function PersonalInfo() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title-wrap">
          <div className="card-icon card-icon-custom">
            <svg
              width="15"
              height="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>

          <div>
            <div className="card-title">Личная информация</div>
            <div className="card-sub">
              Основные данные, контакты и предпочтения
            </div>
          </div>
        </div>
      </div>
      <div className="form-grid">
        <div className="form-field full">
          <label className="form-label">Спортивные предпочтения</label>
          <div className="pref-chips" id="prefChips">
            <button className="pref-chip on" data-pref="running">
              🏃 Бег
            </button>
            <button className="pref-chip on" data-pref="cycling">
              🚴 Велоспорт
            </button>
            <button className="pref-chip" data-pref="strength">
              🏋️ Силовые
            </button>
            <button className="pref-chip" data-pref="yoga">
              🧘 Йога
            </button>
            <button className="pref-chip" data-pref="swimming">
              🏊 Плавание
            </button>
          </div>
        </div>
        <div className="form-field">
          <label className="form-label">Имя</label>
          <input
            className="form-input"
            id="fieldFirstName"
            type="text"
            defaultValue="Алексей"
            placeholder="Имя"
            onInput={() => updateHero()}
          />
        </div>
        <div className="form-field">
          <label className="form-label">Фамилия</label>
          <input
            className="form-input"
            id="fieldLastName"
            type="text"
            defaultValue="Иванов"
            placeholder="Фамилия"
            onInput={() => updateHero()}
          />
        </div>
        <div className="form-field">
          <label className="form-label">Дата рождения</label>
          <input
            className="form-input"
            id="fieldDob"
            type="date"
            defaultValue="1993-08-15"
            onInput={() => recalc()}
          />
        </div>
        <div className="form-field">
          <label className="form-label">Пол</label>
          <div className="sex-chips">
            <button
              className="sex-chip on"
              data-sex="male"
              onClick={() => setSex("male")}
            >
              ♂ Мужской
            </button>
            <button
              className="sex-chip"
              data-sex="female"
              onClick={() => setSex("female")}
            >
              ♀ Женский
            </button>
          </div>
        </div>
        <div className="form-divider"></div>
        <div className="form-field full">
          <label className="form-label">О себе</label>
          <textarea
            className="form-input textarea-custom"
            id="fieldBio"
            rows="3"
            placeholder="Расскажите немного о себе — цели, увлечения, спортивный бэкграунд"
            onInput={() => updateHero()}
            defaultValue="Люблю бег и велоспорт. Тренируюсь 4× в неделю, готовлюсь к первому полумарафону."
          />
        </div>

        <div className="form-divider"></div>
        <div className="form-field">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            id="fieldEmail"
            type="email"
            defaultValue="alexey@example.com"
            placeholder="email@example.com"
          />
        </div>
        <div className="form-field">
          <label className="form-label">Город</label>
          <input
            className="form-input"
            id="fieldCity"
            type="text"
            defaultValue="Москва"
            placeholder="Город"
          />
        </div>
      </div>
    </div>
  );
}
