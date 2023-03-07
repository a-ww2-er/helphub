import { media } from "../../media-data";
import {MdCamera, MdPhotoCamera} from "react-icons/md"
import "./media.css";

const Media = () => {
  return (
    < div className="media_container">
     <h1>Media</h1>
      <section className="photos">
        {media.map((items) => {
          const { id, image } = items;
          return (
            <article key={id}>
              <img src={image} alt={`image${id}`} />
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Media;
