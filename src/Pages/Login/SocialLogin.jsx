import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
  const { googleLogin, githubLogin, twitterLogin, facebookLogin } = useAuth();

  // navigation systems
  const navigate = useNavigate();
    const location = useLocation();
  
  const from = location?.state || "/";

  const handleSocialLogin = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        navigate(from);
      }
    });
  };
  return (
    <>
      <div className="divider">continue with</div>
      <div className="flex justify-around">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn btn-primary btn-sm btn-outline"
        >
          Google
        </button>
        <button
          onClick={() => handleSocialLogin(githubLogin)}
          className="btn btn-secondary btn-sm btn-outline"
        >
          Github
        </button>
        <button
          onClick={() => handleSocialLogin(twitterLogin)}
          className="btn btn-accent btn-sm btn-outline"
        >
          Twitter
        </button>
        <button
          onClick={() => handleSocialLogin(facebookLogin)}
          className="btn btn-secondary btn-sm btn-outline"
        >
          Facebook
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
