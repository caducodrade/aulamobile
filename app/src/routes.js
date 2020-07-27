import { createAppContainer, createSwitchNavigator } from '@react-navigator/native';

import Login from './pages/Login';
import Marca from './pages/Marca';
import Modelos from './pages/Modelos';
import User from './pages/User';
import Veiculo from './src/pages/Veiculo';

export default Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Index,
        Marca,
        Modelo,
        User,
        Veiculo
    })
);
