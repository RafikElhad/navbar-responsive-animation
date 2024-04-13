import React from "react";
import '../css/Share.css' 
import photo from '../assets/facebook_share.png';
import twitter from '../assets/twitter_retweet.png';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';

function Share() {
  const url = window.location.href;

  return (
    <div className="share-icons">
      {/* Bouton de partage Facebook */}
      <FacebookShareButton url={url}>
       <img src={photo} alt="facebook" /> 
      </FacebookShareButton>
      
      {/* Bouton de partage Twitter */}
      <TwitterShareButton url={url}>
       <img src={twitter} alt="twitter" />
      </TwitterShareButton>
      
      {/* Bouton de partage LinkedIn */}
      <LinkedinShareButton url={url}>
        <img src="linkedin-icon.png" alt="LinkedIn" />
      </LinkedinShareButton>
    </div>
  );
}

export default Share;
