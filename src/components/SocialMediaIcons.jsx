import linkedinpng from '../assets/linkedin.png';
import twitterpng from '../assets/twitter.png';
import facebookpng from '../assets/facebook.png';
import instagrampng from '../assets/instagram.png';
import githubimg from '../assets/githubw.png';

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/thecodingrazavi/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={linkedinpng} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com/thecodingrazavi/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src={twitterpng} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/profile.php?id=100094026148003"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src={facebookpng} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/thecodingrazavi/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src={instagrampng} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
