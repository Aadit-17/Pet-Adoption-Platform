import React from 'react'
import Head from 'next/head'

const LandingPage = (props) => {
  return (
    <>
      <div className="landing-page-container">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="landing-page-landing-page">
          <img
            alt="Rectangle225"
            src="/external/rectangle225-csp-1100h.png"
            className="landing-page-rectangle2"
          />
          <span className="landing-page-text">
            <span> Furry Finds</span>
          </span>
          <span className="landing-page-text2">
            <span>
              Connect Hearts, Find Paws: Your Gateway to Responsible Pet
              Adoption!
            </span>
          </span>
          <img
            alt="paw3svgrepocom1214"
            src="/external/paw3svgrepocom1214-7sb.svg"
            className="landing-page-paw3svgrepocom1"
          />
          <div className="landing-page-text-box6">
            <span className="landing-page-text4">
              <span>Continue</span>
            </span>
          </div>
          <div className="landing-page-text-box7">
            <span className="landing-page-text6">
              <span>Continue</span>
            </span>
          </div>
          <img
            alt="threedotspunctuationsignsvgrepocom12944"
            src="/external/threedotspunctuationsignsvgrepocom12944-nfr.svg"
            className="landing-page-threedotspunctuationsignsvgrepocom1"
          />
          <img
            alt="Ellipse113211"
            src="/external/ellipse113211-q8rp-500h.png"
            className="landing-page-ellipse11"
          />
        </div>
      </div>
      <style jsx>
        {`
          .landing-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .landing-page-landing-page {
            width: 100%;
            height: 1024px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
            background-color: rgba(254, 253, 255, 1);
          }
          .landing-page-rectangle2 {
            top: 0px;
            left: 0px;
            width: 685px;
            height: 1024px;
            position: absolute;
          }
          .landing-page-text {
            top: 199px;
            left: 73px;
            color: rgba(254, 253, 255, 1);
            width: 551px;
            height: auto;
            position: absolute;
            font-size: 128px;
            font-style: Extra Bold;
            text-align: center;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .landing-page-text2 {
            top: 617px;
            left: 27px;
            color: rgba(254, 253, 255, 1);
            width: 639px;
            height: auto;
            position: absolute;
            font-size: 40px;
            font-style: Medium;
            text-align: center;
            font-family: Inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .landing-page-paw3svgrepocom1 {
            top: 233px;
            left: 72px;
            width: 94px;
            height: 94px;
            position: absolute;
          }
          .landing-page-text-box6 {
            top: 880px;
            left: 870px;
            width: 380px;
            height: 60px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .landing-page-text4 {
            top: 20px;
            left: 155px;
            color: rgba(187, 143, 243, 1);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .landing-page-text-box7 {
            top: 880px;
            left: 870px;
            width: 380px;
            height: 60px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .landing-page-text6 {
            top: 20px;
            left: 155px;
            color: rgba(187, 143, 243, 1);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .landing-page-threedotspunctuationsignsvgrepocom1 {
            top: 654px;
            left: 1035px;
            width: 50px;
            height: 50px;
            position: absolute;
          }
          .landing-page-ellipse11 {
            top: 132px;
            left: 817px;
            width: 485px;
            height: 485px;
            position: absolute;
          }
        `}
      </style>
    </>
  )
}

export default LandingPage
