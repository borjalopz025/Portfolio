import React, { useRef, useState } from "react";
import { Trabajos } from "../datos/Trabajos";

const Portfolio = () => {

  const videoRefs = useRef({});
  const [playingVideo, setPlayingVideo] = useState(null);

  const handleVideoClick = (id) => {
    const video = videoRefs.current[id];
    
    if (playingVideo && playingVideo !== video) {
      playingVideo.pause();
      playingVideo.controls = false;
    }

    if (video.paused) {
      video.play();
      video.controls = true;
    } else {
      video.pause();
      video.controls = false;
    }

    setPlayingVideo(video);
  };

  const handlePlay = (id) => {
    const video = videoRefs.current[id];
    setPlayingVideo(video);
  };

  const handlePause = () => {
    setPlayingVideo(null);
  };

  return (
    <div className="port" id="portfolio">
      <h1>Portfolio</h1>
      <div className="proyectos">
        {Trabajos.map((t) => {
          return (
            <article key={t.id} className="proyecto-item">
              {t.video && (
                <video
                  ref={(el) => (videoRefs.current[t.id] = el)}
                  poster={t.imagenPrevia}
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleVideoClick(t.id)}
                  onPlay={() => handlePlay(t.id)}
                  onPause={handlePause}
                >
                  <source src={t.video} type="video/mp4" />
                  Tu navegador no soporta el elemento <code>video</code>.
                </video>
              )}
              <div className="carta">
              <h2>{t.nombre}</h2>
              <h3>{t.tecnologias}</h3>
              <p>{t.descripcion}</p>
              <div className="url">
                {
                t.url && t.back ? (
                  <>
                    <p>
                      <a href={t.url}>Código Front</a>
                    </p>
                    <p>
                      <a href={t.back}>Código Back</a>
                    </p>
                  </>
                ) : t.url ? (
                  <p>
                    <a href={t.url}>Código Front</a>
                  </p>
                ) : t.back ? (
                  <p>
                    <a href={t.back}>Código Back</a>
                  </p>
                ) : null
                }
              </div>
              </div>
              
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
