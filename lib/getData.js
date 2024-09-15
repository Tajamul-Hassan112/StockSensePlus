
export async function getData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Network response was not ok. Status: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data || (Array.isArray(data) && data.length === 0)) {
      console.warn(`No data found at ${url}`);
    } else {
      console.log('Fetched data from', url, ':', data);
    }

    return data;
  } catch (error) {
    console.error('Error fetching data from', url, ':', error.message);
    return null; // or return [] if you prefer, but null can be more explicit for missing data
  }
}
