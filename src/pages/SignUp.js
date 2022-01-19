export const SignUp = () => {
  return (
    <>
      <h1>Sign Up</h1>

      <input
        type="text"
        aria-label="username"
        name="username"
        placeholder="Username"
      />

      <input type="email" aria-label="email" name="email" placeholder="Email" />

      <input
        type="password"
        aria-label="password"
        name="password"
        placeholder="Password"
      />
    </>
  );
};
