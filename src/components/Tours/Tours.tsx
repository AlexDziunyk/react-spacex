import { useQuery, gql } from "@apollo/client";

const Tours = () => {

  interface IGetRockets {
    id: string;
    name: string;
    description: string;
  }

  const GET_ROCKETS = gql`
    query GetRockets {
      rockets {
        id
        name
        description
      }
    }
  `;

  const {loading, error, data} = useQuery(GET_ROCKETS);


  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error...</p>;

  console.log(data);

  return (
    <div>
      {/* {data.rockets.map(({id, name, description}: IGetRockets))} */}
    </div>
  )
}

export default Tours