const FetchImg = (q, page, pageAmount) => {
  return fetch(
    `https://pixabay.com/api/?key=16997109-7f0e3215b93572c0bd796cdf9&q=${q}&page=${page}&image_type=photo&orientation=horizontal&per_page=${pageAmount}`
  ).then((resp) => resp.json());
};

export default FetchImg;
