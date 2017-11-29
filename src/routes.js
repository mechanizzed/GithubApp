import { StackNavigator } from 'react-navigation';

import Repositories from 'pages/repositories';

const Routes = StackNavigator({
  Repositories: { screen: Repositories },
});

export default Routes;
