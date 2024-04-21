import React from 'react'
import Head from 'next/head'

const Signuppage = (props) => {
  return (
    <>
      <div className="signuppage-container">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="signuppage-signuppage">
          <button className="signuppage-backbutton">
            <img
              alt="Rectangle2I204"
              src="/external/rectangle2i204-9odg-300w.png"
              className="signuppage-rectangle2"
            />
            <span className="signuppage-text">
              <span>Go Back</span>
            </span>
          </button>
          <button className="signuppage-backbutton1">
            <img
              alt="Rectangle2I651"
              src="/external/rectangle2i651-294-300w.png"
              className="signuppage-rectangle21"
            />
            <span className="signuppage-text02">
              <span>Sign Up</span>
            </span>
          </button>
          <div className="signuppage-frame3">
            <div className="signuppage-text-box1">
              <span className="signuppage-text04">
                <span>Enter Full Name</span>
              </span>
            </div>
            <div className="signuppage-group2">
              <div className="signuppage-frame16">
                <div className="signuppage-frame161">
                  <span className="signuppage-text06">
                    <span>Male</span>
                  </span>
                </div>
              </div>
              <div className="signuppage-frame17">
                <div className="signuppage-frame171">
                  <span className="signuppage-text08">
                    <span>Female</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="signuppage-text-box3">
              <span className="signuppage-text10">
                <span>Enter Mobile Number</span>
              </span>
            </div>
            <div className="signuppage-text-box5">
              <div className="signuppage-frame58">
                <img
                  alt="Rectangle32041"
                  src="/external/rectangle32041-u5wp-400w.png"
                  className="signuppage-rectangle3"
                />
                <span className="signuppage-text12">
                  <span>Enter E-mail ID</span>
                </span>
              </div>
            </div>
          </div>
          <span className="signuppage-text14">
            <span>Sign Up</span>
          </span>
          <div className="signuppage-frame31">
            <div className="signuppage-frame25">
              <span className="signuppage-text16">
                <span>Continue with Apple</span>
              </span>
              <img
                alt="Applesvg3317"
                src="/external/applesvg3317-ubx.svg"
                className="signuppage-applesvg"
              />
            </div>
            <div className="signuppage-frame26">
              <img
                alt="Googlepng03321"
                src="/external/googlepng03321-m7kh-200h.png"
                className="signuppage-googlepng0"
              />
              <span className="signuppage-text18">
                <span>Continue with Google</span>
              </span>
            </div>
            <div className="signuppage-frame27">
              <img
                alt="Facebookpng03324"
                src="/external/facebookpng03324-r26l-200h.png"
                className="signuppage-facebookpng0"
              />
              <span className="signuppage-text20">
                <span>Continue with Facebook</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .signuppage-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .signuppage-signuppage {
            width: 100%;
            height: 1024px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: rgba(255, 255, 255, 1);
          }
          .signuppage-backbutton {
            top: 894px;
            left: 564px;
            width: 300px;
            height: 60px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .signuppage-rectangle2 {
            top: 0px;
            left: 0px;
            width: 300px;
            height: 60px;
            position: absolute;
            border-color: rgba(187, 143, 243, 1);
            border-style: solid;
            border-width: 3px;
            border-radius: 15px;
          }
          .signuppage-text {
            top: 18px;
            left: 113px;
            color: rgba(187, 143, 243, 1);
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .signuppage-backbutton1 {
            top: 810px;
            left: 564px;
            width: 300px;
            height: 60px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .signuppage-rectangle21 {
            top: 0px;
            left: 0px;
            width: 300px;
            height: 60px;
            position: absolute;
            border-color: rgba(187, 143, 243, 1);
            border-style: solid;
            border-width: 3px;
            border-radius: 15px;
          }
          .signuppage-text02 {
            top: 18px;
            left: 113px;
            color: rgba(187, 143, 243, 1);
            height: auto;
            position: absolute;
            font-size: 20px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .signuppage-frame3 {
            gap: 30px;
            top: 210px;
            left: 59px;
            width: 1322px;
            height: 375px;
            display: flex;
            overflow: hidden;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .signuppage-text-box1 {
            width: 380px;
            height: 60px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .signuppage-text04 {
            top: 21px;
            left: 15px;
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
          .signuppage-group2 {
            width: 380px;
            height: 60px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .signuppage-frame16 {
            top: 0px;
            left: 0px;
            width: 180px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .signuppage-frame161 {
            height: 60px;
            display: flex;
            padding: 0 20px;
            overflow: hidden;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(187, 143, 243, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 15px;
            justify-content: center;
          }
          .signuppage-text06 {
            color: rgba(187, 143, 243, 1);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .signuppage-frame17 {
            top: 0px;
            left: 200px;
            width: 180px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .signuppage-frame171 {
            height: 60px;
            display: flex;
            padding: 0 20px;
            overflow: hidden;
            flex-grow: 1;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(187, 143, 243, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 15px;
            justify-content: center;
          }
          .signuppage-text08 {
            color: rgba(187, 143, 243, 1);
            height: auto;
            font-size: 16px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .signuppage-text-box3 {
            width: 380px;
            height: 60px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .signuppage-text10 {
            top: 21px;
            left: 15px;
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
          .signuppage-text-box5 {
            width: 380px;
            height: 60px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 1;
          }
          .signuppage-frame58 {
            top: 0px;
            left: 0px;
            width: 380px;
            height: 60px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .signuppage-rectangle3 {
            top: 0px;
            left: 0px;
            width: 380px;
            height: 60px;
            position: absolute;
            border-color: rgba(187, 143, 243, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 15px;
          }
          .signuppage-text12 {
            top: 21px;
            left: 15px;
            color: rgba(187, 143, 243, 1);
            width: 150px;
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
          .signuppage-text14 {
            top: 91px;
            left: 612px;
            color: rgba(187, 143, 243, 1);
            height: auto;
            position: absolute;
            font-size: 56px;
            font-style: Bold;
            text-align: left;
            font-family: SF Pro;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .signuppage-frame31 {
            gap: 12px;
            top: 585px;
            left: 548px;
            width: 344px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .signuppage-frame25 {
            gap: 12.150803565979004px;
            width: 344px;
            display: flex;
            padding: 11px 48.603214263916016px;
            position: relative;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            align-items: center;
            flex-shrink: 0;
            border-radius: 100px;
            justify-content: center;
            background-color: var(--dl-color-background-light1);
          }
          .signuppage-text16 {
            color: rgba(0, 0, 0, 1);
            width: 202px;
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Alef;
            font-weight: 400;
            line-height: 26.731767654418945px;
            font-stretch: normal;
            text-decoration: none;
          }
          .signuppage-applesvg {
            top: 12.204833984375px;
            left: 19.424560546875px;
            width: 20px;
            height: 25px;
            z-index: 1;
            position: absolute;
          }
          .signuppage-frame26 {
            gap: 12.150803565979004px;
            width: 344px;
            display: flex;
            padding: 11px 48.603214263916016px;
            position: relative;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            align-items: center;
            flex-shrink: 0;
            border-radius: 100px;
            justify-content: center;
            background-color: var(--dl-color-background-light1);
          }
          .signuppage-googlepng0 {
            top: 10px;
            left: 17.424560546875px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .signuppage-text18 {
            color: rgba(0, 0, 0, 1);
            width: 202px;
            height: auto;
            z-index: 1;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Alef;
            font-weight: 400;
            line-height: 26.731767654418945px;
            font-stretch: normal;
            text-decoration: none;
          }
          .signuppage-frame27 {
            gap: 12.150803565979004px;
            width: 344px;
            display: flex;
            padding: 11px 48.603214263916016px;
            position: relative;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            align-items: center;
            flex-shrink: 0;
            border-radius: 100px;
            justify-content: center;
            background-color: var(--dl-color-background-light1);
          }
          .signuppage-facebookpng0 {
            top: 10px;
            left: 17.424560546875px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .signuppage-text20 {
            color: rgba(0, 0, 0, 1);
            width: 202px;
            height: auto;
            z-index: 1;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Alef;
            font-weight: 400;
            line-height: 26.731767654418945px;
            font-stretch: normal;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

export default Signuppage
