import React from "react";
import { useQuery } from "@apollo/client";

import PetList from "../components/PetList";
import PetForm from "../components/PetForm";

import { QUERY_SEARCH_PETS } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_SEARCH_PETS);
  const pets = data?.pets || [];

  // // if logged in, set this to true
  // const loggedIn = Auth.loggedIn();
  
  return (
    // <Header />
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          <PetForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PetList
              pets={pets}
              title="I wanna new pet...."
            />
          )}
        </div>
      </div>
    </main>
    // <Footer />
  );
};

export default Home;
