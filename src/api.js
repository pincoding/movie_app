const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";
// 주소
// const url = (urlName) => baseUrl + `${urlName}?language=ko-kr`;
const url = (urlName) => {
  return baseUrl + `${urlName}?language=ko-kr`;
};

const options = {
  method: "GET",
  headers: {
    //headers 정보를 저장하고 관리해주는 역할
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTBhNmQ4ZWUzNmEwMWE1OGNkOTg3Zjg1YzM1OWI5MCIsInN1YiI6IjY1ZWZmZmQ1ZmNlYzJlMDE3YTgyN2U4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A9uZhphMhaXEiH0HzpOcovZuAhWlWal6HwkVAAlW5-A",
  },

  //메서드,변수 등등 옵션안에 작성
};

export const nowPlaying = () =>
  fetch(url("movie/now_playing"), options).then((res) => res.json());
export const popular = () =>
  fetch(url("movie/popular"), options).then((res) => res.json());
export const toprated = () =>
  fetch(url("movie/top_rated"), options).then((res) => res.json());
export const upcoming = () =>
  fetch(url("movie/upcoming"), options).then((res) => res.json());

export const moiveDetail = (id) => {
  const detailUrl = baseUrl + `movie/${id}?language=ko-kr`;
  return fetch(detailUrl, options).then((res) => res.json());
};
//내일 now_playing

// export const auth = () => fetch(baseUrl, options).then(res => res.json()).then(json => console.log(json))
//auth 인증사용 할때

// npm install node-fetch@2 --save
