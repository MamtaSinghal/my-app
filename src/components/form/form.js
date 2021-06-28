import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.handleAddUsers}>
      <div class="form-group">
        <label for="fist_name">First Name</label>
        <input
          required
          type="text"
          class="form-control"
          id="fist_name"
          placeholder="Enter the first name"
        />
      </div>
      <div class="form-group">
        <label for="last_name">Last Name</label>
        <input
          required
          type="text"
          class="form-control"
          id="last_name"
          placeholder="Enter the last name"
        />
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          required
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter the email address"
        />
      </div>

      <div class="form-group">
        <label for="image_url">Image</label>
        <input
          required
          type="text"
          class="form-control"
          id="image_url"
          placeholder="Enter the image url"
        />
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
