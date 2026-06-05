import './DateStrip.css'
export function DateStrip() {
  return (
    <div className="date-strip">
      <div className="date-chip"><span>ПН</span><span>21</span></div>
      <div className="date-chip"><span>ВТ</span><span>22</span></div>
      <div className="date-chip"><span>СР</span><span>23</span></div>
      <div className="date-chip"><span>ЧТ</span><span>24</span></div>
      <div className="date-chip"><span>ПТ</span><span>25</span></div>
      <div className="date-chip"><span>СБ</span><span>26</span></div>
      <div className="date-chip today"><span>ВС</span><span>27</span></div>
    </div>
  );
}