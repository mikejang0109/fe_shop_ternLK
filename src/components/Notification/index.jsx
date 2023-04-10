import React from "react";

import { toast, ToastBar, Toaster } from "react-hot-toast";

export const Notification = () => {
	return (
		<Toaster
			position="top-right"
			reverseOrder={false}
			toastOptions={{
				style: {
					border: "none",
					padding: "1rem",
          background: "#1A1A1A",
					color: "#FFFFFF",
				},
			}}
		>
			{(t) => (
				<ToastBar toast={t}>
					{({ icon, message }) => (
						<>
							{icon}
							{message}
							{t.type !== "loading" && <button onClick={() => toast.dismiss(t.id)}>X</button>}
						</>
					)}
				</ToastBar>
			)}
		</Toaster>
	);
};
