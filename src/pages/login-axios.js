useEffect(() => {
  setIsLoading(true);
  axios
    .get("http://localhost:5173/api/v1/borgo")
    .then((response) => {
      const x = response.data;
      // const data = response.data.json();
      console.log(x);
      // setBorgo(response.json());
      setIsLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setIsLoading(false);
    });
}, []);
