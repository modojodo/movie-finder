import React, { Component } from 'react';
import Media from "../Media/Media";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalActive: false,
      done: false
    }
  }

  toggleModal() {
    this.setState(function (state) {
      return {
        isModalActive: !state.isModalActive,
        done: false
      }
    });
  }

  checkout() {
    this.setState((state) => {
      return {
        ...state,
        done: true,
      }
    });
    this.props.clear();
  }

  render() {
    const { state: { isModalActive, done }, props: { media, onMediaClick } } = this;
    return (
      <>
        <button className='button is-dark is-large is-fullwidth fixed'
                onClick={this.toggleModal.bind(this)}>Checkout
        </button>
        <div className={`modal ${isModalActive ? 'is-active' : ''}`}>
          <div className="modal-background"/>
          <div className="modal-content">
            <div className="card">
              {!done &&
              <div>
                <div className="columns">
                  <div className="column">
                    {
                      media.map((media) => {
                        return (
                          <Media media={media} onMediaClick={onMediaClick.bind(this)} key={media.imdbID}/>
                        );
                      })
                    }
                  </div>
                </div>
                <button className='button is-medium is-fullwidth is-warning no-radius'
                        onClick={this.checkout.bind(this)}>Looks Good!
                </button>
              </div>}
              {done && <div className="notification is-success mt-6 mb-6 mr-6 ml-6">
                Your order has been processed!
              </div>}
            </div>
          </div>
          <button className="modal-close is-large"
                  aria-label="close"
                  onClick={this.toggleModal.bind(this)}>
          </button>
        </div>
      </>
    )
  }

}

export default Checkout;