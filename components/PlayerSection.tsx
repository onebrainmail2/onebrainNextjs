import React, { useRef, useState  } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

interface Props {
  title: string;
  videoId: string;
  playerId: string;
}

const PlayerSection: React.FC<Props> = ({ title, videoId, playerId }) => {

const [player, setPlayer] = useState<any>(null);
  
  const onReady = (event: any) => {
    setPlayer(event.target);
    event.target.playVideo();
    
  };

  const onStateChange = (event: any) => {
    // event.target.playVideo();
  };
  
  
  const opts: YouTubeProps['opts'] = {
    height: '500',
    width: '900',
    playerVars: {
      playsinline: 1,
      mute: 1,
      autoplay: 1,
      loop: 1,
      // videoId: videoId,
      playlist: videoId,
      vq: 'hd1080',
    },
  }


  const ref = useRef<HTMLDivElement>(null);
  // set up the intersection observer
React.useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && player !== null) {
        console.log('Component is in the viewport!');
        player.playVideo();
      } else if (player !== null) {
        player.pauseVideo();
      }
    },
    {
      root: null,
      threshold: 0.9, // set the threshold for when the component is considered in the viewport
    }
  );

  if (ref.current) {
    observer.observe(ref.current);
  }

  // clean up the observer when the component unmounts
  return () => {
    observer.disconnect();
  };
}, [player]);
    
  return (
    <section ref={ref}> 
    {/* SECTION ID need to be done */}
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-12">
            <h3 style={{ filter: 'invert(1)' }}>{title}</h3>
          </div>
        </div>
      </div>

      <div className="container text-center slides-block">
        <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <div id={playerId}>
              <YouTube 
                videoId={videoId}
                opts={opts}
                onReady={onReady}
                onStateChange={onStateChange}
              />
              </div>
              {/* <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />; */}
            </div>
        </div>
      </div>
    </section>
  );
};

export default PlayerSection;
// import React from "react";
// import YouTube, { YouTubeProps } from 'react-youtube';

// export default class PlayerSection
// extends React.Component {
//   render() {
//     const opts = {
//       height: "390",
//       width: "640",
//       playerVars: {
//         autoplay: 1,
//       },
//     };
  
//     return (
//       <div>
//         <h3>GeeksforGeeks - Youtube</h3>
//         <YouTube videoId={videoId} 
//             opts={opts} onReady={this._onReady} />
//       </div>
//     );
//   }
  
//   _onReady(event) {
//     event.target.pauseVideo();
//   }
// }

// ts
// import React from 'react';
// import YouTube, { YouTubeProps } from 'react-youtube';
// // interface Props {
// //   title: string;
// //   videoId: string;
// //   playerId: string;
// // }

// function PlayerSection(videoId) {
//   const onPlayerReady: YouTubeProps['onReady'] = (event) => {
//     // access to player in all event handlers via event.target
//     event.target.pauseVideo();
//   }
// // const PlayerSection: React.FC<Props> = ({ title, videoId, playerId }) => {

//   const opts: YouTubeProps['opts'] = {
//     height: '390',
//     width: '640',
//     playerVars: {
//       // https://developers.google.com/youtube/player_parameters
//       autoplay: 1,
//     },
//   };

//   return <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />;
// }
//  export default PlayerSection;




//    return (
//     <section id="section1" ref={ref}>
//       <div className="container text-center">
//         <div className="row">
//           <div className="col-lg-12">
//             <h3 style={{ filter: 'invert(1)' }}>{title}</h3>
//           </div>
//         </div>
//       </div>

//       <div className="container text-center slides-block">
//         <div className="row">
//             <div className="col-lg-12 col-sm-12 col-xs-12">
//               <div id={playerId}></div>
//               {/* <YouTube 
//               // videoId="{videoId}"
//                 opts={opts}
//                 onReady={onReady}
//                 onStateChange={onStateChange}
//               /> */}
//               <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />;
//             </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// import React from 'react';
// import YouTube, { YouTubeProps } from 'react-youtube';
// interface PlayerSectionProps {
//   videoId: string;
// }

// export default class PlayerSection extends React.Component<PlayerSectionProps> {
 
//   _onReady(event: any) {
//     // Do something when the player is ready
//   }

  // height: '500',
  //     width: '900',
  //     playerVars: {
  //       playsinline: 1,
  //       mute: 1,
  //       autoplay: 1,
  //       loop: 1,
  //       // videoId: videoId,
  //       playlist: {videoId},
  //       vq: 'hd1080',

//   render() {

//     const { videoId } = this.props; // Get the videoId prop value
    
//     const opts = {
//       height: "500",
//       width: "900",
//       playerVars: {
//         playsinline: 1,
//         mute: 1,
//         autoplay: 1,
//         loop: 1,
//         playlist: {videoId},
//       },
//     };
  
   
  
//     return (
//       <div>
//         <h3>GeeksforGeeks - Youtube</h3>
//         <YouTube videoId={videoId} opts={opts} onReady={this._onReady} />
//       </div>
//     );
//   }
// }