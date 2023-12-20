import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, loading, error] = 
  apiHandle("https://fakestoreapi.com/products");
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  
  useEffect(() => {
   
    const filtered = data.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [data, searchTerm]);

  if (loading) {
    return (
      <div
        id="loading-overlay"
        class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-60"
      >
        <svg
          class="animate-spin h-8 w-8 text-white mr-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>

        <span class="text-white text-3xl font-bold">Loading...</span>
      </div>
    );
  }
  if (error) {
    return <h1>Something went wrong !</h1>;
  }
  return (
    <>
      <h1 className="text-5xl font-bold text-center">API HANDLE LIKE PRO</h1>
      <h1 className="font-bold mt-3 text-center">
        Number of Data there is {data.length}{" "}
      </h1>
      <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded-md"
        />

     <div className="flex justify-center">
     </div>
      <div className="flex flex-wrap justify-center">
        {filteredData.map((item) => (
          <div className="p-2">
            <div
            key={item.id}
              className="max-w-sm bg-white border
       border-gray-200 rounded-lg shadow dark:bg-gray-800
        dark:border-gray-700 h-full flex flex-col"
            >
              <a href="#">
                <img
                  className="rounded-t-lg h-full object-cover" // Set a fixed height for the image
                  src={item.image}
                  alt=""
                />
              </a>
              <div className="flex-1 p-5 flex flex-col">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                </a>
                <p className="mb-3 flex-1 font-normal text-gray-700 dark:text-gray-400 overflow-hidden">
                  {item.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      ;
    </>
  );
}

function apiHandle(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);

        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await axios.get(url);
        console.log(response.data);

        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, []);

  return [data, loading, error];
}

export default App;
