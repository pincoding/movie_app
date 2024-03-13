import { useEffect, useState } from "react"
import {nowPlaying} from "../../api"
import styled from "styled-components";

const Banner = styled.div`
    height: 80vh;
    background: url(https://image.tmdb.org/t/p/original/${props => props.$bgUrl})no-repeat center/cover;
`;
export const Home = () => {
    // const nowResult = nowPlaying();
    // console.log(nowResult);

    const [nowDate, setnowDate] = useState();

    useEffect(() => {
        (async ()=>{
            const {results} = await nowPlaying();
            setnowDate(results);
        })();
    }, []);
    console.log(nowDate);


    return <div>
        <Banner $bgUrl = {nowDate[3].backdrop_path}></Banner>
    </div>
}

