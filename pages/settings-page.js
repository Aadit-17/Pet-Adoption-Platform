import React from 'react'
import Head from 'next/head'

const SettingsPage = (props) => {
  return (
    <>
      <div className="settings-page-container">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="settings-page-settings-page">
          <button className="settings-page-buttons">
            <div className="settings-page-frame25">
              <div className="settings-page-frame33">
                <span className="settings-page-text">
                  <span>Account</span>
                </span>
                <div className="settings-page-frame39">
                  <div className="settings-page-frame36">
                    <span className="settings-page-text02">
                      <span>ID:</span>
                    </span>
                    <span className="settings-page-text04">
                      <span>Name:</span>
                    </span>
                    <span className="settings-page-text06">
                      <span>Gender:</span>
                    </span>
                    <span className="settings-page-text08">
                      <span>Mobile No.:</span>
                    </span>
                    <span className="settings-page-text10">
                      <span>E-mail ID:</span>
                    </span>
                  </div>
                  <div className="settings-page-frame38">
                    <span className="settings-page-text12">
                      <span>2525</span>
                    </span>
                    <span className="settings-page-text14">
                      <span>Aadit Shah</span>
                    </span>
                    <span className="settings-page-text16">
                      <span>Male</span>
                    </span>
                    <span className="settings-page-text18">
                      <span>92XX92XX92</span>
                    </span>
                    <span className="settings-page-text20">
                      <span>abcd@gmail.com</span>
                    </span>
                  </div>
                </div>
                <div className="settings-page-frame34">
                  <div className="settings-page-component2">
                    <img
                      alt="Rectangle192494"
                      src="/external/rectangle192494-mscr-200h.png"
                      className="settings-page-rectangle19"
                    />
                    <span className="settings-page-text22">
                      <span>Edit</span>
                    </span>
                  </div>
                  <div className="settings-page-component1">
                    <img
                      alt="Rectangle192497"
                      src="/external/rectangle192497-b2ye-200h.png"
                      className="settings-page-rectangle191"
                    />
                    <span className="settings-page-text24">
                      <span>Logout</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="settings-page-frame26">
              <span className="settings-page-text26">
                <span>Contact Us</span>
              </span>
              <img
                alt="mail2410"
                src="/external/mail2410-vruj.svg"
                className="settings-page-mail"
              />
            </div>
            <div className="settings-page-frame27">
              <span className="settings-page-text28">
                <span>Share App</span>
              </span>
              <img
                alt="share2410"
                src="/external/share2410-gl.svg"
                className="settings-page-share"
              />
            </div>
            <div className="settings-page-frame28">
              <span className="settings-page-text30">
                <span>Our Instagram</span>
              </span>
              <img
                alt="instagram2410"
                src="/external/instagram2410-es5.svg"
                className="settings-page-instagram"
              />
            </div>
            <div className="settings-page-frame29">
              <span className="settings-page-text32">
                <span>Our LinkedIn</span>
              </span>
              <img
                alt="linkedin2411"
                src="/external/linkedin2411-bl6h.svg"
                className="settings-page-linkedin"
              />
            </div>
            <div className="settings-page-frame30">
              <span className="settings-page-text34">
                <span>Our Facebook</span>
              </span>
              <img
                alt="formkitfacebook2412"
                src="/external/formkitfacebook2412-4e2.svg"
                className="settings-page-formkitfacebook"
              />
            </div>
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .settings-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .settings-page-settings-page {
            width: 100%;
            height: 1024px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            background-color: rgba(255, 255, 255, 1);
          }
          .settings-page-buttons {
            gap: 15px;
            top: 190px;
            left: 416px;
            width: 608px;
            height: 779px;
            display: flex;
            padding: 10px 20px;
            overflow: hidden;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .settings-page-frame25 {
            width: 454px;
            height: 229px;
            display: flex;
            overflow: hidden;
            position: relative;
            box-sizing: content-box;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 15px;
            background-color: rgba(187, 143, 243, 1);
          }
          .settings-page-frame33 {
            gap: 10px;
            top: 0px;
            left: 0px;
            width: 432px;
            display: flex;
            padding: 10px 15px;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .settings-page-text {
            color: rgba(244, 242, 248, 1);
            height: auto;
            font-size: 20px;
            font-style: Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .settings-page-frame39 {
            gap: 10px;
            width: 417px;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .settings-page-frame36 {
            gap: 10px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .settings-page-text02 {
            color: rgba(244, 242, 248, 1);
            height: auto;
            font-size: 16px;
            font-style: Semi Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .settings-page-text04 {
            color: rgba(244, 242, 248, 1);
            height: auto;
            font-size: 16px;
            font-style: Semi Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .settings-page-text06 {
            color: rgba(244, 242, 248, 1);
            height: auto;
            font-size: 16px;
            font-style: Semi Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .settings-page-text08 {
            color: rgba(244, 242, 248, 1);
            height: auto;
            font-size: 16px;
            font-style: Semi Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .settings-page-text10 {
            color: rgba(244, 242, 248, 1);
            height: auto;
            font-size: 16px;
            font-style: Semi Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .settings-page-frame38 {
            gap: 10px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .settings-page-text12 {
            color: rgba(244, 242, 248, 1);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .settings-page-text14 {
            color: rgba(244, 242, 248, 1);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .settings-page-text16 {
            color: rgba(244, 242, 248, 1);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .settings-page-text18 {
            color: rgba(244, 242, 248, 1);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .settings-page-text20 {
            color: rgba(244, 242, 248, 1);
            height: auto;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .settings-page-frame34 {
            gap: 90px;
            width: 417px;
            display: flex;
            padding: 4px 50px 0;
            align-items: center;
            flex-shrink: 0;
            border-color: rgba(54, 54, 54, 1);
            border-style: solid;
            border-width: 1px 0 0;
            justify-content: space-between;
          }
          .settings-page-component2 {
            width: 80px;
            height: 30px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .settings-page-rectangle19 {
            top: 0px;
            left: 0px;
            width: 80px;
            height: 30px;
            position: absolute;
            box-sizing: content-box;
            border-radius: 10px;
          }
          .settings-page-text22 {
            top: 6px;
            left: 25px;
            color: rgba(101, 44, 223, 1);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Semi Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .settings-page-component1 {
            width: 80px;
            height: 30px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .settings-page-rectangle191 {
            top: 0px;
            left: 0px;
            width: 80px;
            height: 30px;
            position: absolute;
            box-sizing: content-box;
            border-radius: 10px;
          }
          .settings-page-text24 {
            top: 6px;
            left: 12px;
            color: rgba(255, 41, 93, 1);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Semi Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .settings-page-frame26 {
            width: 454px;
            height: 56px;
            display: flex;
            overflow: hidden;
            position: relative;
            box-sizing: content-box;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 15px;
            background-color: rgba(187, 143, 243, 1);
          }
          .settings-page-text26 {
            top: 19px;
            left: 65px;
            color: rgba(244, 242, 248, 1);
            width: 280px;
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Semi Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .settings-page-mail {
            top: 8px;
            left: 15px;
            width: 40px;
            height: 40px;
            position: absolute;
          }
          .settings-page-frame27 {
            width: 454px;
            height: 56px;
            display: flex;
            overflow: hidden;
            position: relative;
            box-sizing: content-box;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 15px;
            background-color: rgba(187, 143, 243, 1);
          }
          .settings-page-text28 {
            top: 19px;
            left: 65px;
            color: rgba(244, 242, 248, 1);
            width: 280px;
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Semi Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .settings-page-share {
            top: 8px;
            left: 17.461538314819336px;
            width: 47px;
            height: 40px;
            position: absolute;
          }
          .settings-page-frame28 {
            width: 454px;
            height: 56px;
            display: flex;
            overflow: hidden;
            position: relative;
            box-sizing: content-box;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 15px;
            background-color: rgba(187, 143, 243, 1);
          }
          .settings-page-text30 {
            top: 19px;
            left: 65px;
            color: rgba(244, 242, 248, 1);
            width: 280px;
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Semi Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .settings-page-instagram {
            top: 8px;
            left: 15px;
            width: 40px;
            height: 40px;
            position: absolute;
          }
          .settings-page-frame29 {
            width: 454px;
            height: 56px;
            display: flex;
            overflow: hidden;
            position: relative;
            box-sizing: content-box;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 15px;
            background-color: rgba(187, 143, 243, 1);
          }
          .settings-page-text32 {
            top: 19px;
            left: 65px;
            color: rgba(244, 242, 248, 1);
            width: 280px;
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Semi Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .settings-page-linkedin {
            top: 8px;
            left: 17.461538314819336px;
            width: 47px;
            height: 40px;
            position: absolute;
          }
          .settings-page-frame30 {
            width: 454px;
            height: 56px;
            display: flex;
            overflow: hidden;
            position: relative;
            box-sizing: content-box;
            align-items: flex-start;
            flex-shrink: 0;
            border-radius: 15px;
            background-color: rgba(187, 143, 243, 1);
          }
          .settings-page-text34 {
            top: 19px;
            left: 65px;
            color: rgba(244, 242, 248, 1);
            width: 280px;
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Semi Bold;
            text-align: left;
            font-family: Inter;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .settings-page-formkitfacebook {
            top: 8px;
            left: 17.461538314819336px;
            width: 47px;
            height: 40px;
            position: absolute;
          }
        `}
      </style>
    </>
  )
}

export default SettingsPage
