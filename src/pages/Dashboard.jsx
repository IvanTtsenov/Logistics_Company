import Navbar from '../components/Navbar.jsx';
import Icon from '../components/Icon.jsx';
import '../css/home.css';

const ROLE_LABELS = { ADMIN: 'Администратор', EMPLOYEE: 'Служител', CLIENT: 'Клиент' };

function Dashboard({ user, onLogout, onNavigate }) {
    return (
        <div className="public-site">
            <Navbar user={user} dashboard onLogout={onLogout} onNavigate={onNavigate}/>
            <main className="account-main">
                <div className="account-header"><div><div className="section-eyebrow"><span className="eyebrow-line"/> МОЯТ ПРОФИЛ</div><h1>Добре дошли в LOGIS.</h1><p>Влязохте успешно. Данните по-долу са получени от сървъра.</p></div><span className="account-online"><span/> Активна сесия</span></div>
                <div className="account-grid"><section className="account-card"><div className="account-card-icon"><Icon name="user" size={26}/></div><h2>Моят акаунт</h2><div className="account-detail"><span>Имейл</span><strong>{user.email}</strong></div><div className="account-detail"><span>Роля</span><strong>{ROLE_LABELS[user.role] || user.role}</strong></div><div className="account-detail"><span>Потребителски номер</span><strong>#{user.id}</strong></div></section><section className="account-card account-note"><div className="account-card-icon"><Icon name="package" size={26}/></div><h2>Моите пратки</h2><p>Тук ще се показват пратките, които сте изпратили или очаквате, когато backend екипът добави API за пратки.</p><div className="account-placeholder"><Icon name="clock" size={19}/> Предстои свързване с API за пратки</div></section></div>
                <button type="button" className="account-logout" onClick={onLogout}><Icon name="logout" size={18}/> Изход от профила</button>
            </main>
        </div>
    );
}

export default Dashboard;
