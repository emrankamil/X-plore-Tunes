import { useState, useEffect } from "react";
import MusicCard from '../components/MusicCard'
const BASE_URL = "http://localhost:8000/api_root/music/"

interface Music {
  id: number; 
  owner: number;
  title: string;
  likes: number | null;
  stream: number | null;
  music_file: string;
  length: string | null;
  replays: number;
  music_cover_art: string;
}



const Home = () => {
  const [musics, setMusics] = useState<Music[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(()=>{
    const fetchMusics = async ()=>{
      setIsLoading(true);

      try{
        const response = await fetch(`${BASE_URL}`) 
        const musics = (await response.json()) as Music[];
        setMusics(musics);
      }catch(e:any){
        setError(e)
      }

      setIsLoading(false);
    };

    fetchMusics();
  }, [])

  if (isLoading){
    return <div>Loading ...</div>
  }
  if (error){
    return <div>Unable to fetch data</div>
  }

    return(
      <div>
        <h1>Home</h1>
        <div className="bg-black bg-opacity-20">   
          <div className="flex flex-col gap-4">
            {musics.map((music) => (
              <div key={music.id}>
                <MusicCard owner={music.owner} title={music.title} likes={music.likes} stream={music.stream} music_file={music.music_file} length={music.length} replays={music.replays} music_cover_art={music.music_cover_art}/>
              </div>
              ))
            }
            
          </div>
        </div>
        

      </div>
      

    );
  };
  
  export default Home;
  