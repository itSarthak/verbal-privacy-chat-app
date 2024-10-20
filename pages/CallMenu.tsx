import Image from "next/image";
import React from "react";

const CallMenu = () => {
  return (
    <div
      className="dashboard_container flex flex-col items-center m-1"
      id="dashboard_container"
    >
      <div>
        <div className="description_container">
          <p className="description_container_paragraph">
            A privacy-driven real-time video chat application
          </p>
        </div>
        <div className="personal_code_container">
          <div className="personal_code_title_container">
            <p className="personal_code_title_paragraph">Your Personal Code</p>
          </div>
          <div className="personal_code_value_container">
            <p
              className="personal_code_value_paragraph"
              id="personal_code_paragraph"
            >
              DDDDD
            </p>
            <button
              className="personal_code_copy_button"
              id="personal_code_copy_button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="copy--btn"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="personal_code_connecting_container">
        <p className="personal_code_connecting_paragraph">Callee Code</p>
        <div className="personal_code_connecting_input_container">
          <input className="personal_code_input" id="personal_code_input" />
        </div>
        <div className="personal_code_connecting_buttons_container">
          <button className="connecting_button" id="personal_code_chat_button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#C5705D"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              className="call_svg_icons"
              height="25px"
              color="#C5705D"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
              />
            </svg>
            <p className="btn-text">Chat</p>
          </button>
          <button className="connecting_button" id="personal_code_video_button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#C5705D"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              className="call_svg_icons"
              height="25px"
              color="#C5705D"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            <p className="btn-text">Video</p>
          </button>
        </div>
      </div>
      <div className="stranger_connecting_container">
        <p className="stranger_title_container">Stranger</p>
        <div className="stranger_buttons_container">
          <button className="connecting_button" id="stranger_chat_button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#C5705D"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              className="call_svg_icons"
              height="25px"
              color="#C5705D"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
              />
            </svg>
            <p className="btn-text">Chat</p>
          </button>
          <button className="connecting_button" id="stranger_video_button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#C5705D"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              className="call_svg_icons"
              height="25px"
              color="#C5705D"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            <p className="btn-text">Video</p>
          </button>
        </div>
      </div>
      <div className="checkbox_container">
        <div className="checkbox_connection" id="allow_strangers_checkbox">
          <Image
            src="./utils/images/check.png"
            alt=""
            id="allow_strangers_checkbox_image"
            className="display_none"
          />
        </div>
        <p className="checkbox_container_paragraph">
          Allow connection from strangers
        </p>
      </div>
      <div className="dashboard_blur display_none" id="dashboard_blur"></div>
    </div>
  );
};

export default CallMenu;
