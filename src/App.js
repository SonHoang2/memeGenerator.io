import Header from './component/Header'
import Card from './component/Card'
import data from './data'
import './App.css'

export default function App() {
  const cards = data.map(item => (
    <Card 
      key={item.id}
      {...item}
    />
  ))
  return (
    <div>
      <Header />
      <div className="container">
        {cards}
      </div>
    </div>
  )
}