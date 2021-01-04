import { React } from "react";

function Media(props) {
  const { media } = props;
  return (
    <div className="column is-narrow">
      <div className="box">
        <article className="media">
          <div className="">
            <figure className="image is-128x128 overflow-auto">
              <img src={media.Poster} alt="Media Image"/>
            </figure>
          </div>
          <div className="media-content ml-5">
            <div className="content">
              <p>
                <strong>{media.Title}</strong> <br/> <small>{media.Type}</small> <br/> <small>{media.Year}</small>
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Media