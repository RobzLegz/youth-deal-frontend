import React, { useState } from 'react'
import { filterCompanysByName } from '../../../logic/company/find/filter';
import { getUserByName } from '../../../logic/user/find/filter';
import CloseIcon from "../../../assets/svg/close.svg";
import CompanyIcon from "../../../assets/svg/company.svg";

function SearchBar() {
    const [search, setSearch] = useState("");
    const [searched, setSearched] = useState(false);
    const [searchResults] = useState([]);

    const searchDB = (e) => {
        e.preventDefault();
        getUserByName(search, searchResults);
        filterCompanysByName(search, searchResults);
        setSearched(true);
    }

    return (
        <form className="header__search">
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cilvēki, kompānijas..."
            />
            <button type="submit" onClick={(e) => searchDB(e)}>Meklēt</button>

            {searched && (
                <div className="header__search__results">
                    {searchResults.length > 0 ? (
                        <ul className="header__search__results__all">
                            <div className="header__search__results__all__header">
                                <p>Aizvērt</p>
                                <img src={CloseIcon} alt="close" onClick={() => setSearched(false)} />
                            </div>

                            {searchResults.map((result, i) => {
                                if(result.is_employer){
                                    return (
                                        <li key={i}>
                                            <img src={result.profile.logo ? result.profile.logo : CompanyIcon} alt={result.profile.company_name} />
                                            <h4>{result.profile.company_name}</h4>
                                        </li>
                                    )
                                }else{
                                    return(
                                        <li key={i}>
                                            <img src={result.profile.photo} alt={result.first_name} />
                                            <h4>{result.first_name} {result.last_name}</h4>
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                    ) : (
                        <div className="header__search__results__noResults">
                            <div className="header__search__results__noResults__header">
                                <p>Aizvērt</p>
                                <img src={CloseIcon} alt="close" onClick={() => setSearched(false)} />
                            </div>
                            <p>Neatradām nevienu kompāniju vai lietotāju</p>
                        </div>
                    )}
                </div>
            )}
        </form>
    )
}

export default SearchBar