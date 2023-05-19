import { useSelector } from 'react-redux'
import Filter from '../common/Bar/Filter/Filter'
import Games from './Games/Games'

const Home = () => {
  return (
    <>
      <Filter />
      <Games />
    </>
  )
}

export default Home
