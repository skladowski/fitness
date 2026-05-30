import { statsData } from '../../mocks/StatsData.jsx';
import { StatCard } from '../../components/StatCard.jsx';

export function DashboardPage() {
  return ( 
      <>
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
            {statsData.map((item) => (
              <StatCard key={item.id} {...item} />
            ))}
          </div>

          <div className="wide-row">
            <div className="card">
              <div className="card-header">
                <span className="card-title">Последние тренировки</span>
                <span className="chip" style={{ color: 'var(--accent2)', borderColor: 'rgba(108,99,255,0.3)' }}>Все →</span>
              </div>
              
              <div className="workout-item">
                <div className="wo-icon" style={{ background: 'rgba(108,99,255,0.12)' }}>🏃</div>
                <div className="wo-info">
                  <div className="wo-name">Утренняя пробежка</div>
                  <div className="wo-sub">5.4 км · ср. пульс 142 уд/мин</div>
                </div>
                <div className="wo-right">
                  <div className="wo-cal" style={{ color: '#fb923c' }}>320 ккал</div>
                  <div className="wo-dur">32:14</div>
                </div>
              </div>

              <div className="workout-item">
                <div className="wo-icon" style={{ background: 'rgba(34,211,168,0.1)' }}>🏋️</div>
                <div className="wo-info">
                  <div className="wo-name">Силовая тренировка</div>
                  <div className="wo-sub">Верхняя часть тела · 8 упражнений</div>
                </div>
                <div className="wo-right">
                  <div className="wo-cal" style={{ color: '#fb923c' }}>185 ккал</div>
                  <div className="wo-dur">48:00</div>
                </div>
              </div>

              <div className="workout-item">
                <div className="wo-icon" style={{ background: 'rgba(56,189,248,0.1)' }}>🚴</div>
                <div className="wo-info">
                  <div className="wo-name">Велоезда</div>
                  <div className="wo-sub">18.2 км · 210 м набор высоты</div>
                </div>
                <div className="wo-right">
                  <div className="wo-cal" style={{ color: '#fb923c' }}>410 ккал</div>
                  <div className="wo-dur">1:02:30</div>
                </div>
              </div>

              <div className="workout-item">
                <div className="wo-icon" style={{ background: 'rgba(251,191,36,0.1)' }}>🧘</div>
                <div className="wo-info">
                  <div className="wo-name">Йога</div>
                  <div className="wo-sub">Растяжка и восстановление</div>
                </div>
                <div className="wo-right">
                  <div className="wo-cal" style={{ color: '#fb923c' }}>85 ккал</div>
                  <div className="wo-dur">30:00</div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <span className="card-title">Питание</span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                  <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '18px', fontWeight: '700' }}>1840</span>
                  <span style={{ fontSize: '12px', color: 'var(--text3)' }}>/ 2400 ккал</span>
                </div>
              </div>
              
              <div className="macro-row">
                <div className="macro-item">
                  <div className="macro-top">
                    <span className="macro-name">Белки</span>
                    <span className="macro-nums">118г / 160г</span>
                  </div>
                  <div className="macro-track">
                    <div className="macro-fill" style={{ width: '73%', background: 'var(--blue)' }}></div>
                  </div>
                </div>

                <div className="macro-item">
                  <div className="macro-top">
                    <span className="macro-name">Углеводы</span>
                    <span className="macro-nums">220г / 280г</span>
                  </div>
                  <div className="macro-track">
                    <div className="macro-fill" style={{ width: '78%', background: 'var(--amber)' }}></div>
                  </div>
                </div>

                <div className="macro-item">
                  <div className="macro-top">
                    <span className="macro-name">Жиры</span>
                    <span className="macro-nums">56г / 80г</span>
                  </div>
                  <div className="macro-track">
                    <div className="macro-fill" style={{ width: '70%', background: 'var(--green)' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}