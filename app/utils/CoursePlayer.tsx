// import axios from "axios";
// import React, { FC, useEffect, useState } from "react";

// type Props = {
//   videoUrl: string;
//   title: string;
// };

// const CoursePlayer: FC<Props> = ({ videoUrl }) => {
//   const [videoData, setVideoData] = useState({
//     otp: "",
//     playbackInfo: "",
//   });

//   useEffect(() => {
//     axios
//       .post("http://localhost:8000/api/v1/getVdoCipherOTP", {
//         videoId: videoUrl,
//       })
//       .then((res) => {
//         setVideoData(res.data);
//       });
//   }, [videoUrl]);

//   return (
//     <div style={{ paddingTop: "41%", position: "relative" }}>
//       {
//       videoData.otp && videoData.playbackInfo !== "" && (
//         <iframe
//           src={`https://player.vdocipher.com/v2/?otp=${videoData?.otp}&playbackInfo=${videoData.playbackInfo}&player=kcE8PJhV8dT2TXmI`}
//           style={{
//             border: 0,
//             width: "90%",
//             height: "100%",
//             position: "absolute",
//             top: 0,
//             left: 0,
//           }}
//           allowFullScreen={true}
//           allow="encrypted-media"
//         ></iframe>
//       )}
//     </div>
//   );
// };

// export default CoursePlayer;

import React, { FC } from "react";

type Props = {
  videoUrl: string; // This should now be the full YouTube URL or just the videoId
  title: string;
};

const CoursePlayer: FC<Props> = ({ videoUrl }) => {
  const extractYouTubeVideoId = (url: string) => {
    // Regex to extract YouTube video ID
    const regExp = /^.*(youtu.be\/|v\/|\/u\/\w\/|embed\/|watch\?v=|\&v=|^\/watch\?v=|\/shorts\/)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = extractYouTubeVideoId(videoUrl);

  return (
    <div style={{ paddingTop: "56.25%", position: "relative" }}>
      {videoId ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          style={{
            border: 0,
            width: "90%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ) : (
        <p>Invalid YouTube URL</p>
      )}
    </div>
  );
};

export default CoursePlayer;
