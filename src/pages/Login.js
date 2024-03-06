import { Admin } from "./Admin";

export default function Login() {
  return (
    <div>
      <h1>Welcome to TuneHub Please Login below</h1>
      <div id="login">
        <form action="validate" method="post" id="form" onSubmit={Admin}>
          <h2>USER LOGIN</h2>

          <div class="form-group">
            <label for="email">Email:</label>
            <br />
            <input type="email" id="email" name="email" required />
          </div>

          <div class="form-group">
            <label for="password">Password:</label>
            <br />
            <input type="password" id="password" name="password" required />
          </div>

          <input type="submit" value="LOGIN" class="btn" />
        </form>
      </div>
    </div>
  );
}
