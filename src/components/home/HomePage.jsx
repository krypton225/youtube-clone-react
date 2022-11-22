import { useEffect, useState } from "react";

import axios from "axios";

import { API_KEY, RAPID_API_KEY } from "../APIs/apiKey";

import VideoCard from "./VideoCard";
import Loading from "../generals/Loading";

const HomePage = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/search',
            params: {
                relatedToVideoId: '7ghhRHRP6t4',
                part: 'id,snippet',
                type: 'video',
                maxResults: '120'
            },
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': RAPID_API_KEY
            }
        };

        axios.request(options)
            .then((response) => {
                setVideos(response.data.items);
            }).catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <section className='home' id='home'>
            <div className="container">
                <div className="row">
                    <div className="home__videos">
                        {
                            videos.length === 0 ? <Loading />
                                : videos.map((
                                    { id: { videoId }, snippet: { channelTitle, publishTime, thumbnails: { medium }, title } }) => (
                                    <VideoCard key={videoId} videoId={videoId} channelTitle={channelTitle}
                                        publishTime={publishTime} title={title} medium={medium} />
                                ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage;