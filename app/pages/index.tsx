import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import CopyIcon from "../components/CopyIcon";
// import Image from 'next/image'

const colors = {
  primary: "#8093F1",
  secondary: "#F7AEF8",
};

const Home: NextPage = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState<null | string>(null);

  const handleClick = () => {
    fetch("/api/create-url/", {
      method: "POST",
      body: JSON.stringify({ url }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status == 200) {
        res.json().then((res) => setResult(window.location.host + res.url));
      } else {
        alert("Failed with error: " + res.status);
      }
    });
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="content">
          <h1>Shorten your URLs with ease</h1>
          <div className="input-area">
            <div className="gradient-border input">
              <input
                placeholder="Enter your URL here"
                value={url}
                onChange={(evt) => setUrl(evt.target.value)}
                autoFocus
              />
            </div>
            <div className="gradient-border button">
              <button onClick={handleClick}>GO</button>
            </div>
          </div>
          {result && (
            <div className="result-area">
              <span className="result-title">Your shortened URL:</span>
              <div className="result-url">
                <div className="result">{result}</div>
                <CopyIcon
                  style={{
                    height: "30px",
                    fill: "white",
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </main>
      <style jsx>{`
        main {
          width: 100vw;
          height: 100vh;
          position: relative;
        }
        .content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }
        .input-area {
          display: flex;
          gap: 8px;
        }
        .gradient-border {
          background: linear-gradient(
            135deg,
            ${colors.primary},
            ${colors.secondary}
          );
          padding: 2px;
          transition: all 150ms;
        }
        .input {
          border-top-left-radius: 16px;
          border-bottom-left-radius: 16px;
        }
        .input input {
          border: none;
          background: #000;
          padding: 16px 24px;
          font-size: large;
          border-top-left-radius: 14px;
          border-bottom-left-radius: 14px;
          min-width: 30vw;
        }
        .input input:focus {
          outline: none;
          box-shadow: -2px -2px 6px ${colors.primary},
            2px 2px 6px ${colors.secondary};
        }
        .button {
          border-top-right-radius: 16px;
          border-bottom-right-radius: 16px;
        }
        .button button {
          border: none;
          background: #000;
          padding: 16px 24px;
          font-size: large;
          border-top-right-radius: 14px;
          border-bottom-right-radius: 14px;
          cursor: pointer;
          min-width: 15vw;
        }
        .button:hover {
          cursor: pointer;
          transform: translateY(-8px);
          box-shadow: -2px -2px 6px ${colors.primary},
            2px 2px 6px ${colors.secondary};
        }
        .result-area {
          text-align: center;
          margin-top: 24px;
        }
        .result-title {
          color: rgba(255, 255, 255, 0.7);
        }
        .result-url {
          display: flex;
          gap: 16px;
          align-items: center;
          justify-content: center;
        }
        .result-url .result {
          color: white;
          font-size: x-large;
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default Home;
