import { useEffect, useState } from "react";
import { nowPlaying } from "../../api";
import { MainBanner } from "./MainBanner";
// import { ClipLoader } from "react-spinners";
import { Loding } from "../../components/Loding";
import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { IMG_URL } from "../../constant/url";
import styled from "styled-components";
import { IMG_URL } from "../../constant/url";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Section = styled.section`
  padding: 100px;
  padding-right: 0;
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 30px;
`;
const Bg = styled.div`
  height: 370px;
  background: url(${IMG_URL}${(props) => props.$bgUrl}) no-repeat center/cover;
`;
const MovieTitle = styled.h3`
  font-size: 18px;
  margin-top: 20px;
`;
export const Home = () => {
  // const nowResult = nowPlaying();
  // console.log(nowResult);
  const [isLoading, setIsLoading] = useState(true);
  const [nowDate, setnowDate] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { results } = await nowPlaying();
        setnowDate(results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        alert("에러발생");
      }
      //예외처리
    })();
  }, []);
  console.log(nowDate);

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
              <Section>
                <Title>현재 상영 영화</Title>
                <Swiper slidesPerView={5.2} spaceBetween={20}>
                  {nowDate.map((data) => (
                    <SwiperSlide key={data.id}>
                      <Link to="#">
                        <Bg $bgUrl={data.poster_path} />
                        <MovieTitle>{data.title}</MovieTitle>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Section>
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
