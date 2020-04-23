import React from 'react';
import ReactDOM from 'react-dom'
import { ItemsList } from '../src/containers/ItemsList'
import { AddItem } from '../src/components/AddItem'



const App = () => {
  return (
    <React.Fragment>
      <AddPlan />
      <ItemsList />
    </React.Fragment>
  )
}






ReactDOM.render(
  <App />,
  document.getElementById('root')
)
export default App;
