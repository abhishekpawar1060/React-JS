
import './App.css'
import Card from './component/Card'
function App() {

  let arr = [1,2,3,4,6,6]
  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3'>Vite with Tailwind</h1>
      <Card username='abhishek' myArr={arr}/>
      <Card username='Json' post='Staff Engg.'/>
      <Card/>
    </>
  )
}

export default App
