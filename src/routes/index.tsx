import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Agradecimento from '../pages/Agradecimento'
import Landing from '../pages/Landing'

const Routes: React.FC = () => (
    <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/obrigada' exact component={Agradecimento} />
    </Switch>
)

export default Routes
