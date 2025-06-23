// SearchResultsPage.jsx
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./SearchResultsPage.module.css"; // Import the CSS Module

function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      setResults([]);

      if (query) {
        // --- Dummy Data Simulation (replace with your API call) ---
        await new Promise(resolve => setTimeout(resolve, 500));

        const dummySearchResults = [
          {
            id: 1,
            title: `Delicious ${query} Recipes`,
            description: `Find easy and quick recipes for ${query} that your family will love.`,
            imageUrl: `https://via.placeholder.com/60?text=${query.substring(0, 3)}1`
          },
          {
            id: 2,
            title: `Top ${query} Fashion Trends`,
            description: `Explore the latest fashion trends related to ${query} for this season.`,
            imageUrl: `https://via.placeholder.com/60?text=${query.substring(0, 3)}2`
          },
          {
            id: 3,
            title: `Guide to ${query} Decor`,
            description: `Ideas and tips for incorporating ${query} into your home decor.`,
            imageUrl: `https://via.placeholder.com/60?text=${query.substring(0, 3)}3`
          },
          {
            id: 4,
            title: `Healthy ${query} Meal Prep`,
            description: `Plan your meals with these healthy ${query} meal prep ideas.`,
            imageUrl: `https://placehold.co/60x60?text=${query.substring(0, 3)}`
          }
        ].filter(
          item =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase())
        );

        setResults(dummySearchResults);
      }
      setLoading(false);
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div className={styles.resultsContainer}>
      <h2 className={styles.resultsHeader}>
        {query
          ? `Search Results for: "${query}"`
          : "Please enter a search query."}
      </h2>

      {loading ? (
        <p className={styles.loadingMessage}>Loading search results...</p>
      ) : results.length > 0 ? (
        <ul className={styles.resultsList}>
          {results.map(item => (
            <li className={styles.resultItem} key={item.id}>
              {item.imageUrl && <img src={item.imageUrl} alt={item.title} />}
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        query && (
          <p className={styles.noResultsMessage}>
            No results found for "{query}".
          </p>
        )
      )}
    </div>
  );
}

export default SearchResultsPage;
