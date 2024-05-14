import { Fragment } from 'react';

type ReviewProps = {
    user: {
        avatarImage: string;
        name: string;
    };

    textComment: string;
    time: string;
    rating: number;
}

function Review(reviewProps:ReviewProps): JSX.Element{
  return (
    <Fragment>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={reviewProps.user.avatarImage}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{reviewProps.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: '80%' }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {reviewProps.textComment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">
          {reviewProps.time}
        </time>
      </div>
    </Fragment>
  );
}

export default Review;
