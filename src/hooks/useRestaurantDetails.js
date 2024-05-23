import { useEffect, useState } from "react";

const useFetchRestaurantDetails = () => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch("/api/challenge/venue/9");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRestaurantDetails(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data", error);
        setError(error.message);
        setLoading(false);
      }
    };
    fetchDetails();
  }, []);

  return { restaurantDetails, error, loading };
};

export default useFetchRestaurantDetails;
