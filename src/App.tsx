import React, { useEffect } from "react";
import { useQuery } from "./gqty/index";
const App = () => {
  const data = useQuery();

  const otherData = useQuery({});

  const ship = data.ship({ id: "5ea6ed2d080df4000697c901" });

  const [someDependencyData, setSomeDependencyData] = React.useState<
    {
      id: string;
      name: string;
    }[]
  >([]);

  useEffect(() => {
    // Simulate a fetch
    setTimeout(() => {
      setSomeDependencyData([
        { id: "1", name: "First" },
        { id: "2", name: "Second" },
      ]);
    }, 1000);
  }, []);

  // useEffect(() => {
  //   data.$refetch(true);
  // }, [someDependencyData]);

  return (
    <div>
      {data.$state.isLoading && <div>Loading...</div>}

      {ship?.class}

      {otherData.company?.ceo}

      {someDependencyData.map((d) => {
        // Access the customer here

        return (
          <div key={d.id}>
            {d.name}
            {ship?.class}

            {otherData.company?.ceo}
          </div>
        );
      })}

      <button onClick={async () => await data.$refetch(true)}>Refetch</button>
    </div>
  );
};

export default App;
