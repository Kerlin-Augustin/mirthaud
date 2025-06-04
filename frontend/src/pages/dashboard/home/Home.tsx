import { useAuth } from "../../../context/AuthContext";
import axios from 'axios';
import { useState } from "react";
import DisclaimerModal from "../../../components/modal/DisclaimerModal";

const Home = () => {

  const { accessToken } = useAuth()
  const [disclaimer, setDisclaimer] = useState<boolean>(false)

  const getDisclaimer = async () => {
    const res = await axios.get(
      '/api/disclaimer', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
    })
    
    setDisclaimer(res.data.hasAcceptedDisclaimer)
    console.log(disclaimer)
  }

  getDisclaimer()

  return (
    <>
      <div>
        Home
      </div>
      {disclaimer && 
        <DisclaimerModal />
      }
    </>
  )
}

export default Home