import { useEffect, useState } from "react";
import { nowPlaying, popular, toprated, upcoming } from "../../api";
import { MainBanner } from "./MainBanner";
// import { ClipLoader } from "react-spinners";
import { Loding } from "../../components/Loding";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { IMG_URL } from "../../constant/url";
// import styled from "styled-components";
// import { IMG_URL, IMG_URL_500 } from "../../constant/url";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Movies } from "./Movies";

export const Home = () => {
  // const nowResult = nowPlaying();
  // console.log(nowResult);

  const [isLoading, setIsLoading] = useState(true);
  const [nowDate, setnowDate] = useState();
  const [popDate, setpopDate] = useState();
  const [topDate, settopDate] = useState();
  const [upDate, setupDate] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { results: nowReuslt } = await nowPlaying();
        const { results: popReuslt } = await popular();
        const { results: topReuslt } = await toprated();
        const { results: upReuslt } = await upcoming();

        // console.log(popular.results);
        setnowDate(nowReuslt);
        setpopDate(popReuslt);
        settopDate(topReuslt);
        setupDate(upReuslt);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
        alert("에러발생");
      }
      //예외처리
    })();
  }, []);
  // console.log(nowDate);

  return (
    <>
      {isLoading ? (
        // "loading.."
        <Loding />
      ) : (
        // 지금은 루트상태 위에서 useState(true); 트루로 설정해서 로딩만나옴
        <>
          {nowDate && (
            <>
              <MainBanner imgUrl={nowDate} />
              <Movies movieDate={nowDate} titletext={"현재 상영 영화"} />
              <Movies movieDate={upDate} titletext={"개봉 예정 영화"} />
              <Movies movieDate={popDate} titletext={"인기 영화"} />
              <Movies movieDate={topDate} titletext={"평점이 높은"} />
            </>
          )}
        </>
        //  useEffect 잴 밑에  setIsLoading(false); 설정 : 이부분이 전부 읽고나면 false로 실행시켜주세요
      )}
    </>
  );
};
// *예외
// 1. 컴파일(문법) 에러 : 프로그램이 실행 되기 전에 발생하는 오류
// 2. 런타임 에러 : 프로그램이 실행 중 발생하는 오류
// * try ~ catch
//  발생 할 것 같은 예외 코드를 처리해주는 과정
//  ex)
//  try{
//   예외 가능성 있는 코드
//  }catch(){
//   예외가 발생했을때 처리
//  }finally{
//   예외와 상관 없이 무조건 실행되어야 하는 코드😁
//  }
