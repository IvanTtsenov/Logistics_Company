import Navbar from '../components/Navbar.jsx';
import Icon from '../components/Icon.jsx';
import '../css/home.css';

// Публична начална страница: няма регистрация, вход, JWT или демо пратки.
// Съдържанието обяснява реалните услуги от университетското задание.
function Home({ user, onNavigate, onLogout }) {
    return (
        <div className="public-site">
            <Navbar user={user} onNavigate={onNavigate} onLogout={onLogout}/>

            <main>
                <section className="hero-section">
                    <div className="hero-inner">
                        <div className="hero-copy">
                            <div className="section-eyebrow"><span className="eyebrow-line"/> ВАШИТЕ ПРАТКИ, НА ЕДНО МЯСТО</div>
                            <h1>Доставките са<br/><span>по-лесни с LOGIS.</span></h1>
                            <p className="hero-description">Изпращайте и получавайте пратки до офис или до адрес. Следете всичко от един удобен профил — бързо, ясно и организирано.</p>
                            <div className="hero-buttons">
                                <button className="button-primary" type="button" onClick={() => onNavigate(user ? '/dashboard' : '/register')}>
                                    {user ? 'Към моя профил' : 'Създай профил'} <Icon name="arrowRight" size={19}/>
                                </button>
                                <button className="button-outline" type="button" onClick={() => onNavigate(user ? '/dashboard' : '/login')}>
                                    {user ? 'Моите данни' : 'Вече имаш профил?'} <Icon name="chevron" size={18}/>
                                </button>
                            </div>
                            <div className="hero-trust"><span><Icon name="checkCircle" size={17}/> Доставка до офис</span><span><Icon name="checkCircle" size={17}/> Доставка до адрес</span></div>
                        </div>

                        <div className="hero-art" aria-label="Илюстрация на етапите при доставка на пратка">
                            <div className="art-orbit art-orbit-one"/><div className="art-orbit art-orbit-two"/>
                            <div className="floating-corner floating-corner-top"><Icon name="pin" size={16}/> Офис или адрес</div>
                            <div className="parcel-illustration"><div className="parcel-illustration-inner"><Icon name="package" size={82}/></div></div>
                            <div className="art-status-card">
                                <div className="art-status-top"><span className="status-live-dot"/> ПРОЦЕС НА ДОСТАВКА</div>
                                <div className="art-route-steps">
                                    <span className="art-step finished"><Icon name="check" size={15}/></span><i className="art-connector finished"/>
                                    <span className="art-step current"><Icon name="truck" size={20}/></span><i className="art-connector"/>
                                    <span className="art-step"><Icon name="package" size={18}/></span>
                                </div>
                                <div className="art-route-labels"><span>Регистрирана</span><span>В доставка</span><span>Получена</span></div>
                            </div>
                            <div className="floating-corner floating-corner-bottom"><Icon name="shield" size={16}/> Сигурно проследяване</div>
                        </div>
                    </div>
                </section>

                <section className="services-section" id="services">
                    <div className="section-head"><div><div className="section-kicker">НАШИТЕ УСЛУГИ</div><h2>Изберете удобния начин за доставка.</h2><p>Една система, два лесни начина да получите пратката си.</p></div></div>
                    <div className="service-grid">
                        <article className="service-card"><div className="service-icon office-icon"><Icon name="building" size={27}/></div><h3>Доставка до офис</h3><p>Получете пратката си от избран офис на логистичната компания. Това е по-икономичният вариант.</p><span className="service-note"><Icon name="check" size={16}/> По-ниска цена</span></article>
                        <article className="service-card"><div className="service-icon address-icon"><Icon name="pin" size={27}/></div><h3>Доставка до адрес</h3><p>Изберете точен адрес за доставка, за да получите пратката директно на удобно за вас място.</p><span className="service-note"><Icon name="check" size={16}/> Максимално удобство</span></article>
                        <article className="service-card"><div className="service-icon tracking-icon"><Icon name="package" size={27}/></div><h3>Пратки във вашия профил</h3><p>След вход виждате пратките, които сте изпратили, получили или очаквате. Информацията е само за вас.</p><span className="service-note"><Icon name="check" size={16}/> Личен достъп</span></article>
                    </div>
                </section>

                <section className="steps-section" id="how-it-works"><div className="steps-copy"><div className="section-kicker">КАК РАБОТИ</div><h2>От изпращането<br/>до получаването.</h2><p>LOGIS подрежда информацията за пратките, за да знаете какво се случва на всеки етап.</p><button type="button" className="inline-link" onClick={() => onNavigate(user ? '/dashboard' : '/register')}>{user ? 'Виж профила си' : 'Започни с регистрация'} <Icon name="arrowRight" size={18}/></button></div><div className="steps-list"><div className="process-step"><span>01</span><div><h3>Регистрация</h3><p>Създавате собствен клиентски профил с имейл и парола.</p></div></div><div className="process-step"><span>02</span><div><h3>Приемане на пратката</h3><p>Служител регистрира изпращането и начина на доставка.</p></div></div><div className="process-step"><span>03</span><div><h3>Получаване и проследяване</h3><p>Виждате статуса на вашите пратки след вход в системата.</p></div></div></div></section>

                <section className="bottom-cta"><div><span>ГОТОВИ ЛИ СТЕ?</span><h2>Всичко започва с един профил.</h2><p>Създайте акаунт или влезте, ако вече имате такъв.</p></div><button type="button" className="button-primary button-primary-light" onClick={() => onNavigate(user ? '/dashboard' : '/register')}>{user ? 'Моят профил' : 'Регистрация'} <Icon name="arrowRight" size={18}/></button></section>
            </main>

            <footer className="site-footer"><div className="footer-inner"><span><strong>LOGIS.</strong> Логистична компания</span><span>Учебен уеб проект • HTML · CSS · JavaScript · React</span></div></footer>
        </div>
    );
}

export default Home;
