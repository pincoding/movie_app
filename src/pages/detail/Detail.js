import { useEffect, useState } from "react";
import { moiveDetail } from "../../api";
import { useParams } from "react-router-dom";
import { Loding } from "../../components/Loding";
import styled from "styled-components";
import { IMG_URL } from "../../constant/url";

const Container = styled.div`
  padding: 150px;
  display: flex;
  justify-content: space-between;
`;

const Bg = styled.div`
  width: 48%;
`;

const Con = styled.div`
  width: 45%;
  h3 {
    font-size: 70px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  .info {
    font-size: 20px;
    margin-bottom: 20px;
  }
  p {
    padding-top: 50px;
    border-top: 1px solid #555;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 28px;
    opacity: 0.7;
  }
`;

const Genres = styled.ul`
  list-style: disc;
  margin-left: 26px;
  li {
    margin-bottom: 10px;
  }
  li:last-child {
    margin-bottom: 50px;
  }
`;

export const Detail = () => {
  const { id } = useParams();
  // 객체안에 내가지정한 아이디 번호 가지고 오기
  const [data, setdata] = useState();
  const [Loading, setLoading] = useState(true);
  const [genData, setgenData] = useState(data?.genres);
  useEffect(() => {
    (async () => {
      try {
        const detailData = await moiveDetail(id);
        setdata(detailData);
        console.log(detailData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);
  console.log(data);
  console.log(genData);
  return (
    <div>
      {Loading ? (
        <Loding />
      ) : (
        <>
          <Container>
            <Bg>
              <img src={`${IMG_URL}${data?.poster_path}`} alt={data?.title} />
            </Bg>
            <Con>
              <h3>{data?.title}</h3>
              <div className="info">평점{data?.vote_average}점</div>
              <div className="info">{data?.runtime}</div>
              <div className="info">{data?.release_date}</div>
              <Genres className="info">
                <li>코믹</li>
                <li>액션</li>
                <li>판타지</li>
              </Genres>

              <p>{data?.overview}</p>
            </Con>
          </Container>
        </>
      )}
    </div>
  );
};

// 장르 ,평점
