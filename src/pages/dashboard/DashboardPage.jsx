import { Sidebar } from '../../components/Sidebar.jsx'

export function DashboardPage() {
  return ( <>
     <Sidebar />
    <div className="main">
    <div className="header">
      <div className="header-left">
        <h1>Привет, Илья 👋</h1>
        <p>Вторник, 27 мая 2026 · Неделя 22</p>
      </div>
      <div className="header-right">
        <div className="badge-dot"></div>
        <button className="btn">
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
          Статистика
        </button>
        <button className="btn btn-primary">
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
          Начать тренировку
        </button>
      </div>
    </div>

    <div className="content">
      
      <div className="date-strip">
        <div className="date-chip"><span>ПН</span><span>21</span></div>
        <div className="date-chip"><span>ВТ</span><span>22</span></div>
        <div className="date-chip"><span>СР</span><span>23</span></div>
        <div className="date-chip"><span>ЧТ</span><span>24</span></div>
        <div className="date-chip"><span>ПТ</span><span>25</span></div>
        <div className="date-chip"><span>СБ</span><span>26</span></div>
        <div className="date-chip today"><span>ВС</span><span>27</span></div>
      </div>

      <div className="stats-grid">
        
        <div className="stat-card steps">
          <div className="stat-icon">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 4v4l3 3-3 5-4-2-2 4"/><circle cx="13" cy="3" r="1" fill="currentColor" stroke="none"/></svg>
          </div>
          <div className="stat-value">8 432</div>
          <div className="stat-label">Шагов сегодня</div>
          <div className="stat-progress-track">
            <div className="stat-progress-fill" style={{ width: '84%' }}></div>
          </div>
          <div className="stat-meta">84% от цели · <span>+12% vs вчера</span></div>
        </div>

        <div className="stat-card cal">
          <div className="stat-icon">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10c0-2-3-6-3-6s-1 4-4 4-3-8-3-8z"/></svg>
          </div>
          <div className="stat-value">542</div>
          <div className="stat-label">Ккал сожжено</div>
          <div className="stat-progress-track">
            <div className="stat-progress-fill" style="width: 54%"></div>
          </div>
          <div className="stat-meta">54% от цели · <span>активные зоны: 32 мин</span></div>
        </div>

        <div className="stat-card active-min">
          <div className="stat-icon">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </div>
          <div className="stat-value">42 / 60</div>
          <div className="stat-label">Активных минут</div>
          <div className="stat-progress-track">
            <div className="stat-progress-fill" style="width: 70%"></div>
          </div>
          <div className="stat-meta">Осталось: <span>18 мин до цели</span></div>
        </div>

        <div className="stat-card sleep">
          <div className="stat-icon">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
          </div>
          <div className="stat-value">7:24</div>
          <div className="stat-label">Часов сна</div>
          <div className="stat-progress-track">
            <div className="stat-progress-fill" style="width: 92%"></div>
          </div>
          <div className="stat-meta">Качество: <span>отличное · глубокий: 2:10</span></div>
        </div>

      </div>

      <div className="wide-row">
        
        <div className="card">
          <div className="card-header">
            <span className="card-title">Последние тренировки</span>
            <span className="chip" style="color:var(--accent2);border-color:rgba(108,99,255,0.3)">Все →</span>
          </div>
          
          <div className="workout-item">
            <div className="wo-icon" style="background:rgba(108,99,255,0.12)">🏃</div>
            <div className="wo-info">
              <div className="wo-name">Утренняя пробежка</div>
              <div className="wo-sub">5.4 км · ср. пульс 142 уд/мин</div>
            </div>
            <div className="wo-right">
              <div className="wo-cal" style="color:#fb923c">320 ккал</div>
              <div className="wo-dur">32:14</div>
            </div>
          </div>

          <div className="workout-item">
            <div className="wo-icon" style="background:rgba(34,211,168,0.1)">🏋️</div>
            <div className="wo-info">
              <div className="wo-name">Силовая тренировка</div>
              <div className="wo-sub">Верхняя часть тела · 8 упражнений</div>
            </div>
            <div className="wo-right">
              <div className="wo-cal" style="color:#fb923c">185 ккал</div>
              <div className="wo-dur">48:00</div>
            </div>
          </div>

          <div className="workout-item">
            <div className="wo-icon" style="background:rgba(56,189,248,0.1)">🚴</div>
            <div className="wo-info">
              <div className="wo-name">Велоезда</div>
              <div className="wo-sub">18.2 км · 210 м набор высоты</div>
            </div>
            <div className="wo-right">
              <div className="wo-cal" style="color:#fb923c">410 ккал</div>
              <div className="wo-dur">1:02:30</div>
            </div>
          </div>

          <div className="workout-item">
            <div className="wo-icon" style="background:rgba(251,191,36,0.1)">🧘</div>
            <div className="wo-info">
              <div className="wo-name">Йога</div>
              <div className="wo-sub">Растяжка и восстановление</div>
            </div>
            <div className="wo-right">
              <div className="wo-cal" style="color:#fb923c">85 ккал</div>
              <div className="wo-dur">30:00</div>
            </div>
          </div>

        </div>

        <div className="card">
          <div className="card-header">
            <span className="card-title">Питание</span>
            <div style="display:flex;align-items:baseline;gap:4px">
              <span style="font-family:'Syne',sans-serif;font-size:18px;font-weight:700">1840</span>
              <span style="font-size:12px;color:var(--text3)">/ 2400 ккал</span>
            </div>
          </div>
          
          <div className="macro-row">
            <div className="macro-item">
              <div className="macro-top">
                <span className="macro-name">Белки</span>
                <span className="macro-nums">118г / 160г</span>
              </div>
              <div className="macro-track">
                <div className="macro-fill" style="width: 73%; background: var(--blue)"></div>
              </div>
            </div>

            <div className="macro-item">
              <div className="macro-top">
                <span className="macro-name">Углеводы</span>
                <span className="macro-nums">220г / 280г</span>
              </div>
              <div className="macro-track">
                <div className="macro-fill" style="width: 78%; background: var(--amber)"></div>
              </div>
            </div>

            <div className="macro-item">
              <div className="macro-top">
                <span className="macro-name">Жиры</span>
                <span className="macro-nums">56г / 80г</span>
              </div>
              <div className="macro-track">
                <div className="macro-fill" style="width: 70%; background: var(--green)"></div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</>
  );
}