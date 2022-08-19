// import { useFetchApi } from "hooks/useFetchApi";
// import { useQuery } from "react-query";
// import { homeApi } from "./services";

import HomeCenter from "components/HomeCenter";
import { withRouter } from "react-router-dom";

function Home() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const { data } = useQuery('notification-detail', () => useFetchApi(homeApi.getHome()), {
    // });

    return (
        <div className="min-h-screen w-[500px] max-w-full mx-auto">
            <HomeCenter />
        </div>
    );
}

export default withRouter(Home);
