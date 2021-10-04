const { useEffect } = require('react');
const { useState } = require('react');

const useService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('./service.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return [services];
};

export default useService;
