import { Button } from '@setel/web-ui';
import { t } from 'i18next';
import { useGlobalContext } from 'lib/globalContext';
import { useHistory, withRouter } from "react-router-dom";

function NextStep() {
    const history = useHistory();
    const { copy, setCopy } = useGlobalContext()
    return (
        <div className="flex min-h-screen items-center justify-center flex-col">
            {t('template2')}: {copy}
            <div className="flex justify-center">
                <Button onClick={() => setCopy(Math.random().toString(36).replace(/[^a-z]+/g, ''))}>{t('template1')}</Button> &nbsp;
                <Button onClick={() => history.push('/')}>{t('template3')}</Button>
            </div>
        </div>);
}

export default withRouter(NextStep);