import { Dropdown } from 'react-bootstrap'
import React, { useState } from 'react'
import usa from '../../assets/us.svg'
import sa from '../../assets/sa.svg'
import './languagedropdown.css'

const languages = [
    {
        code: 'en',
        name: 'English',
        flag: usa
    },
    {
        code: 'ar',
        name: 'العربية',
        flag: sa
    }
];

const LanguageDropdown = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

    const filteredLanguages = languages.filter(language => language.code !== selectedLanguage.code);

    return (
        <Dropdown>
            <Dropdown.Toggle variant="transparent" id="dropdown-basic" className='d-flex align-items-center'>
                <img src={selectedLanguage.flag} alt={selectedLanguage.name} className=" lang-img" />
                {selectedLanguage.name}
                <i className="fa-solid fa-arrow-down-long ms-2 " style={{fontSize:"14px"}}></i>
                
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {filteredLanguages.map(language => (
                    <Dropdown.Item key={language.code} onClick={() => setSelectedLanguage(language)} className='d-flex align-items-center'>
                        <img src={language.flag} alt={language.name} className="mr-2 lang-img" />
                        {language.name}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default LanguageDropdown
