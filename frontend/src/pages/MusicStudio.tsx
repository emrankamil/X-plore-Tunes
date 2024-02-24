import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

interface Music {
  owner: number;
  title: string;
  likes: number | null;
  stream: number | null;
  music_file: string;
  length: string | null;
  replays: number;
  music_cover_art: string;
}

const MusicStudio = () => {
  const { musicId } = useParams<{ musicId?: string }>();

  const [title, setTitle] = useState<string>('');
  const [length, setLength] = useState<string>('');
  const [musicFile, setMusicFile] = useState('');
  const [musicCover, setMusicCover] = useState('');

  const baseUrl = 'http://localhost:8000/api_root/music/create/';

  // useEffect(()=>{

  //   fetch(baseUrl, {
  //     method: "POST",
  //     body: JSON.stringify({postMusic}),
  //     headers: {
  //         "Content-type": "application/json; charset=UTF-8"
  //     }
  //   })
  //   .then((response)=>response.json())
  //   .then((json)=>console.log(json))

  // }, [])

  const handleFetch = () => {
    const postMusic = {
      'owner':'owner',
      'title':title,
      'likes':0,
      'stream':0,
      'length':'00:00:00',
      'musicFile':musicFile,
      'replays':0,
      'musicCover':musicCover,
    }
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(postMusic),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };

    fetch(baseUrl, requestOptions)
      .then(async (response) => {
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson && (await response.json());

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }

        console.log('success');
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">{'Create'} Music</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-600">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="length" className="block text-sm font-medium text-gray-600">
            Length
          </label>
          <input
            type="text"
            id="length"
            name="length"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="musicFile" className="block text-sm font-medium text-gray-600">
            Music File
          </label>
          <input
            type="file"
            id="musicFile"
            name="musicFile"
            onChange={(e) => setMusicFile(e.target.files[0])}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="musicFile" className="block text-sm font-medium text-gray-600">
            cover Art
          </label>
          <input
            type="file"
            id="coverArtFile"
            name="coverArtFile"
            onChange={(e) => setMusicCover(e.target.files[0])}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="flex items-center">
          <button
            type="button"
            onClick={handleFetch}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
          >
            Save
          </button>
          <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded-md">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default MusicStudio;


// const MusicStudio = () => {
//   const { musicId } = useParams<{ musicId?: string }>();

//   const [owner, setOwner] = useState<string>('');
//   const [title, setTitle] = useState<string>('');
//   const [length, setLength] = useState<string>('');
//   const [musicFile, setMusicFile] = useState<string>(''); 
//   const [musicCover, setMusicCover] = useState<string>('');

//   const baseUrl = 'http://localhost:8000/api_root/music/create/'
  
  

//   const handleFetch = () => {

//     const postMusic = {
//       'owner':'owner',
//       'title':title,
//       'likes':0,
//       'stream':0,
//       'length':null,
//       'musicFile':musicFile,
//       'replays':0,
//       'musicCover':musicCover,
//     }
//     const requestOptions = {
//       method: "POST",
//       body: JSON.stringify(
//         {
//           "owner": 1,
//           "title": "title 3",
//           "likes": 1,
//           "music_file": "http://localhost:8000/media/music_files/audio/djangoPortfolio_nMUDwUn.png",
//           "length": null,
//           "replays": 9,
//           "music_cover_art": "http://localhost:8000/media/music_files/cover_art/Image-game_over_o2gURvu.jpg",
//           "stream": 2
//       }
//       ),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8"}
//   }

//     fetch(baseUrl,requestOptions)
//       .then(async response => {
//           const isJson = response.headers.get('content-type')?.includes('application/json');
//           const data = isJson && await response.json();

//           // check for error response
//           if (!response.ok) {
//               // get error message from body or default to response status
//               const error = (data && data.message) || response.status;
//               return Promise.reject(error);
//           }

//           console.log("success")
//       })
//         .catch(error => {
//             console.error('There was an error!', error);
//         });

// const MusicStudio = () => {
//   const { musicId } = useParams<{ musicId?: string }>();

//   const [title, setTitle] = useState<string>('');
//   const [length, setLength] = useState<string>('');
//   const [musicFile, setMusicFile] = useState<string>('');
//   const [musicCover, setMusicCover] = useState<string>('');

//   const baseUrl = 'http://localhost:8000/api_root/music/create/';

//   const handleFetch = () => {
//     const requestOptions = {
//       method: 'POST',
//       body: JSON.stringify({
//         owner: 1,
//         title: title,
//         likes: 1,
//         music_file: musicFile,
//         length: length,
//         replays: 9,
//         music_cover_art: musicCover,
//         stream: 2,
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     };

//     fetch(baseUrl, requestOptions)
//       .then(async (response) => {
//         const isJson = response.headers.get('content-type')?.includes('application/json');
//         const data = isJson && (await response.json());

//         // check for error response
//         if (!response.ok) {
//           // get error message from body or default to response status
//           const error = (data && data.message) || response.status;
//           return Promise.reject(error);
//         }

//         console.log('success');
//       })
//       .catch((error) => {
//         console.error('There was an error!', error);
//       });
//   };
//   return (
//     <div className="container mx-auto mt-8">
//       <h2 className="text-2xl font-semibold mb-4">{'Create'} Music</h2>
//       <form>
        
//         <div className="flex items-center">
//           <button
//             type="button"
//             onClick={handleFetch}
//             className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
//           >
//             Save
//           </button>
//           <button
//             type="button"
//             className="bg-gray-500 text-white px-4 py-2 rounded-md"
//           >Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default MusicStudio;