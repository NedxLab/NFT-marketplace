import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  description: "",
  url: "",
  supply: "",
  price: "",
  item: {},
};

const CreateNft = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(initialState);
  const [hidemodal, setHideModal] = useState(false);

  const handleState = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleClick = (e) => {
    window.scrollTo(0, 0);
    e.preventDefault();
    setHideModal(true);
  };

  const handleSubmit = () => {
    const stateData = JSON.stringify(state);
    localStorage.setItem("item", stateData);
    setHideModal(false);
    setTimeout(() => {
      navigate("/success");
    }, 1000);
    console.log(state);
  };

  return (
    <div className="createnft">
      <div className="createnft_wrapper">
        {localStorage.getItem("user") ? (
          <>
            <div className="head">Create New Item</div>

            <div className="warning">
              Please make sure to complete all required fields <sup>*</sup>
            </div>

            <form onSubmit={handleClick} className="newitem_box">
              <div className="item_image">
                <p>
                  Images, Videos, Gifs <sup>*</sup>
                </p>
                <div className="description">
                  File types supported: JPG, PNG, GIF, SVG, MP4, GLB, GLTF. Max
                  size:100 MB
                </div>
                <input type="file" name="item" onChange={handleState} />
              </div>

              <div className="name">
                <p>
                  Name <sup>*</sup>
                </p>
                <input
                  type="text"
                  name="name"
                  placeholder="Item name"
                  required
                  onChange={handleState}
                />
              </div>

              <div className="external_link">
                <p>External Link</p>
                <div className="description">
                  Webify will include a link to this item's detail page, so that
                  users can click to learn more about it. You can add your
                  webpage URL too.
                </div>
                <input
                  type="url"
                  name="url"
                  placeholder="https://yoursite.com/123"
                  onChange={handleState}
                />
              </div>

              <div className="description_port">
                <p>
                  Description <sup>*</sup>
                </p>
                <div className="description">
                  The description will be included on the item's detail page.
                </div>
                <textarea
                  name="description"
                  placeholder="Provide a detailed description of your item."
                  required
                  onChange={handleState}
                />
              </div>

              <div className="supply">
                <p>
                  Supply <sup>*</sup>
                </p>
                <div className="description">
                  The number of items that can be minted. Maximum number is of
                  nft to mint is<span> 5</span>
                </div>
                <input
                  type="number"
                  name="supply"
                  max={5}
                  min={1}
                  required
                  onChange={handleState}
                />
              </div>

              <div className="supply">
                <p>
                  Price <sup>*</sup>
                </p>
                <div className="description">
                  The amount you want your NFT to be minted for.
                </div>
                <input
                  type="text"
                  name="price"
                  required
                  onChange={handleState}
                />
              </div>

              <button className="submit" type="submit">
                SUBMIT
              </button>

              {hidemodal && (
                <div className="modal">
                  <div className="modalbox">
                    <div className="body">
                      Are you sure you want to proceed with minting this NFT?
                    </div>

                    <div className="action">
                      <div className="approvals">
                        <div className="yes" onClick={handleSubmit}>
                          Yes
                        </div>
                        <div className="no" onClick={() => setHideModal(false)}>
                          No
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </>
        ) : (
          <div className="login_link">
            You need to be logged in to create an NFT ☹️......
            <Link>Log In</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateNft;
