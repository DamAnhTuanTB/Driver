import './app.css';
import '@setel/web-ui/dist/styles.css';
import { createBrowserHistory } from 'history';
import { Route, Router, Switch, BrowserRouter } from 'react-router-dom';
import { MyGlobalContext } from 'lib/globalContext';
import { useState } from 'react';
// import NextStep from 'pages/NextStep/next-step';
import Home from 'pages/HomePage/Home';
// import { useTranslation } from 'react-i18next';
// import { DropdownSelect } from '@setel/web-ui';

export const history = createBrowserHistory();

export const App = () => {
    // const { i18n } = useTranslation();
    // const [value, setValue] = useState('en');
    // const ChangeLanguage = (e: any) => {
    //     i18n.changeLanguage(e);
    //     setValue(e)
    // }

    // const options = [
    //     {
    //         label: 'English',
    //         value: 'en',
    //     },
    //     {
    //         label: 'Malaysia',
    //         value: 'my',
    //     },
    // ];
    //Global context
    const [copy, setCopy] = useState<string>(('This is base copy context'))

    return (
        <>
            {/* <div className='absolute top-5 left-3 flex space-x-4'>
                <DropdownSelect
                    value={value}
                    onChangeValue={ChangeLanguage}
                    options={options}
                />
            </div> */}
            <Router history={history}>
                <MyGlobalContext.Provider value={{ copy, setCopy }}>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            {/* <Route path="/next-step" exact component={NextStep} /> */}
                            <Route path="*">
                                <NoMatchPage />
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </MyGlobalContext.Provider>
            </Router>
        </>
    );
};

export const NoMatchPage = () => {
    return (
        <div>
            <h3>404 - Page Not Found</h3>
        </div >
    );
};

