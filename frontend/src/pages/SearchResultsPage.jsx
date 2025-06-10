import React from "react";
import { useSearchParams } from "react-router-dom";
import MasonryLayout from "../components/MasonryLayout/MasonryLayout";
import Pin from "../components/Pin/Pin";


function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  // --- NEW ---
  // State to hold the fetched pins
  const [pins, setPins] = useState([]);
  // State to know when we are loading data
  const [loading, setLoading] = useState(false);
  // State to hold any errors
  const [error, setError] = useState(null);

  // useEffect hook to fetch data when the component loads or the query changes
  useEffect(() => {
    // We only fetch if there is a query
    if (query) {
      const fetchPins = async () => {
        setLoading(true); // Start loading
        setError(null); // Clear previous errors
        try {
          // Fetch data from our backend search endpoint
          const response = await fetch(
            `http://localhost:4000/api/pins/search?query=${query}`
          );
          if (!response.ok) {
            throw new Error("Something went wrong with the search!");
          }
          const data = await response.json();
          setPins(data); // Store the fetched pins in state
        } catch (err) {
          setError(err.message); // Store any error message
        } finally {
          setLoading(false); // Stop loading, regardless of success or error
        }
      };

      fetchPins();
    }
  }, [query]); // This effect runs again whenever the 'query' changes

  // --- RENDER LOGIC ---
  if (loading) {
    return <div>Loading...</div>; // We'll replace this with skeletons next!
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <div>
      <h1>Search Results for: "{query}"</h1>
      {pins.length > 0 ? (
        <MasonryLayout>
          {pins.map((pin) => (
            <Pin key={pin.id} pin={pin} />
          ))}
        </MasonryLayout>
      ) : (
        <p>No results found for "{query}". Try a different search!</p>
      )}
    </div>
  );
}

export default SearchResultsPage;