import { media } from "../../media-data";
import {MdCamera, MdPhotoCamera} from "react-icons/md"
import "./media.css";
import {LazyLoadImage} from 'react-lazy-load-image-component';

const Media = () => {
  return (
    < div className="media_container">
     <h1>Media</h1>
      <section className="photos">
        {media.map((items) => {
          const { id, image } = items;
          return (
            <article key={id}>
              <LazyLoadImage effect="blur" src={image} alt={`image${id}`} />
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Media;
