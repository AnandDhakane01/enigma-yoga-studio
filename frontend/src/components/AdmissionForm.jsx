import React, { useState } from "react";

const AdmissionForm = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    batch: "",
    month: "2022-12",
    amount: 500,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("values", values);
    // api call
    setValues({
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      batch: "",
      month: "2022-12",
      amount: 500,
    });
  };

  const handleRadioButtons = (e) => {
    setValues({ ...values, batch: e.target.value });
  };

  return (
    <div className="h-screen w-screen flex items-center bg-gray-300 justify-center">
      <div className="md:flex max-w-6xl bg-white my-5">
        <div className="lg:w-6/12 flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8 h-full">
          <div className="w-full max-w-md space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Admission Form
              </h2>
              <p className="mt-2 mb-10 text-center text-sm text-gray-600">
                Daily Yoga Classes | Multiple Batches | Affordable Monthly Fees
              </p>
            </div>
            <form
              className="mt-8 space-y-6"
              action="#"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="remember" value="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label className="sr-only">First Name</label>
                  <input
                    id="first-name"
                    name="name"
                    type="name"
                    value={values.firstName}
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="First Name"
                    onChange={(e) =>
                      setValues({ ...values, firstName: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="sr-only">Last Name</label>
                  <input
                    id="last-name"
                    name="name"
                    type="name"
                    value={values.lastName}
                    required
                    className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Last Name"
                    onChange={(e) =>
                      setValues({ ...values, lastName: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="sr-only">Age</label>
                  <input
                    id="age"
                    name="age"
                    required
                    placeholder="Age"
                    value={values.age}
                    className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    onChange={(e) =>
                      setValues({ ...values, age: e.target.value })
                    }
                  />
                </div>
                <div className="my-8">
                  <label className="sr-only">Email address</label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    value={values.email}
                    className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Email address"
                    onChange={(e) =>
                      setValues({ ...values, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <p className="text-sm text-gray-500 m-2">Select Batch: </p>
                  <div className="flex items-center m-2 mx-10">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value="6-7am"
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      onChange={handleRadioButtons}
                    />
                    <label className="ml-2 text-sm text-gray-900 dark:text-gray-300">
                      6-7 AM
                    </label>
                  </div>
                  <div className="flex items-center m-2 mx-10">
                    <input
                      id="default-radio-2"
                      type="radio"
                      value="7-8am"
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      onChange={handleRadioButtons}
                    />
                    <label className="ml-2 text-sm text-gray-900 dark:text-gray-300">
                      7-8 AM
                    </label>
                  </div>

                  <div className="flex items-center m-2 mx-10">
                    <input
                      id="default-radio-2"
                      type="radio"
                      value="8-9am"
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      onChange={handleRadioButtons}
                    />
                    <label className="ml-2 text-sm text-gray-900 dark:text-gray-300">
                      8-9 AM
                    </label>
                  </div>

                  <div className="flex items-center m-2 mx-10">
                    <input
                      id="default-radio-2"
                      type="radio"
                      value="5-6pm"
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      onChange={handleRadioButtons}
                    />
                    <label className="ml-2 text-sm text-gray-900 dark:text-gray-300">
                      5-6 PM
                    </label>
                  </div>
                </div>
                <div className="mt-12">
                  {/* <p className="text-sm text-gray-500 m-2">Month:</p> */}
                  <label className="sr-only"></label>
                  <input
                    id="month"
                    name="month"
                    type="month"
                    defaultValue={values.month}
                    required
                    className="block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    onChange={(e) =>
                      setValues({ ...values, month: e.target.value })
                    }
                  />
                </div>

                <p className="text-sm py-4">
                  <span className="text-gray-500">Amount:</span> 500/-
                </p>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="lg:w-6/12 flex items-center justify-center">
          <img
            className="h-full w-full"
            // src="https://images.unsplash.com/photo-1593810451056-0acc1fad48c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
            src="https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;
