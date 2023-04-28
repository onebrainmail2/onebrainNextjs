  import React, { useRef, useState  } from 'react';
  import YouTube, { YouTubeProps } from 'react-youtube';

  interface Props {
    title: string;
    videoId: string;
    playerId: string;
    magnetLinkId: string;
  }

  const PlayerSection: React.FC<Props> = ({ title, videoId, playerId, magnetLinkId }) => {

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
    // set up the intersection observer for the player section
    // when the player section is in the viewport, play the video
    // when the player section is out of the viewport, pause the video
    // the player section is the section with the id of `section${playerId}
  React.useEffect(() => {
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        
        if(entry.isIntersecting && document.getElementById(`section${playerId}`)){
          document.getElementById(`${magnetLinkId}`).querySelector('svg').style.color="#43f7fc";
        }else{
          if(document.getElementById(`${magnetLinkId}`)){
          document.getElementById(`${magnetLinkId}`).querySelector('svg').style.color="purple";
          }
        }

        if (entry.isIntersecting && player !== null) {
          player.playVideo();
          console.log("play");
          
        } else if (player !== null) {
          player.pauseVideo();
          console.log("pause");
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
      <section id={`section${playerId}`} ref={ref}> 
      {/* SECTION ID need to be done */}
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="invert-1">{title}</h3>
            </div>
          </div>
        </div>

        <div className="container text-center slides-block">
          <div className="row">
              <div className="col-lg-12 col-sm-12 col-xs-12">
                <div id={`player${playerId}`}>
                <YouTube 
                  videoId={videoId}
                  opts={opts}
                  onReady={onReady}
                  onStateChange={onStateChange}
                />
                </div>
              </div>
          </div>
        </div>
      </section>
    );
  };

  export default PlayerSection;