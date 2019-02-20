const serialize = obj =>
  Object.entries(obj)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");

export const fetchData = (baseUrl, params) => {
  const url = `${baseUrl}?${serialize(params)}`;

  console.log(`Preparing to fetch data from ${url}`);

  return fetch(url)
    .then(r => r.json())
    .then(({ results }) => results)
    .catch(err => {
      console.log(`Error fetching data from ${url}`, err);
    });
};

export const getDesiredFields = ({ name, email, login, picture }) => ({
  name,
  email,
  id: login.uuid,
  avatar: picture.medium
});
