import "./rooms.css";
import React from "react";

export default function Rooms() {
  return (
    <>
   <div className="container mt-4">
  
  <div className="form-wrap">
    <form id="survey-form">
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label id="name-label" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label id="email-label" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="form-control"
              required
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label id="number-label" htmlFor="number">Age <small>(optional)</small></label>
            <input
              type="number"
              name="age"
              id="number"
              min={10}
              max={99}
              className="form-control"
              placeholder="Age"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Your Stats</label>
            <select
              id="dropdown"
              name="stats"
              className="form-control"
              required
            >
              <option value="" disabled selected>Select</option>
              <option value="couple">Couple</option>
              <option value="single">Single</option>
              <option value="family">Family</option>
              <option value="friend">Friend</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Current Role</label>
            <select
              id="dropdown-role"
              name="role"
              className="form-control"
              required
            >
              <option value="" disabled selected>Select</option>
              <option value="student">Student</option>
              <option value="ac-room">AC Room</option>
              <option value="non-ac-room">Non-AC Room</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Would you recommend this survey to a friend?</label>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="recommend-yes"
                name="recommend"
                value="Definitely"
                className="custom-control-input"
                defaultChecked
              />
              <label className="custom-control-label" htmlFor="recommend-yes">Definitely</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="recommend-maybe"
                name="recommend"
                value="Maybe"
                className="custom-control-input"
              />
              <label className="custom-control-label" htmlFor="recommend-maybe">Maybe</label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input
                type="radio"
                id="recommend-no"
                name="recommend"
                value="Not sure"
                className="custom-control-input"
              />
              <label className="custom-control-label" htmlFor="recommend-no">Not sure</label>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>This survey useful yes or no?</label>
            <div className="custom-control custom-checkbox custom-control-inline">
              <input
                type="checkbox"
                className="custom-control-input"
                name="useful"
                value="yes"
                id="useful-yes"
                defaultChecked
              />
              <label className="custom-control-label" htmlFor="useful-yes">Yes</label>
            </div>
            <div className="custom-control custom-checkbox custom-control-inline">
              <input
                type="checkbox"
                className="custom-control-input"
                name="useful"
                value="no"
                id="useful-no"
              />
              <label className="custom-control-label" htmlFor="useful-no">No</label>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <label>Leave a Message</label>
            <textarea
              id="comments"
              className="form-control"
              name="comments"
              placeholder="Enter your comment here..."
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <button
            type="submit"
            id="submit"
            className="btn btn-primary btn-block"
          >
            Submit Survey
          </button>
        </div>
      </div>
    </form>
  </div>
</div>


    </>
  )
}
