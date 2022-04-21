import React from "react";

const SpotifyLogin = () => {
  return (
    <section className="spotifySec">
      <article>
        <h1>Spotify</h1>
        <br />
        <h1>Sign up for free to start listening.</h1>
        <form>
          <div className="spo-grp">
            <label htmlFor="email">What's your email?</label>
            <input type="email" placeholder="Enter Your Email" />
            <footer>
              <a href="">Use phone number instead</a>
            </footer>
          </div>
          <div className="spo-grp">
            <label htmlFor="email">Confirm your email</label>
            <input type="email" placeholder="Enter Your Email again" />
          </div>
          <div className="spo-grp">
            <label htmlFor="password">Create a password</label>
            <input type="password" placeholder="Create a Password" />
          </div>
          <div className="spo-grp">
            <label htmlFor="password">What should we call you?</label>
            <input type="text" placeholder="Enter a profile name" />
          </div>

          <div className="dob">
            <label htmlFor="password">What's your date of birth?</label>
            <input type="date" />
          </div>

          <div className="spo-gender">
            <label htmlFor="password">What's your gender?</label>
            <br />
            <br />
            <input type="radio" />
            &nbsp;&nbsp;Male
            <input type="radio" />
            &nbsp;&nbsp;Female
            <input type="radio" />
            &nbsp;&nbsp;Non-binary
          </div>

          <div className="spo-check">
            <input type="checkbox" />
            &nbsp;I would prefer not to receive marketing messages from Spotify
          </div>
          <br />

          <div className="spo-check1">
            <input type="checkbox" />
            &nbsp;Share my registration data with Spotify's content providers
            for &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;marketing purposes.
          </div>
          <br />

          <div className="spo-robo">
            <input type="checkbox" />
            <p>&nbsp;&nbsp;I am not a Robot</p>
          </div>
          <br />

          <div className="spo-button">
            <button>Sign Up</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default SpotifyLogin;
