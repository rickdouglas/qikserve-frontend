import { useEffect, useState } from "react";

const useFetchMenuDetails = () => {
  const [menuDetails, setMenuDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch("/api/challenge/menu");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMenuDetails(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data", error);
        setError(error.message);
        setLoading(false);
      }
    };
    fetchDetails();
  }, []);

  return { menuDetails, error, loading };
};

export default useFetchMenuDetails;
