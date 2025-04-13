import {useTranslation} from 'react-i18next';
import {useState} from 'react';

function LanguageSelector() {
    const {i18n} = useTranslation();
    const [selectedLang, setSelectedLang] = useState(i18n.language);

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
        setSelectedLang(lang);
    };

    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {selectedLang === 'en' ? 'English' : 'தமிழ்'}
            </button>
            <ul className="dropdown-menu">
                <li>
                    <button className="dropdown-item" onClick={() => handleLanguageChange('en')}>English</button>
                </li>
                <li>
                    <button className="dropdown-item" onClick={() => handleLanguageChange('ta')}>தமிழ்</button>
                </li>
            </ul>
        </div>
    );
}

export default LanguageSelector;