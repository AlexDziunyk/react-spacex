import { useQuery } from "@apollo/client";
import { GetRocketsQuery } from "../../__generated__/graphql";
import ToursSlider from "../ToursSlider/ToursSlider";
import { gql } from "../../__generated__";
import './style.css'

interface ToursProps {
  scrollRef: React.Ref<HTMLDivElement>;
}

const Tours = ({scrollRef}: ToursProps) => {

  const GET_ROCKETS = gql(/* GraphQL */ `
    query GetRockets {
      rockets {
        id
        name
        description
      }
    }
  `);

  const {loading, error, data} = useQuery<GetRocketsQuery>(GET_ROCKETS);


  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error...</p>;


  return (
    <div ref={scrollRef} className="tours">
      <div className="tours__inner">
        <ToursSlider rockets={data?.rockets}/>
      </div>
    </div>
  )
}

export default Tours