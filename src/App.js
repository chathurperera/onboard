import React from 'react'
import Header from './components/Header'
import '../src/App.css';
import Search from './components/Search';
export default function App() {
  return (
    <div>
    <Header />
    <div className='main-content'>
    <Search />  
    </div>
    </div>
  )
}
