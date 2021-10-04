export const supportedLanguages = [
    {
        lng: "Latvian",
        short: "LV"
    },
    {
        lng: "English",
        short: "EN"
    },
    {
        lng: "Russian",
        short: "RU"
    },
]

export const languages = {
    latvian: {
        header: {
            homeLink: "Sākums",
            categoryLink: "Kategorijas",
            admLink: "#ADM",
            premiumLink: "Premium",
            registerLink: "Reģistrēties",
            loginLink: "Ieiet",
        },
        authorizedHeader: {
            searchPlaceholder: "Cilvēki, kompānijas...",
            searchBtn: "Meklēt",
            users: "Lietotāji",
            home: "Sākums",
            chat: "Čats",
            categories: "Kategorijas",
            dropdown: {
                profile: "Mans Konts",
                newJobOffer: "Jauna darba vakance",
                profileAdd: "Profila reklāma",
                premium: "Premium",
                saved: "Saglābātie",
                settings: "Iestatījumi",
                logout: "Iziet"
            }
        },
        chat: {
            lastContacts: "Pēdējie kontakti",
            searchContacts: "Meklēt kontaktu",
            deleteChat: "Dzēst saraksti",
            noChat: "Izvēlieties kontaktu ar kuru sarakstīties",
            typeHere: "Raksti šeit"
        },
        newJobOffer: {
            heading: "Izveido jaunu darba piedāvājumu",
            name: "Darba nosaukums",
            requirements: "Darbinieku prasmes un pienākumi",
            jobDescription: "Uzņēmums darbiniekiem piedāvā:",
            chooseCategory: "Izvēlies darba kategoriju",
            changeCategory: "Mainīt darba kategoriju",
            currently: "pašlaik",
            change: "Mainīt",
            choose: "Izvēlēties"
        },
        settings: {
            profile: {
                heading: "Profils",
                name: "Vārds",
                surname: "Uzvārds",
                companyName: "Kompānijas nosaukums",
                email: "E-pasts",
                jobStatus: "Darba Statuss",
                adm: "#ADM",
                employed: "Nodarbināts",
                country: "Valsts",
                city: "Pilsēta",
                closeProfile: {
                    heading: "Konta deaktivizācija",
                    question: "Kas notiks kad tu deaktivizēsi savu kontu ?",
                    answer1: "Visa konta informācija tiks dzēsta",
                    answer2: "Tu vairs nevarēsi autorizeties ar to",
                    answer3: "Visi Premium plāni tiks dzēsti, ja tādi bija.",
                    chooseReason: "Izvēlies cēloni",
                    button: "Deaktivizēt kontu"
                }
            },
            security: {
                heading: "Drošība",
                subHeading1: "Parole",
                password1: "Jauna Parole",
                password2: "Apstiprināt jauno paroli",
                passwordPlaceholder1: "Ievadi jauno paroli",
                passwordPlaceholder2: "Ievadi paroli atkārtoti",
                passwordGuide: "8 vai vairāk simbolus. Apvienojiet lielos un mazos burtus un ciparus.",
                subHeading2: "Tālruņa Verifikācija",
                recomended: "Ieteicams",
                phoneInfo: "Jūsu tālrunis nav verificēts Youth Deal. Noklikšķiniet uz \"Verificēt tagad\", lai pabeigtu tālruņa verifikāciju"
            },
            premium: {
                heading: "Premium",
                status: "Premium Statuss",
                active: "Aktīvs",
                notActive: "Neaktīvs",
                deactivate: {
                    heading: "Premium Statusa Deaktivizācija",
                    question: "Kas notiks ja deaktivizēšu savu premium statusu?",
                    answer1: "Ja neesat izmantojis Premium līdz mēneša beigām, par kuru samaksājāt, tas tiks deaktivizēts no nākamā mēneša sākuma",
                    answer2: "Vissas Premium funkcijas nebūs Tev pieejamas, un Tu nevarēsi pilnībā izbaudīt mūsu Web-aplikāciju",
                    answer3: "Mums būs ļoti skumji. Tu taču nevēlējies, lai mums būtu skumji?",
                    reason: "Es gribu deaktivizēt manu premium statusu tāpēc ka...",
                    buton: "Deaktivizēt Premium"
                }
            },
            payments: {
                heading1: "Atlikums",
                remaining: "Jūsu atlikums ir ",
                button1: "Papildināt",
                heading2: "Norēķinu metodes",
                button2: "Pievienot metodi",
                info1: "Jūs vēl neesat iestatījis nevienu norēķinu metodi.",
                info2: "Iestatiet norēķinu metodes, lai jūs uzreiz varētu pieņemt darbā, kad būsiet gatavs."
            },
            notifications: {
                heading: "Paziņojumi",
                subHeading1: "Rādīt paziņojumus par:",
                option1: "E-pasta paziņojumi",
                option2: "Web paziņojumi",
                option3: "Paziņojumi reālajā laikā",
                heading2: "Paziņojumi reālajā laikā skaņa",
                option4: "Ar skaņu",
                testSound: "Notestēt skaņu",
                testSoundButton: "Atskaņot"
            },
            save: "Saglabāt"
        },
        homePage: {
            heading1: "Sveicināts",
            subHeader1: "Katram darbiniekam vispiemērotākais amats",
            subHeader2: "Katram darba devējam vispiemērotākais darbinieks",
            button1: "Es esmu darba devējs",
            button2: "Es esmu darba ņēmējs",
            findOptions: {
                heading: "Atrodi darbu vai darbinieku ikvienā jomā:",
                popularSearches: "Populārākie Meklējumi",
                showMore: "Parādīt vēl"
            },
            findTeamMembers: {
                heading: "Atrodi labākos komandas biedrus savam projektam",
                subHeading1: "Vai vēlies atrast komandas biedrus savam projektam?",
                subHeading2: "Pievieno piedāvājumu, saņem pieteikumus un atlasi labākos!",
                buttonText: "Atrast kopā ar Youth Deal"
            },
            contacts: {
                heading: "Kontakti",
                subHeading: "Sazinies ar potenciālo daba devēju, ņēmēju vai arī komandas biedru",
                button: "Atrast Kontaktus"
            },
            adm: {
                heading: "#ADM",
                subHeading: "Ja Tu pašlaik esi aktīvā darba meklēšanā (#ADM), tad šī loma ir piemērota tieši Tev! Atzīmē to reģistrācijas laikā vai arī jebkurā brīdī profila iestatījumos",
                button: "Sākt"
            }
        },
        authorizedHomePage: {
            longtermJobs: "Ilgtermiņa",
            shorttermJobs: "Īstermiņa",
            voluntaryJobs: "Brīvprātīgie",
            leftPanel: {
                premium: "Premium (aktīvs)",
                contacts: "Kontakti",
                findContacts: "Atrodiet savus kontaktus, lai ar viņiem tērzētu",
                saved: "Saglabātie"
            },
            Right: {
                chatHeading: "Čats"
            }
        },
        profile: {
            jobSeeker: {
                birthDate: "Dzimšanas datums",
                stars: "Sakrātās zvaigznītes",
                description: "Apraksts par sevi:",
                education: "Izglītība",
                currentJob: "Esošais amats",
                previousJob: "Pēdējais amats",
                extraSkills: "Papildus prasmes",
                noEntries: "Šis lietotājs nav pabeidzis veidot savu profilu",
                save: "Saglabāt"
            },
            jobGiver: {
                homePage: "Mājas lapa",
                employeeCount: "darbinieku skaits",
                phoneNum: "numurs",
                email: "e-pasts",
                location: "atrašanās vieta",
                description: "Informācija par kompāniju",
                noDescription: "šī kompānija vēl nav uzrakstījusi informāciju",
                newJobOffer: "Izveidot jaunu darba vakanci",
                jobOffers: "Darba Piedāvājumi",
                noJobOffers: "Šai kompānijai vēl nav darba piedāvājumi"
            },
            editModal: {
                heading: "Profila rediģēšana",
                name: "Vārds:",
                surname: "Uzvārds:",
                companyName: "Kompānijas nosaukums:",
                website: "Mājas lapa:",
                employeeCount: "Darbinieku skaits:",
                phoneNum: "Telefona nummurs:",
                profession: "Profesija",
                change: "Mainīt",
                birthDate: "Dzimšanas datums:",
                country: "Valsts:",
                city: "Pilsēta:",
                isActiveJobSeeker: "Vai esat aktīvā darba meklēšanā?",
                yes: "Jā",
                no: "Nē",
                description: "Apraksts par sevi:",
                companyDescription: "Kompānijas apraksts:",
                cancel: "Atpakaļ",
                save: "Saglabāt"
            },
            none: "Nav",
            unknown1: "Nav ievadīts",
            unknown2: "Nav ievadīta",
            location: "Atrašanās vieta",
        },
        jobOffer: {
            location: "Atrašanās vieta",
            proffession: "Profesija",
            responsabilities: "Prasmes un pienākumi",
            companyOffers: "Kompānija piedāvā",
            signUp: "Pieteikties",
            signOff: "Atteikties",
            salaryBeginningFrom: "SĀKOT NO",
            salaryPerMonth: "mēnesī"
        },
        premiumPage: {
            premiumHeader: {
                jobGiver: "Darba devējs",
                jobSeeker: "Darba ņēmējs",
            },
            premiumText1: "Iegādājies mūsu Premium, lai atvieglotu darba meklēšanas procesu, iegūtu vairāk informācijas par Tevis izvēlēto amatu un gūtu palīdzību karjeras izveidē",
            premiumText2: "Esi augšpusē ar Premium!",
            premiumOptions: {
                jobGiver: {
                    option1: "Pieejama statistika, kā darba ņēmēji mijiedarbojas ar taviem sludinājumiem",
                    option2: "Advancēta meklēšana",
                    option3: "Tiešsaites videosarunas iespēja",
                    option4: "Vienlaikus var ievietot 4 vai vairāk sludinājumu",
                },
                jobSeeker: {
                    option1: "Paziņojumi par jauniem darba sludinājumiem",
                    option2: "Sīkāks algas pārskats",
                    option3: "Pieeja video pamācību materiālu bāzei",
                    option4: "Palīdzība ar CV sastādīšanu",
                    option5: "Iespējams vienlaicīgi pieteikties vairākiem darba piedāvājumiem",
                }
            }
        },
        loginPage: {
            heading: "Pieslēgties",
            email: "E-pasts",
            incorrectEmail: "Nav pareizs E-pasts!",
            password: "Parole",
            passwordLenght: "Parolei ir jābūt ne mazāk nekā 5 simboli!",
            forgotPassword: "Aizmirsi paroli?",
            login: "Ieiet",
            otherOptions: "Vai ieej ar",
            noAccount: "Nav konta?",
            register: "Reģistrēties"
        },
        registerChoose: {
            heading: "Reģistrācija",
            subHeading: "Norādi savu lomu:",
            button1: "Es esmu darba devējs ",
            button2: "Es esmu darba ņēmējs "
        },
        registerJobgiverPage: {
            header: "Uzņēmuma Reģistrācija",
            subHeader: "Tas neaizņems daudz laika",
            alreadyRegistered: "Jau esiet reģistrēts?",
            login: "Ieiet",
            companyName: "Uzņēmuma nosaukums:",
            companyEmail: "Uzņēmuma e-pasts:",
            password: "Parole:",
            privacyPolicy1: "Es piekrītu mūsu ",
            privacyPolicy2: "Privātuma Politikai",
            button: "Reģistrēties",
            otherRegisterOptions: "Vai reģistrējies ar"
        },
        registerJobseekerPage: {
            header: "Reģistrācija",
            subHeader: "Tas neaizņems daudz laika",
            alreadyRegistered: "Jau es reģistrēts?",
            login: "Ieiet",
            firstName: "Vārds:",
            lastName: "Uzvārds:",
            email: "E-pasts:",
            password: "Parole:",
            privacyPolicy1: "Es piekrītu mūsu ",
            privacyPolicy2: "Privātuma Politikai",
            button: "Reģistrēties",
            otherRegisterOptions: "Vai reģistrējies ar"
        },
        footer: {
            links: {
                begin: "Sākt",
                about: "Par Mums",
                contacts: "Kontakti",
                support: "ATBALSTS",
                needHelp: "Nepieciešama palīdzība?",
                userRules: "Lietošanas noteikumi",
                privacyPolicy: "Privātuma politika",
                socialSites: "SOCIĀLIE TĪKLI"
            },
            description: "Youth Deal ir ērtāka un inovatīvāka vide darba tirgum. Mēs sniedzam iespēju ikvienam jaunietim atrast sev piemērotu darbu un sākt veidot savu karjeru. Kā arī palīdzam ikvienam darba devējam atrast vispiemērotāko darbinieku. -Atrodi vispiemērotāko kopā ar Youth Deal."
        },
    },
    english: {
        header: {
            homeLink: "Home",
            categoryLink: "Categories",
            admLink: "#AJS",
            premiumLink: "Premium",
            registerLink: "Sign up", //pause es ustaisisu pull request ok 
            loginLink: "Ieiet",
        },
        authorizedHeader: {
            searchPlaceholder: "Cilvēki, kompānijas...",
            searchBtn: "Meklēt",
            users: "Lietotāji",
            home: "Sākums",
            chat: "Čats",
            categories: "Kategorijas",
            dropdown: {
                profile: "Mans Konts",
                newJobOffer: "Jauna darba vakance",
                profileAdd: "Profila reklāma",
                premium: "Premium",
                saved: "Saglābātie",
                settings: "Iestatījumi",
                logout: "Iziet"
            }
        },
        chat: {
            lastContacts: "Pēdējie kontakti",
            searchContacts: "Meklēt kontaktu",
            deleteChat: "Dzēst saraksti",
            noChat: "Izvēlieties kontaktu ar kuru sarakstīties",
            typeHere: "Raksti šeit"
        },
        newJobOffer: {
            heading: "Izveido jaunu darba piedāvājumu"
        },
        settings: {
            profile: {
                heading: "Profils",
                name: "Vārds",
                surname: "Uzvārds",
                companyName: "Kompānijas nosaukums",
                email: "E-pasts",
                jobStatus: "Darba Statuss",
                adm: "#ADM",
                employed: "Nodarbināts",
                country: "Valsts",
                city: "Pilsēta",
                closeProfile: {
                    heading: "Konta deaktivizācija",
                    question: "Kas notiks kad tu deaktivizēsi savu kontu ?",
                    answer1: "Visa konta informācija tiks dzēsta",
                    answer2: "Tu vairs nevarēsi autorizeties ar to",
                    answer3: "Visi Premium plāni tiks dzēsti, ja tādi bija.",
                    chooseReason: "Izvēlies cēloni",
                    button: "Deaktivizēt kontu"
                }
            },
            security: {
                heading: "Drošība",
                subHeading1: "Parole",
                password1: "Jauna Parole",
                password2: "Apstiprināt jauno paroli",
                passwordPlaceholder1: "Ievadi jauno paroli",
                passwordPlaceholder2: "Ievadi paroli atkārtoti",
                passwordGuide: "8 vai vairāk simbolus. Apvienojiet lielos un mazos burtus un ciparus.",
                subHeading2: "Tālruņa Verifikācija",
                recomended: "Ieteicams",
                phoneInfo: "Jūsu tālrunis nav verificēts Youth Deal. Noklikšķiniet uz \"Verificēt tagad\", lai pabeigtu tālruņa verifikāciju"
            },
            premium: {
                heading: "Premium",
                status: "Premium Statuss",
                active: "Aktīvs",
                notActive: "Neaktīvs",
                deactivate: {
                    heading: "Premium Statusa Deaktivizācija",
                    question: "Kas notiks ja deaktivizēšu savu premium statusu?",
                    answer1: "Ja neesat izmantojis Premium līdz mēneša beigām, par kuru samaksājāt, tas tiks deaktivizēts no nākamā mēneša sākuma",
                    answer2: "Vissas Premium funkcijas nebūs Tev pieejamas, un Tu nevarēsi pilnībā izbaudīt mūsu Web-aplikāciju",
                    answer3: "Mums būs ļoti skumji. Tu taču nevēlējies, lai mums būtu skumji?",
                    reason: "Es gribu deaktivizēt manu premium statusu tāpēc ka...",
                    buton: "Deaktivizēt Premium"
                }
            },
            payments: {
                heading1: "Atlikums",
                remaining: "Jūsu atlikums ir ",
                button1: "Papildināt",
                heading2: "Norēķinu metodes",
                button2: "Pievienot metodi",
                info1: "Jūs vēl neesat iestatījis nevienu norēķinu metodi.",
                info2: "Iestatiet norēķinu metodes, lai jūs uzreiz varētu pieņemt darbā, kad būsiet gatavs."
            },
            notifications: {
                heading: "Paziņojumi",
                subHeading1: "Rādīt paziņojumus par:",
                option1: "E-pasta paziņojumi",
                option2: "Web paziņojumi",
                option3: "Paziņojumi reālajā laikā",
                heading2: "Paziņojumi reālajā laikā skaņa",
                option4: "Ar skaņu",
                testSound: "Notestēt skaņu",
                testSoundButton: "Atskaņot"
            },
            save: "Saglabāt"
        },
        homePage: {
            heading1: "Sveicināts",
            subHeader1: "Katram darbiniekam vispiemērotākais amats",
            subHeader2: "Katram darba devējam vispiemērotākais darbinieks",
            button1: "Es esmu darba devējs",
            button2: "Es esmu darba ņēmējs",
            findOptions: {
                heading: "Atrodi darbu vai darbinieku ikvienā jomā:",
                popularSearches: "Populārākie Meklējumi",
                showMore: "Parādīt vēl"
            },
            findTeamMembers: {
                heading: "Atrodi labākos komandas biedrus savam projektam",
                subHeading1: "Vai vēlies atrast komandas biedrus savam projektam?",
                subHeading2: "Pievieno piedāvājumu, saņem pieteikumus un atlasi labākos!",
                buttonText: "Atrast kopā ar Youth Deal"
            },
            contacts: {
                heading: "Kontakti",
                subHeading: "Sazinies ar potenciālo daba devēju, ņēmēju vai arī komandas biedru",
                button: "Atrast Kontaktus"
            },
            adm: {
                heading: "#ADM",
                subHeading: "Ja Tu pašlaik esi aktīvā darba meklēšanā (#ADM), tad šī loma ir piemērota tieši Tev! Atzīmē to reģistrācijas laikā vai arī jebkurā brīdī profila iestatījumos",
                button: "Sākt"
            }
        },
        authorizedHomePage: {
            longtermJobs: "Ilgtermiņa",
            shorttermJobs: "Īstermiņa",
            voluntaryJobs: "Brīvprātīgie",
            leftPanel: {
                premium: "Premium (aktīvs)",
                contacts: "Kontakti",
                findContacts: "Atrodiet savus kontaktus, lai ar viņiem tērzētu",
                saved: "Saglabātie"
            },
            Right: {
                chatHeading: "Čats"
            }
        },
        profile: {
            jobSeeker: {
                birthDate: "Dzimšanas datums",
                stars: "Sakrātās zvaigznītes",
                description: "Apraksts par sevi:",
                education: "Izglītība",
                currentJob: "Esošais amats",
                previousJob: "Pēdējais amats",
                extraSkills: "Papildus prasmes",
                noEntries: "Šis lietotājs nav pabeidzis veidot savu profilu",
                save: "Saglabāt"
            },
            jobGiver: {
                homePage: "Mājas lapa",
                employeeCount: "darbinieku skaits",
                phoneNum: "numurs",
                email: "e-pasts",
                location: "atrašanās vieta",
                description: "Informācija par kompāniju",
                noDescription: "šī kompānija vēl nav uzrakstījusi informāciju",
                newJobOffer: "Izveidot jaunu darba vakanci",
                jobOffers: "Darba Piedāvājumi",
                noJobOffers: "Šai kompānijai vēl nav darba piedāvājumi"
            },
            editModal: {
                heading: "Profila rediģēšana",
                name: "Vārds:",
                surname: "Uzvārds:",
                companyName: "Kompānijas nosaukums:",
                website: "Mājas lapa:",
                employeeCount: "Darbinieku skaits:",
                phoneNum: "Telefona nummurs:",
                profession: "Profesija",
                change: "Mainīt",
                birthDate: "Dzimšanas datums:",
                country: "Valsts:",
                city: "Pilsēta:",
                isActiveJobSeeker: "Vai esat aktīvā darba meklēšanā?",
                yes: "Jā",
                no: "Nē",
                description: "Apraksts par sevi:",
                companyDescription: "Kompānijas apraksts:",
                cancel: "Atpakaļ",
                save: "Saglabāt"
            },
            none: "Nav",
            unknown1: "Nav ievadīts",
            unknown2: "Nav ievadīta",
            location: "Atrašanās vieta",
        },
        jobOffer: {
            location: "Atrašanās vieta",
            proffession: "Profesija",
            responsabilities: "Prasmes un pienākumi",
            companyOffers: "Kompānija piedāvā",
            signUp: "Pieteikties",
            signOff: "Atteikties",
            salaryBeginningFrom: "SĀKOT NO",
            salaryPerMonth: "mēnesī"
        },
        premiumPage: {
            premiumHeader: {
                jobGiver: "Darba devējs",
                jobSeeker: "Darba ņēmējs",
            },
            premiumText1: "Iegādājies mūsu Premium, lai atvieglotu darba meklēšanas procesu, iegūtu vairāk informācijas par Tevis izvēlēto amatu un gūtu palīdzību karjeras izveidē",
            premiumText2: "Esi augšpusē ar Premium!",
            premiumOptions: {
                jobGiver: {
                    option1: "Pieejama statistika, kā darba ņēmēji mijiedarbojas ar taviem sludinājumiem",
                    option2: "Advancēta meklēšana",
                    option3: "Tiešsaites videosarunas iespēja",
                    option4: "Vienlaikus var ievietot 4 vai vairāk sludinājumu",
                },
                jobSeeker: {
                    option1: "Paziņojumi par jauniem darba sludinājumiem",
                    option2: "Sīkāks algas pārskats",
                    option3: "Pieeja video pamācību materiālu bāzei",
                    option4: "Palīdzība ar CV sastādīšanu",
                    option5: "Iespējams vienlaicīgi pieteikties vairākiem darba piedāvājumiem",
                }
            }
        },
        loginPage: {
            heading: "Pieslēgties",
            email: "E-pasts",
            incorrectEmail: "Nav pareizs E-pasts!",
            password: "Parole",
            passwordLenght: "Parolei ir jābūt ne mazāk nekā 5 simboli!",
            forgotPassword: "Aizmirsi paroli?",
            login: "Ieiet",
            otherOptions: "Vai ieej ar",
            noAccount: "Nav konta?",
            register: "Reģistrēties"
        },
        registerChoose: {
            heading: "Reģistrācija",
            subHeading: "Norādi savu lomu:",
            button1: "Es esmu darba devējs ",
            button2: "Es esmu darba ņēmējs "
        },
        registerJobgiverPage: {
            header: "Uzņēmuma Reģistrācija",
            subHeader: "Tas neaizņems daudz laika",
            alreadyRegistered: "Jau esiet reģistrēts?",
            login: "Ieiet",
            companyName: "Uzņēmuma nosaukums:",
            companyEmail: "Uzņēmuma e-pasts:",
            password: "Parole:",
            privacyPolicy1: "Es piekrītu mūsu ",
            privacyPolicy2: "Privātuma Politikai",
            button: "Reģistrēties",
            otherRegisterOptions: "Vai reģistrējies ar"
        },
        registerJobseekerPage: {
            header: "Reģistrācija",
            subHeader: "Tas neaizņems daudz laika",
            alreadyRegistered: "Jau es reģistrēts?",
            login: "Ieiet",
            firstName: "Vārds:",
            lastName: "Uzvārds:",
            email: "E-pasts:",
            password: "Parole:",
            privacyPolicy1: "Es piekrītu mūsu ",
            privacyPolicy2: "Privātuma Politikai",
            button: "Reģistrēties",
            otherRegisterOptions: "Vai reģistrējies ar"
        },
        footer: {
            links: {
                begin: "Sākt",
                about: "Par Mums",
                contacts: "Kontakti",
                support: "ATBALSTS",
                needHelp: "Nepieciešama palīdzība?",
                userRules: "Lietošanas noteikumi",
                privacyPolicy: "Privātuma politika",
                socialSites: "SOCIĀLIE TĪKLI"
            },
            description: "Youth Deal ir ērtāka un inovatīvāka vide darba tirgum. Mēs sniedzam iespēju ikvienam jaunietim atrast sev piemērotu darbu un sākt veidot savu karjeru. Kā arī palīdzam ikvienam darba devējam atrast vispiemērotāko darbinieku. -Atrodi vispiemērotāko kopā ar Youth Deal."
        },
    }
};