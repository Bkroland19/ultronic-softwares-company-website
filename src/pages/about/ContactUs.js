import { Typography } from "@material-ui/core";
import PhoneEnabledIcon from "@material-ui/icons/PhoneEnabled";
import React from "react";

import { Link } from "react-router-dom";
function ContactUs() {
	return (
		<div class="flex-grow py-8 px-8 max-w-full content-center text-center  bg-gray-200 shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
			<div class="text-center sm:text-left">
				<h2 className="font-extrabold text-purple-600">
					Lets Talk Bussiness Now!
				</h2>
				<p className="text-gray-500 text-center items-center">
					{" "}
					If you are looking for a reliable Software developer to work on your
					project, feel free to reach to us.
				</p>
				<button className="text-center px-5 mx-auto items-center text-sm text-purple-600 rounded-full border font-extrabold border-purple-200 hover:text-black hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 ml-auto lg:ml-0">
					Contact Us
				</button>
				<PhoneEnabledIcon />
			</div>
		</div>
	);
}
export default ContactUs;
