import { useContext } from "react";
import { AuthContext } from "../context/Authcontext.jsx";

const Register = () => {
  const {
    registerInfo,
    updateRegisterInfo,
    registerUser,
    registerError,
    isRegisterLoading,
  } = useContext(AuthContext);
  return (
    <form
      className=" flex flex-col content-center justify-center p-48 gap-4 "
      onSubmit={registerUser}
    >
      <h1 className="text-5xl font-bold pb-4">Register</h1>
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        <input
          type="text"
          className="grow"
          placeholder="Username"
          onChange={(e) =>
            updateRegisterInfo({ ...registerInfo, name: e.target.value })
          }
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input
          type="email"
          className="grow"
          placeholder="Email"
          onChange={(e) =>
            updateRegisterInfo({ ...registerInfo, email: e.target.value })
          }
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="password"
          className="grow"
          placeholder="password"
          onChange={(e) =>
            updateRegisterInfo({ ...registerInfo, password: e.target.value })
          }
        />
      </label>
      <button className="btn" type="submit">
        {isRegisterLoading ? "Creating account" : "Register"}
      </button>
      {registerError?.error && (
        <div className="toast toast-end">
          <div className="alert alert-info">
            <span>{registerError?.message}</span>
          </div>
        </div>
      )}
    </form>
  );
};

export default Register;

// import {
//   Card,
//   Input,
//   Checkbox,
//   Button,
//   Typography,
// } from "@material-tailwind/react";

// const Register = () => {
//   return (
//     <Card color="transparent" shadow={false}>
//       <Typography variant="h4" color="blue-gray">
//         Sign Up
//       </Typography>
//       <Typography color="gray" className="mt-1 font-normal">
//         Nice to meet you! Enter your details to register.
//       </Typography>
//       <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
//         <div className="mb-1 flex flex-col gap-6">
//           <Typography variant="h6" color="blue-gray" className="-mb-3">
//             Your Name
//           </Typography>
//           <Input
//             size="lg"
//             placeholder="name@mail.com"
//             className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//             labelProps={{
//               className: "before:content-none after:content-none",
//             }}
//           />
//           <Typography variant="h6" color="blue-gray" className="-mb-3">
//             Your Email
//           </Typography>
//           <Input
//             size="lg"
//             placeholder="name@mail.com"
//             className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//             labelProps={{
//               className: "before:content-none after:content-none",
//             }}
//           />
//           <Typography variant="h6" color="blue-gray" className="-mb-3">
//             Password
//           </Typography>
//           <Input
//             type="password"
//             size="lg"
//             placeholder="********"
//             className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//             labelProps={{
//               className: "before:content-none after:content-none",
//             }}
//           />
//         </div>
//         <Checkbox
//           label={
//             <Typography
//               variant="small"
//               color="gray"
//               className="flex items-center font-normal"
//             >
//               I agree the
//               <a
//                 href="#"
//                 className="font-medium transition-colors hover:text-gray-900"
//               >
//                 &nbsp;Terms and Conditions
//               </a>
//             </Typography>
//           }
//           containerProps={{ className: "-ml-2.5" }}
//         />
//         <Button className="mt-6" fullWidth>
//           sign up
//         </Button>
//         <Typography color="gray" className="mt-4 text-center font-normal">
//           Already have an account?{" "}
//           <a href="#" className="font-medium text-gray-900">
//             Sign In
//           </a>
//         </Typography>
//       </form>
//     </Card>
//   );
// };
// export default Register;
