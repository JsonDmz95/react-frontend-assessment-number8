import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PropertiesListing, PropertyDetails } from "@/pages";
import { Property, PublicRoutes } from "@/models";

import { Header } from "@/components";
import { useEffect } from "react";
import { useFetch } from "@/hooks";
import { useStore } from "@/store";

// const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const { data, error, loading } = useFetch<Property[]>(
    "/api/LA/listings.json"
  );

  const setPropertiesList = useStore((state) => state.updatePropertiesList);

  useEffect(() => {
    if (data) {
      setPropertiesList(data);
    }
  }, [data, setPropertiesList]);

  if (error) {
    console.error(error);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* Redirect Home to PropertiesListing */}
          <Route
            path="/"
            element={<Navigate to={PublicRoutes.PROPERTIES_LIST} />}
          />

          {/* PropertiesListing Page  */}
          <Route
            path={PublicRoutes.PROPERTIES_LIST}
            element={
              <>
                {/* TODO: Add Page Tile */}
                <PropertiesListing loading={loading} error={error}/>
              </>
            }
          />

          {/* Redirect to PropertiesLIsting if the user try to navigate to /property/ and don't provide the property id  */}
          <Route
            path={PublicRoutes.PROPERTY_DETAILS}
            element={<Navigate to={`/${PublicRoutes.PROPERTIES_LIST}`} />}
          />

          {/* PropertyDetails Page  */}
          <Route
            path={`${PublicRoutes.PROPERTY_DETAILS}/:id`}
            element={<PropertyDetails />}
          />

          {/* Send everything else to 404 */}
          <Route
            path="*"
            element={
              <>
                {/* <PageTitle title="404 - Error" /> */}
                NOT FOUND
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
