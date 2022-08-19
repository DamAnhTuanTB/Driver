
import { Button } from "@setel/web-ui";
import { useGlobalContext } from "lib/globalContext";
import { useHistory, withRouter } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function HomeCenter() {
    const history = useHistory();
    const { copy } = useGlobalContext()
    const { t } = useTranslation();

    return (
        <div className="flex flex-col" data-testid="welcome-test">
            {copy}
            <Button className="items-stretch" onClick={() => history.push('/next-step')}>{t('next')}</Button>
        </div>);
}

export default withRouter(HomeCenter);