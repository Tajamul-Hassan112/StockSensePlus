

import toast from "react-hot-toast";



export async function makePostRequest(setLoading, endpoint, data, entity, reset) {
  setLoading(true);
  try {
    const response = await fetch(`http://localhost:3000/api/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (response.ok) {
      toast.success(`${entity} successfully added`);
      reset();
    } else {
      toast.error(result.message || `Failed to add ${entity}`);
    }
  } catch (error) {
    console.error('Request error:', error);
    toast.error(`Failed to add ${entity}`);
  } finally {
    setLoading(false);
  }
}
