import { useEffect, useState } from "react";
import { nowPlaying } from "../../api";
import { MainBanner } from "./MainBanner";
import { ClipLoader } from "react-spinners";
import { Loding } from "../../components/Loding";
// import styled from "styled-components";
// import { IMG_URL } from "../../constant/url";

export const Home = () => {
  // const nowResult = nowPlaying();
  // console.log(nowResult);
  const [isLoading, setIsLoading] = useState(true);
  const [nowDate, setnowDate] = useState();

  useEffect(() => {
    (async () => {
      const { results } = await nowPlaying();
      setnowDate(results);
      setIsLoading(false);
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
        <>{nowDate && <MainBanner imgUrl={nowDate} />}</>
        //  useEffect 잴 밑에  setIsLoading(false); 설정 : 이부분이 전부 읽고나면 false로 실행시켜주세요
      )}
    </>
  );
};
